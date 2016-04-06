(function () {
    'use strict';

    angular
        .module('app.recapmesures.mesure.interview')
        .controller('InterviewModalCtrl', InterviewModalCtrl);

    /* @ngInject */
    function InterviewModalCtrl($uibModalInstance, interviewModalParam) {
        var vm = this;

        vm.param = {
            interviewModalParam: interviewModalParam
        };

        // Méthodes
        vm.fn = {
            closePopIn: closePopIn
        };

        ////////////////////////////

        function closePopIn(choix) {
            $uibModalInstance.close(choix);
        }
    }
})();
