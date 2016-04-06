(function () {
    'use strict';

    angular
        .module('app.recapmesures.mesure.interview')
        .directive('heliosinterview', heliosInterview);

    /* @ngInject */
    function heliosInterview() {
        var directive = {
            bindToController: {
                mesureType: '='
            },
            controller: HeliosInterviewCtrl,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

    /* @ngInject */
    function HeliosInterviewCtrl($uibModal, interviewService, interventionCurrentService, $log) {
        var vm = this;
        vm.param = {};

        activate();

        function activate() {
            interventionCurrentService.getCurrentIntervention().then(function (inter) {
                interviewService.getInterview(vm.mesureType, inter).then(function (question, inter) {
                    if (question) {
                        _loadInterviewAndUpdateIntervention(question, inter);
                    }
                });
            });
        }

        /**
         * Gère la modal de bootstrap qui permet d'afficher l'interview
         */
        function _loadInterviewAndUpdateIntervention(question, inter) {

            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/recapmesures/mesure/interview/interview.html',
                controller: 'InterviewModalCtrl',
                controllerAs: 'vm',
                backdrop: 'static', // ne peut pas quitter la modal en cliquant en dehors
                keyboard: false, // ne peut pas quitter la modal en appuyant sur Echap
                size: 'sm',
                resolve: {
                    //Members that will be resolved and passed to the controller as locals
                    interviewModalParam: function () {
                        return {
                            question: question
                        };
                    }
                }
            });

            modalInstance.result.then(function (choix) {
                interventionCurrentService.getCurrentIntervention()
                    .then(_setInterview(choix))
                    .then(interventionCurrentService.updateIntervention)
                    .catch(function (e) {
                        return e;
                    });

            });

            function _setInterview(choix) {
                return function (inter) {
                    return interviewService.addInterviewType(vm.mesureType, inter, question, choix);
                };
            }

        }
    }

})();

