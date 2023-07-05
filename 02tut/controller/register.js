const fsPromises = require("fs").promises;
const path = require("path");
const bcrypt = require("bcrypt");
const usersData = require("../utils/usersData");

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({
      err: "All fields are required",
    });
  }
  try {
    const users = usersData.users.find((user) => user.email === email);
    if (users) {
      return res.status(409).send("user already exists");
    }
    const id = usersData.users.length ? usersData.users.length + 1 : 1;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = {
      id,
      username,
      roles: { User: 2001 },
      password: hashedPassword,
      email,
    };
    usersData.setUsers([...usersData.users, newUser]);

    await fsPromises.writeFile(
      path.join(__dirname, "..", "models", "user.json"),
      JSON.stringify(usersData.users)
    );

    return res.status(201).json("New User created!");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ err: error.message });
  }
};
