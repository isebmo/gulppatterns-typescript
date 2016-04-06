(function () {
    'use strict';

    angular
        .module('app.helios.nmihd')
        .factory('NmihdAlgoMesureCommon', nmihdAlgoMesureCommon);

    /* @ngInject */
    function nmihdAlgoMesureCommon() {

        return {
            isGreen: isGreen,
            isRed: isRed,
            isUnknown: isUnknown
        };

        function isGreen(mesure) {
            return mesure && mesure.decision && mesure.decision === 'success';
        }

        function isRed(mesure) {
            return mesure && mesure.decision && mesure.decision === 'danger';
        }

        function isUnknown(mesure) {
            return !isGreen(mesure) && !isRed(mesure);
        }
    }

})();

