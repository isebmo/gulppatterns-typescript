(function () {
    'use strict';

    angular
        .module('app.helios.nmihd')
        .factory('NmihdAlgoMesurePT', nmihdAlgoMesurePT);

    /* jshint -W106 */
    /* jshint -W061 */
    /*jshint validthis:true */
    /* @ngInject */
    function nmihdAlgoMesurePT(NmihdAlgoMesureCommon, $log, $filter, INTER_DYSFONCTIONNEMENTS) {

        function NmihdAlgoMesurePT(Algo) {
            this.algo = Algo;
        }

        NmihdAlgoMesurePT.prototype.doIt = function (conditions) {
            var result = null;
            for (var i = 0; i < conditions.length && !result; i++) {
                var condition = conditions[i];
                try {
                    if (eval('_' + condition.code + '.call(this)')) {
                        result = condition;
                    }
                } catch (e) {
                    $log.error(e);
                }
            }
            return result;
        };

        return NmihdAlgoMesurePT;

        //////////////////////

        function _PT6() {

            var param = {
                types: ['PM']
            };
            var nonePM = $filter('nmihdAllCorrected')(this.algo.intervention, param);

            var currentGreen = NmihdAlgoMesureCommon.isGreen(this.algo.currentMesure);

            return nonePM && currentGreen;
        }

        function _PT7() {
            var param = {
                from: 'danger',
                to: 'success',
                types: ['RE', 'SR', 'PC', 'PT']
            };

            var oneCorrected = $filter('nmihdCorrected')(this.algo.intervention, param);
            var currentGreen = NmihdAlgoMesureCommon.isGreen(this.algo.currentMesure);
            var lastPM = $filter('nmihdLast')(this.algo.intervention, {type: 'PM'});
            var lastPMGreen = NmihdAlgoMesureCommon.isGreen(lastPM);

            return oneCorrected && lastPMGreen && currentGreen;
        }

        function _PT8() {
            var param = {
                status: 'danger',
                types: this.algo.allMesures
            };

            var noneRed = $filter('nmihdAllCorrected')(this.algo.intervention, param);
            var currentGreen = NmihdAlgoMesureCommon.isGreen(this.algo.currentMesure);
            var lastPM = $filter('nmihdLast')(this.algo.intervention, {type: 'PM'});
            var lastPMGreen = NmihdAlgoMesureCommon.isGreen(lastPM);
            var dysf = $filter('disfonctIntervention')(this.algo.intervention, [INTER_DYSFONCTIONNEMENTS.KO_JAMAIS]);

            return noneRed && lastPMGreen && !dysf && currentGreen;
        }

        function _PT4() {
            var param = {
                status: 'danger',
                types: this.algo.allMesures
            };

            var noneRed = $filter('nmihdAllCorrected')(this.algo.intervention, param);
            var currentGreen = NmihdAlgoMesureCommon.isGreen(this.algo.currentMesure);
            var lastPM = $filter('nmihdLast')(this.algo.intervention, {type: 'PM'});
            var lastPMGreen = NmihdAlgoMesureCommon.isGreen(lastPM);
            var dysf = $filter('disfonctIntervention')(this.algo.intervention, [INTER_DYSFONCTIONNEMENTS.KO_JAMAIS]);

            return noneRed && lastPMGreen && dysf && currentGreen;
        }

        function _PT9() {
            var lastPM = $filter('nmihdLast')(this.algo.intervention, {type: 'PM'});
            var lastPMRed = NmihdAlgoMesureCommon.isRed(lastPM);
            var currentGreen = NmihdAlgoMesureCommon.isGreen(this.algo.currentMesure);

            return lastPMRed && currentGreen;
        }

        function _PT10() {
            var lastPC = $filter('nmihdLast')(this.algo.intervention, {type: 'PC'});
            var lastPCGreen = NmihdAlgoMesureCommon.isGreen(lastPC);
            var currentRed = NmihdAlgoMesureCommon.isRed(this.algo.currentMesure);
            return lastPCGreen && currentRed;
        }

        function _PT11() {
            var lastPC = $filter('nmihdLast')(this.algo.intervention, {type: 'PC'});
            var currentRed = NmihdAlgoMesureCommon.isRed(this.algo.currentMesure);
            return !lastPC && currentRed;
        }

        function _PT12() {
            var lastPC = $filter('nmihdLast')(this.algo.intervention, {type: 'PC'});
            var lastPCRed = NmihdAlgoMesureCommon.isRed(lastPC);
            var currentRed = NmihdAlgoMesureCommon.isRed(this.algo.currentMesure);
            return lastPCRed && currentRed;
        }
    }
})();

