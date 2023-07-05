const express = require('express');
const { handleLogout } = require('../controller/logoutController');

const router = express.Router();

router
.route("/")
.post(handleLogout);


module.exports = router;