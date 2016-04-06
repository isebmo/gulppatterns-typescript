(function () {
    'use strict';

    angular
        .module('app.historique.nd')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'home.helios.historique.nd',
                config: {
                    url: '/nd',
                    templateUrl: 'app/historique/histoNd/historiqueNd.html',
                    controller: 'HistoriqueNd',
                    controllerAs: 'vm',
                    params: {
                        title: 'Historique des interventions du ND'
                    },
                    resolve: {
                        interventions: getInterventions
                    }
                }
            }
        ];

        /* @ngInject */
        function getInterventions(interventionStorageService, interventionCurrentService, $filter, $q, toastr, $log,
                                  $rootScope, INTERVENTION_EVENT) {
            return interventionCurrentService.getCurrentIntervention().then(function (i) {
                if (i) {
                    var filter = {
                        nd: i.nd
                    };
                    // on écoute si un pb car le service ne retourne pas d'erreur pour ne pas briser la chaine des
                    // promesses...
                    var gettingInterEventError = $rootScope.$on(INTERVENTION_EVENT.GETTING.SERVER.ERROR, function () {
                        toastr.warning('toutes les interventions n’ont pas été récupérées');
                    });
                    return interventionStorageService.getInterventions(filter)
                        .then(function (list) {
                            return $filter('orderBy')(list, 'date', true);
                        })
                        .catch(function (e) {
                            $log.error(e);
                        }).finally(function () {
                            //destroy listener
                            gettingInterEventError();
                        });
                } else {
                    return $q.when([]);
                }
            });
        }
    }
})();
