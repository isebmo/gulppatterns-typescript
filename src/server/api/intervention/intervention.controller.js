'use strict';

var jsonfileservice = require('../../utils/jsonfileservice')();
var moment = require('moment');
var data = '/../data/';
var interventions = [];

_initInterventions();

function _initInterventions() {
    console.log('chargement des interventions depuis le fichier');
    interventions = jsonfileservice.getJsonFromFile(data + 'intervention.json');
}

exports.getInterventions = getInterventions;
exports.saveInterventions = saveInterventions;
exports.getInterventionsByND = getInterventionsByND;
exports.getInterventionsByNDAndDate = getInterventionsByNDAndDate;

function getInterventions(req, res, next) {
    res.send(_getInterventions(req.query));
}
function _getInterventions(queryParams) {
    var listIntervention = [];
    for (var i = 0; i < interventions.length; i++) {
        var obj = interventions[i];
        obj.date = new Date(2015, i, 1);
        obj.syncDate = new Date(2015, i, 2);

        var isAfterDateDebutQuery = !queryParams.dateDebut ||
            moment(new Date(obj.date)).isAfter(new Date(+queryParams.dateDebut));
        var isBeforeDateFinQuery = !queryParams.dateFin ||
            moment(new Date(obj.date)).isBefore(new Date(+queryParams.dateFin));
        if (isAfterDateDebutQuery && isBeforeDateFinQuery) {
            listIntervention.push(obj);
        }
    }
    console.log('getInterventions ' + listIntervention);
    return listIntervention;
}

/**
 * Récupère les demande de sauvegarde des données pour les afficher dans la console
 * @param req
 * @param res
 * @param next
 */
function saveInterventions(req, res) {
    var interventions = req.body;
    interventions.forEach(function (intervention) {
        intervention.syncDate = new Date();
        intervention.id = interventions.length + 1;
        console.log('ajout de l\'intervention : ' + JSON.stringify(intervention));
        _storeIntervention(intervention);
    });
    res.send(req.body);
}

function _storeIntervention(i) {
    var exist = false;
    for (var j = 0; j < interventions.length && !exist; j++) {
        var intervention = interventions[j];
        if (intervention.date === i.date && intervention.nd === i.nd) {
            interventions[j] = i;
            exist = true;
        }
    }
    if (!exist) {
        interventions.push(i);
    }
    return i;
}

function getInterventionsByND(req, res) {
    //_return500(res);
    res.send(_getInterventionsByND(req));
}
function _getInterventionsByND(req) {
    console.log('_getInterventionsByND');
    var nd = req.params.nd,
        subArray = [],
        fullArray = _getInterventions(req.query);
    fullArray.forEach(function (inter) {
        if (inter.nd === nd) {
            subArray.push(inter);
        }
    });
    return subArray;
}

function getInterventionsByNDAndDate(req, res) {
    res.send(_getInterventionsByNDAndDate(req));
}
function _getInterventionsByNDAndDate(req) {
    console.log('_getInterventionsByNDAndDate');
    var date = parseInt(req.params.date),
        subArray = [],
        fullArray = _getInterventionsByND(req);
    fullArray.forEach(function (inter) {
        if (new Date(inter.date).getTime() === new Date(+date).getTime()) {
            subArray.push(inter);
        }
    });
    return subArray;
}

function _return500(res) {
    var e = {
        status: 500,
        code: 'CODE',
        description: 'Problem'
    };
    res.status(500)
        .send(e)
        .end();
}
