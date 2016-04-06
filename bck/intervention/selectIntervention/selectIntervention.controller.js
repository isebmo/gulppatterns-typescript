(function () {
    'use strict';

    angular
        .module('app.intervention.selectIntervention')
        .controller('SelectInterventionCtrl', SelectInterventionCtrl);

    /* @ngInject */
    function SelectInterventionCtrl(interventions, $uibModalInstance) {
        var vm = this;
        vm.title = 'Séléction de l\'Interventions';
        vm.nd = interventions.nd;
        vm.interventions = interventions.interventions;

        // Méthodes
        vm.createIntervention = createIntervention;
        vm.loadIntervention = loadIntervention;

        ////////////////////////////

        function createIntervention () {
            $uibModalInstance.close();
        }

        function loadIntervention (intervention) {
            $uibModalInstance.close(intervention);
        }
    }
})();
