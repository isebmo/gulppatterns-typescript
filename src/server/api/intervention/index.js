'use strict';

var express = require('express');
var controller = require('./intervention.controller');

var router = express.Router();

router.get('/', controller.getInterventions);
router.post('/', controller.saveInterventions);
router.get('/:nd', controller.getInterventionsByND);
router.get('/:nd/:date', controller.getInterventionsByNDAndDate);

module.exports = router;
