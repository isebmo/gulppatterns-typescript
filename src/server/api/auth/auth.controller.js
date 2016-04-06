'use strict';

exports.getUser = getUser;

/**
 * Bouchon data pour graph
 * @param req
 * @param res
 * @param next
 */
function getUser(req, res, next) {
    var user = {
        login: 'pierre paul',
        nd: '0123456789',
        pidiRoles: ['saisi_fact_gdp', 'ptools', 'mutpc_ptools', 'carto_ptools', 'vqse_ptools', 'helios_ptools'],
        siuId: '1117889767819996',
        idETL: '207',
        codeETL: 'ETL207',
        type: 'SIU',
        userId: 'yves',
        connectionId: '1117889767819996',
        baseEcoleUser: false
    };

    /*res.status(401)
        .send({})
        .end();*/
    res.send(user);
}
