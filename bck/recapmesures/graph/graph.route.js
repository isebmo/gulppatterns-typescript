(function() {
    'use strict';

    angular
        .module('app.graph')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'home.helios.graph',
                config: {
                    url: '/graph',
                    templateUrl: 'app/recapmesures/graph/graph.html',
                    controller: 'Graph',
                    controllerAs: 'vm',
                    params: {
                        title: 'Courbe'
                    },
                    resolve: {
                        updateTimeGraph: updateTimeGraph
                    }
                }
            }
        ];

        /* @ngInject */
        function updateTimeGraph(params, $q) {
            return params.getParams().then(function (data) {
                return data.updateTimeGraph;
            }).catch(function () {
                return $q.when(undefined);
            });
        }
    }
})();
