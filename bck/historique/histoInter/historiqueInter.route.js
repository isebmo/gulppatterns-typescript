(function () {
    'use strict';

    angular
        .module('app.historique.interventions')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'home.helios.historique.interventions',
                config: {
                    url: '/interventions',
                    templateUrl: 'app/historique/histoInter/historiqueInter.html',
                    controller: 'HistoriqueInter',
                    controllerAs: 'vm',
                    params: {
                        title: 'Historique des Interventions'
                    },
                    resolve: {
                        interventions: getInterventions
                    }
                }
            }
        ];

        /* @ngInject */
        function getInterventions(historiqueInterService, toastr, $q, spinnerService) {
            var promise = historiqueInterService.loadInterventions();
            spinnerService.makeMeSpin(promise);
            return promise.catch(function (err) {
                toastr.error(err);
                return $q.when([]);
            });
        }
    }
})();
