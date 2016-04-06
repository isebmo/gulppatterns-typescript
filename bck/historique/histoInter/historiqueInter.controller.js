(function () {
    'use strict';

    angular
        .module('app.historique.interventions')
        .controller('HistoriqueInter', HistoriqueInter);

    /* @ngInject */
    function HistoriqueInter(interventionCurrentService, interventions, $state, $stateParams, toastr,
        $rootScope, historiqueInterService, INTERVENTION_EVENT, $scope) {
        var vm = this;

        vm.param = {
            interventions: interventions || [],
            title: $stateParams.title
        };
        vm.fn = {
            selectIntervention: selectIntervention
        };

        _activate();

        //////////////////

        function _activate() {
            var event = $rootScope.$on(INTERVENTION_EVENT.SYNCING.SERVER.SUCCESS, function () {
                _reloadIntervention();
            });
            $scope.$on('$destroy', function () {
                //destroy listener
                event();
            });
        }

        function _reloadIntervention() {
            historiqueInterService.loadInterventions().then(function (interventions) {
                vm.param.interventions = interventions;
            });
        }

        function selectIntervention(intervention) {
            interventionCurrentService.setCurrentIntervention(intervention)
                .then(function () {
                    $state.go('home.helios.intervention');
                }).catch(function (err) {
                toastr.error(err);
            });
        }

    }
})();
