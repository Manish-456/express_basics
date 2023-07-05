const usersData = require("../utils/usersData");
const path = require("path");
const fsPromises = require("fs").promises;

exports.handleLogout = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies.jwt) return res.sendStatus(401);
  const refreshToken = cookies.jwt;

  const foundUser = usersData.users.find(
    (user) => user.refreshToken === refreshToken
  );
  if (!foundUser) {
    res.clearCookie("jwt", {
      httpOnly: true,
    });
    return res.sendStatus(204);
  }

  const otherUsers = usersData.users.filter(
    (person) => person.refreshToken !== refreshToken
  );
  const currentUser = {
    ...foundUser,
    refreshToken: "",
  };
  usersData.setUsers([...otherUsers, currentUser]);
  fsPromises.writeFile(
    path.join(__dirname, "..", "models", "users.json"),
    JSON.stringify(usersData.users)
  );
   res.clearCookie('jwt', {
    httpOnly : true
  });
  res.sendStatus(204);
};
