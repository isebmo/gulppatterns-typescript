'use strict';

var express = require('express');
var controller = require('./mambo.controller.js');

var router = express.Router();

router.get('/paramLines', controller.getParamLines);
router.get('/graphic/:type', controller.getGraphic);
router.get('/status', controller.getStatus);

module.exports = router;