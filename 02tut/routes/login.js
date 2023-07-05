const express = require('express');
const { loginController } = require('../controller/login');
const router = express.Router();

router
.route("/")
.post(loginController);


module.exports = router;