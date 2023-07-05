const express = require('express');
const { refreshController } = require('../controller/refreshController');
const router = express.Router();

router
.route("/")
.get(refreshController);


module.exports = router;