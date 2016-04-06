(function () {
    'use strict';

    angular
        .module('app.historique.nd')
        .controller('HistoriqueNd', HistoriqueNd);

    /* @ngInject */
    function HistoriqueNd(interventions, interventionCurrentService, $state, toastr) {
        var vm = this;

        vm.param = {
            interventions: interventions || []
        };
        vm.fn = {
            getTitle: getTitle,
            selectIntervention: selectIntervention
        };

        _activate();

        //////////////////

        function _activate() {
        }

        function getTitle() {
            if (interventions && interventions.length > 0) {
                return 'Historique du ND : ' + interventions[0].nd;
            } else {
                return 'Historique du ND';
            }
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
