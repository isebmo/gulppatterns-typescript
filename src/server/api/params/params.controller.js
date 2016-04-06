'use strict';
exports.getParams = getParams;

var jsonfileservice = require('../../utils/jsonfileservice')();
var moment = require('moment');
var data = '/../data/';

/**
 * Simule les tables de références gérées par le back-end
 * @param req
 * @param res
 * @param next
 */
function getParams(req, res, next) {

    var params = jsonfileservice.getJsonFromFile(data + 'params.json');
    res.send(params);
    /*_return501(res)*/
}


/*function _return501(res, param) {
 var e = {
 status: 500,
 code: 'CODE',
 description: 'Not implemented parameter : '
 };
 res.status(501)
 .send(e)
 .end();
 }*/
