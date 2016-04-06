(function () {
    'use strict';

    angular
        .module('app.layout')
        .directive('leftNav', leftNav);

    /* @ngInject */
    function leftNav() {
        return {
            bindToController: true,
            controller: LeftNavController,
            controllerAs: 'vm',
            restrict: 'EA',
            scope: {},
            templateUrl: 'app/layout/left-nav.html'
        };

        ///////////////////////////

        /* @ngInject */
        function LeftNavController(INTERVENTION_EVENT, $state, $rootScope) {

            var vm = this;
            vm.param = {
                state : $state,
                intervention : null
            };
            vm.fn = {
            };

            activate();

            ////////////////////

            function activate() {
                $rootScope.$on(INTERVENTION_EVENT.CURRENT_UPDATED, function (event, inter) {
                    vm.param.intervention = inter;
                });
            }
        }
    }
})();
