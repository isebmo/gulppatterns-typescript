'use strict';

exports.getExistIntervention = getExistIntervention;

/**
 * Contrôle l'existence d'une intervention sur le ND
 * @param req
 * @param res
 */
function getExistIntervention(req, res) {
    res.send(_getExistIntervention(req));
}

function _getExistIntervention(req){
    var nd = req.params.nd;
    return { exist: (nd !== '0123456700')};
}
