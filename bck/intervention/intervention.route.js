(function () {
    'use strict';

    angular
        .module('app.intervention')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'home.helios.intervention',
                config: {
                    url: '/intervention/{nd}?BASE_GPC&NUMINT&ACT&PROD',
                    templateUrl: 'app/intervention/intervention.html',
                    controller: 'Intervention',
                    controllerAs: 'vm',
                    params: {
                        title: 'Intervention'
                    },
                    resolve: {
                        loadParam: loadParam,
                        checkQueryParam: checkQueryParam
                    }
                }
            }
        ];

        /* @ngInject */
        function loadParam(params) {
            return params.getParams();
        }

        /* @ngInject */
        function checkQueryParam(interventionStorageService, $stateParams, $filter, $q) {
            var filter = {
                nd: $stateParams.nd,
                baseGPC: $stateParams.BASE_GPC,
                numint: $stateParams.NUMINT,
                act: $stateParams.ACT,
                prod: $stateParams.PROD
            };
            var promise;
            if (!$stateParams.nd) {
                promise = $q.when(filter);
            } else {
                promise = interventionStorageService.getInterventions(filter)
                    .then(function (list) {
                        filter.interventions = $filter('orderBy')(list, 'date', true);
                        return filter;
                    });
            }
            return promise;
        }
    }
})();
