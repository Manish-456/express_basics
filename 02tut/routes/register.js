const express = require('express');
const { register } = require('../controller/register');
const router = express.Router();

router
.route("/")
.post(register)

module.exports = router;