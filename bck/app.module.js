(function() {

    'use strict';

    angular.module('app', [
        /* Modules partagés */
        'app.core',

        /* Feature areas */
        'app.layout',

        /* Modules applicatifs */
        'app.helios',
        'app.recapmesures',
        'app.intervention',
        'app.historique',
        'app.graph',
        'app.mesure',
        'app.historique.interventions',
        'app.historique.nd'

    ]);

})();
