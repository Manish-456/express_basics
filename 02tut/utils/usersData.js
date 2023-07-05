const usersData = {
    users: require("../models/users.json"),
    setUsers: function (data) {
      this.users = data;
    },
  };

  module.exports = usersData;