(function () {
    'use strict';

    angular
        .module('app.recapmesures.mesure.interview')
        .factory('interviewService', interviewService);

    /* @ngInject */
    function interviewService(params, interventionCurrentService, $log, $q, $filter) {

        return {
            getInterview: getInterview,
            addInterviewType: addInterviewType,
            deleteInterviewType: deleteInterviewType
        };

        //////////////////////////////

        function getInterview(monType, intervention) {
            var promise = $q.when(null);
            var controleMesure = _controlerMesures();
            var choice = $filter('interventionGetChoiceByType')(intervention, monType);

            if (controleMesure && !choice) {
                promise = _getFormulaire(monType);
                promise.then(function (interview) {
                    return interview;
                });
            }
            return promise;

            function _controlerMesures() {
                var controle = null;
                switch (monType) {
                    case 'PC':
                        controle = $filter('nmihdLast')(intervention, {type: 'PC'}) === null &&
                            $filter('nmihdLast')(intervention, {type: 'PT'}) === null;
                        break;
                    case 'SR':
                        controle = $filter('nmihdLast')(intervention, {type: 'SR'}) === null &&
                            $filter('nmihdLast')(intervention, {type: 'PC'}) === null &&
                            $filter('nmihdLast')(intervention, {type: 'PT'}) !== null;
                        break;
                    default:
                        var msgE = 'mesure ' + monType + ' non traité dans Interview';
                        $log.warn(msgE);
                }
                return controle;
            }
        }

        function _getFormulaire(monType) {
            return params.getParams().then(function success(data) {
                var result = null;
                if (data.interview && data.interview.questions) {
                    angular.forEach(data.interview.questions, function (question) {
                        if (question && question.type === monType) {
                            result = question;
                        }
                    });
                }
                return result;
            }).catch(function (e) {
                $log.error(e);
                return e;
            });
        }

        function addInterviewType(monType, inter, question, reponse) {
            var choice = $filter('interventionGetChoice')(inter, reponse.code);

            if (!inter.choix) {
                inter.choix = [];
                _addInterviewChoix(monType, inter, question, reponse);
            } else {
                if (choice) {
                    if (!choice.hasOwnProperty('interview')) {
                        choice.interview = {
                            type: monType,
                            question: question.intitule,
                            reponse: reponse.libelle
                        };
                    }
                } else {
                    _addInterviewChoix(monType, inter, question, reponse);
                }
            }

            return $q.when(inter);
        }

        function _addInterviewChoix(monType, inter, question, reponse) {
            inter.choix[inter.choix.length] = {
                code: reponse.code,
                interview: {
                    type: monType,
                    question: question.intitule,
                    reponse: reponse.libelle
                }
            };
        }

        function deleteInterviewType(monType, intervention) {
            var choice = $filter('interventionGetChoiceByType')(intervention, monType);
            if (choice !== null) {
                var position = intervention.choix.indexOf(choice);
                intervention.choix.splice(position, 1);
            }
            return $q.when(intervention);
        }

    }
})();
