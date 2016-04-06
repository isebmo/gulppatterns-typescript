'use strict';

var express = require('express');
var controller = require('./auth.controller.js');

var router = express.Router();

router.get('/', controller.getUser);

module.exports = router;