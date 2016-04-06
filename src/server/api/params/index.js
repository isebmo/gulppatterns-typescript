'use strict';

var express = require('express');
var controller = require('./params.controller.js');

var router = express.Router();

router.get('/', controller.getParams);

module.exports = router;