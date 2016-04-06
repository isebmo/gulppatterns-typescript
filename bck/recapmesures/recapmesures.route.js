(function() {
    'use strict';

    angular
        .module('app.recapmesures')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'home.helios.mesures',
                config: {
                    abstract: true,
                    template: '<div ui-view=""></div>',
                    resolve: {
                        currentIntervention: currentIntervention
                    }
                }
            },
            {
                state: 'home.helios.mesures.recapmesures',
                config: {
                    url: '/mesures',
                    templateUrl: 'app/recapmesures/recapmesures.html',
                    controller: 'RecapMesures',
                    controllerAs: 'vm',
                    params: {
                        title: 'Mesures'
                    }
                }
            }
        ];

        /* @ngInject */
        function currentIntervention($q, interventionCurrentService) {
            var deferred = $q.defer();
            interventionCurrentService.getCurrentIntervention().then(function (i) {
                if (!i) {
                    //todo erreur à renvoyer se lettre d'accord sur le format de l'objet
                    deferred.reject({data: 'pas de current intervention'});
                } else {
                    deferred.resolve(i);
                }
            });
            return deferred.promise;
        }
    }
})();
