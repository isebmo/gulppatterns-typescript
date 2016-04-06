(function() {
    'use strict';

    angular
        .module('app.mesure')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'home.helios.mesures.mesure-new',
                config: {
                    url: '/mesure/{typeMesure}',
                    templateUrl: 'app/recapmesures/mesure/mesure.html',
                    controller: 'Mesure',
                    controllerAs: 'vm',
                    params: {
                        title: 'Mesure'
                    },
                    resolve: {
                        checkRightToAddMesure: checkRightToAddMesure,
                        loadParam: loadParam
                        //todo appeler le service (une fonction qui retourne une promesse) ici pour savoir si on doit
                        // afficher la popin ou non
                        //cette méthode renverra soit le formulaire de l'interview soit rien
                    }
                }
            },
            {
                state: 'home.helios.mesures.mesure-detail',
                config: {
                    url: '/mesure/{typeMesure}/{dateMesure}',
                    templateUrl: 'app/recapmesures/mesure/mesure.html',
                    controller: 'Mesure',
                    controllerAs: 'vm',
                    params: {
                        title: 'Détails mesure'
                    },
                    resolve: {
                        loadParam: loadParam
                    }
                }
            }
        ];

        /* @ngInject */
        function loadParam(params) {
            return params.getParams();
        }

        /* @ngInject */
        function checkRightToAddMesure(interventionCurrentService, MODIFICATION_RIGHT, $q, interventionUtilsService) {
            var deferred = $q.defer();
            interventionCurrentService.getCurrentIntervention()
                .then(checkRight)
                .catch(function (e) {
                    deferred.reject(new Error('Unauthorized routing ' + e));
                });
            return deferred.promise;

            function checkRight(intervention) {
                interventionUtilsService.
                hasRightToCreateMesure(intervention, MODIFICATION_RIGHT.ANYTHING_EXCEPT_ND).then(function (bool) {
                    if (bool) {
                        deferred.resolve(bool);
                    } else {
                        deferred.reject(new Error('Unauthorized routing'));
                    }
                });
            }
        }
    }
})();
