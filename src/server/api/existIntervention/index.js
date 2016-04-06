'use strict';

var express = require('express');
var controller = require('./existIntervention.controller.js');

var router = express.Router();

router.get('/:nd', controller.getExistIntervention);

module.exports = router;
