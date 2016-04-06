function routage(app) {

    var api = '/api/';
    var data = '/../data/';
    var jsonfileservice = require('../utils/jsonfileservice')();
    var four0four = require('../utils/404')();

    //API
    app.use('/api/private/interventions', require('../api/intervention'));
    app.use('/api/public/params', require('../api/params'));
    app.use('/api/connect', require('../api/auth'));
    app.use('/', require('../api/mambo'));
    app.use('/api/private/existIntervention', require('../api/existIntervention'));

    app.get(api + '*', four0four.notFoundMiddleware);
}

module.exports = routage;
