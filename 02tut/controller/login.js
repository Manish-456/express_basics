const bcrypt = require("bcrypt");
const usersData = require("../utils/usersData");
const jwt = require("jsonwebtoken");
const path = require("path");
const fsPromises = require("fs").promises;

exports.loginController = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({
      err: "All fields are required",
    });
  try {
    const user = usersData.users.find((user) => user.email === email);
    if (!user) {
      return res.status(404).json({
        err: "User doesn't exist",
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.sendStatus(204);
    } else {
      const roles = Object.values(user.roles);
      const accessToken = jwt.sign(
        {
          userInfo: {
            username: user.username,
            roles: roles,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "30s",
        }
      );
      const refreshToken = jwt.sign(
        {
          userInfo: {
            username: user.username,
            roles: roles,
          },
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
          expiresIn: "15m",
        }
      );
      const otherUsers = usersData.users.filter(
        (person) => person.username !== user.username
      );
      const currentUser = { ...user, refreshToken };
      usersData.setUsers([...otherUsers, currentUser]);
      await fsPromises.writeFile(
        path.join(__dirname, "..", "models", "users.json"),
        JSON.stringify(usersData.users)
      );
      return res
        .cookie("jwt", refreshToken, {
          maxAge: 24 * 60 * 60 * 1000,
          httpOnly: true,
        })
        .json({
          accessToken,
        });
    }
  } catch (error) {
    return res.status(500).json({
      err: error.message,
    });
  }
};
