(function() {
    'use strict';

    angular
        .module('app.historique')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'home.helios.historique',
                config: {
                    url: '/historique',
                    templateUrl: 'app/historique/historique.html',
                    controller: 'Historique',
                    controllerAs: 'vm',
                    abstract: true,
                    params: {
                        title: 'Historique'
                    }
                }
            }
        ];
    }
})();
