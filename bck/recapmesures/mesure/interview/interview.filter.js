(function () {
    'use strict';

    angular
        .module('app.recapmesures.mesure.interview')
        .filter('interventionContainsChoice', ChoiceMatchCode)
        .filter('interventionGetChoiceByType', ChoiceMatchType)
        .filter('interventionGetChoice', GetChoiceMatchCode);

    /* @ngInject */
    function ChoiceMatchCode() {
        return choiceMatchCode;

        ////////////////

        /**
         *
         * @param {*} intervention
         * @param {array} intervention.choix
         * @param {string} code
         * @returns {boolean} choix.type.code match code
         */
        function choiceMatchCode(intervention, code) {
            var result = false;

            if (intervention && intervention.choix && Array.isArray(intervention.choix)) {
                for (var i = 0; i < intervention.choix.length && !result; i++) {
                    var choix = intervention.choix[i];
                    if (choix.code === code) {
                        result = true;
                    }
                }
            }

            return result;
        }
    }

    /* @ngInject */
    function ChoiceMatchType() {
        return choiceMatchType;

        ////////////////

        /**
         *
         * @param {*} intervention
         * @param {array} intervention.choix
         * @param {string} type
         * @returns {choix} choix.interview.type match type
         */
        function choiceMatchType(intervention, type) {
            var result = null;

            if (intervention && intervention.choix && Array.isArray(intervention.choix)) {
                for (var i = 0; i < intervention.choix.length && !result; i++) {
                    var choix = intervention.choix[i];
                    if (choix.hasOwnProperty('interview') && choix.interview.type === type) {
                        result = choix;
                    }
                }
            }

            return result;
        }
    }

    /* @ngInject */
    function GetChoiceMatchCode() {
        return getChoiceMatchCode;

        ////////////////

        /**
         *
         * @param {*} intervention
         * @param {array} intervention.choix
         * @param {string} code
         * @returns {choice} choix
         */
        function getChoiceMatchCode(intervention, code) {
            var result = null;

            if (intervention && intervention.choix && Array.isArray(intervention.choix)) {
                for (var i = 0; i < intervention.choix.length && result === null; i++) {
                    var choix = intervention.choix[i];
                    if (choix.code === code) {
                        result = choix;
                    }
                }
            }

            return result;
        }
    }

})();

