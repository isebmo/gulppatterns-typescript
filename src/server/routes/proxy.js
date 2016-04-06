/** Utilisation du plugin http-proxy-middleware pour forwarder
 les requêtes HTTP sur un autre serveur que le nodeJS du socle.
 Exemple ci-dessous : http://localhost:3000/api/suivi devient http://localhost:5000/application/api/suivi*/

var param = {
    context: '/api',
    options: {
        target: 'http://localhost:8089',
        pathRewrite: {
            '^/api': '/piditools-war/helios/api' // rewrite paths
        }
    }
};

function proxyBackEnd(app) {
    var proxyMiddleware = require('http-proxy-middleware');
    var backendProxy = proxyMiddleware(param.context, param.options);
    app.use(backendProxy);
}

module.exports = proxyBackEnd;
