(function () {
    'use strict';

    angular
        .module('app.helios.nmihd')
        .factory('NmihdAlgoMesureSR', nmihdAlgoMesureSR);

    /* jshint -W106 */
    /* jshint -W061 */
    /*jshint validthis:true */
    /* @ngInject */
    function nmihdAlgoMesureSR(NmihdAlgoMesureCommon, $log, $filter) {

        function NmihdAlgoMesureSR(algo) {
            this.algo = algo;
        }

        NmihdAlgoMesureSR.prototype.doIt = function (conditions) {
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

        return NmihdAlgoMesureSR;

        function _SR2() {
            var lastPC = $filter('nmihdLast')(this.algo.intervention, {type: 'PC'});
            var redPC = NmihdAlgoMesureCommon.isRed(lastPC);
            var param = {
                status: 'danger',
                types: ['SR']
            };
            var noneSRRed = $filter('nmihdAllCorrected')(this.algo.intervention, param);
            var SR_ACT1 = $filter('interventionContainsChoice')(this.algo.intervention, 'SR_act1');
            var SR_ACT2 = $filter('interventionContainsChoice')(this.algo.intervention, 'SR_act2');
            var currentGreen = NmihdAlgoMesureCommon.isGreen(this.algo.currentMesure);
            return redPC && !SR_ACT1 && !SR_ACT2 && noneSRRed && currentGreen;
        }

        function _SR3() {
            var lastPC = $filter('nmihdLast')(this.algo.intervention, {type: 'PC'});
            var redPC = NmihdAlgoMesureCommon.isRed(lastPC);
            var param = {
                types: ['SR']
            };
            var noneSR = $filter('nmihdAllCorrected')(this.algo.intervention, param);
            var SR_ACT1 = $filter('interventionContainsChoice')(this.algo.intervention, 'SR_act1');
            var SR_ACT2 = $filter('interventionContainsChoice')(this.algo.intervention, 'SR_act2');
            var currentGreen = NmihdAlgoMesureCommon.isGreen(this.algo.currentMesure);
            return redPC && SR_ACT1 && !SR_ACT2 && noneSR && currentGreen;
        }

        function _SR4() {
            var lastPC = $filter('nmihdLast')(this.algo.intervention, {type: 'PC'});
            var redPC = NmihdAlgoMesureCommon.isRed(lastPC);
            var param = {
                types: ['SR']
            };
            var noneSR = $filter('nmihdAllCorrected')(this.algo.intervention, param);
            var SR_ACT2 = $filter('interventionContainsChoice')(this.algo.intervention, 'SR_act2');
            var currentGreen = NmihdAlgoMesureCommon.isGreen(this.algo.currentMesure);
            return redPC && SR_ACT2 && noneSR && currentGreen;
        }

        function _SR5() {
            var lastPT = $filter('nmihdLast')(this.algo.intervention, {type: 'PT'});
            var redPT = NmihdAlgoMesureCommon.isRed(lastPT);
            var lastPC = $filter('nmihdLast')(this.algo.intervention, {type: 'PC'});
            var param = {
                status: 'danger',
                types: ['SR']
            };
            var noneSRRed = $filter('nmihdAllCorrected')(this.algo.intervention, param);
            var SR_ACT3 = $filter('interventionContainsChoice')(this.algo.intervention, 'SR_act3');
            var currentGreen = NmihdAlgoMesureCommon.isGreen(this.algo.currentMesure);
            return redPT && SR_ACT3 && noneSRRed && !lastPC && currentGreen;
        }

        function _SR6() {
            var lastPT = $filter('nmihdLast')(this.algo.intervention, {type: 'PT'});
            var redPT = NmihdAlgoMesureCommon.isRed(lastPT);
            var lastPC = $filter('nmihdLast')(this.algo.intervention, {type: 'PC'});
            var param = {
                status: 'danger',
                types: ['SR']
            };
            var noneSRRed = $filter('nmihdAllCorrected')(this.algo.intervention, param);
            var SR_ACT4 = $filter('interventionContainsChoice')(this.algo.intervention, 'SR_act4');
            var currentGreen = NmihdAlgoMesureCommon.isGreen(this.algo.currentMesure);
            return redPT && SR_ACT4 && noneSRRed && !lastPC && currentGreen;
        }

        function _SR7() {
            var lastPC = $filter('nmihdLast')(this.algo.intervention, {type: 'PC'});
            var redPC = NmihdAlgoMesureCommon.isRed(lastPC);
            var lastRE = $filter('nmihdLast')(this.algo.intervention, {type: 'RE'});
            var existRE = lastRE ? true : false;
            var currentRed = NmihdAlgoMesureCommon.isRed(this.algo.currentMesure);

            return redPC && !existRE && currentRed;
        }

        function _SR8() {
            var RE_ACT4 = $filter('interventionContainsChoice')(this.algo.intervention, 'RE_act4');
            var SR_ACT6 = $filter('interventionContainsChoice')(this.algo.intervention, 'SR_act6');
            var currentRed = NmihdAlgoMesureCommon.isRed(this.algo.currentMesure);
            return RE_ACT4 && !SR_ACT6 && currentRed;
        }

        function _SR9() {
            var RE_ACT3 = $filter('interventionContainsChoice')(this.algo.intervention, 'RE_act3');
            var currentRed = NmihdAlgoMesureCommon.isRed(this.algo.currentMesure);
            return RE_ACT3 && currentRed;
        }

        function _SR10() {
            var lastRE = $filter('nmihdLast')(this.algo.intervention, {type: 'RE'});
            var redRE = NmihdAlgoMesureCommon.isGreen(lastRE);
            var currentGreen = NmihdAlgoMesureCommon.isGreen(this.algo.currentMesure);
            return redRE && currentGreen;
        }

        function _SR11() {
            var param = {
                types: ['PM', 'PT', 'PC', 'SR', 'RE'],
                status: 'danger'
            };
            var noneRedMesure = $filter('nmihdAllCorrected')(this.algo.intervention, param);
            var currentGreen = NmihdAlgoMesureCommon.isGreen(this.algo.currentMesure);
            return noneRedMesure && currentGreen;
        }

        function _SR12() {
            var RE_ACT3 = $filter('interventionContainsChoice')(this.algo.intervention, 'RE_act3');
            var RE_ACT4 = $filter('interventionContainsChoice')(this.algo.intervention, 'RE_act4');
            var SR_ACT5 = $filter('interventionContainsChoice')(this.algo.intervention, 'SR_act5');
            var lastRE = $filter('nmihdLast')(this.algo.intervention, {type: 'RE'});
            var redRE = NmihdAlgoMesureCommon.isGreen(lastRE);
            var currentRed = NmihdAlgoMesureCommon.isRed(this.algo.currentMesure);
            return redRE && !RE_ACT3 && !RE_ACT4 && !SR_ACT5 && currentRed;
        }

        function _SR13() {
            var SR_ACT5 = $filter('interventionContainsChoice')(this.algo.intervention, 'SR_act5');
            var RE_ACT3 = $filter('interventionContainsChoice')(this.algo.intervention, 'RE_act3');
            var RE_ACT4 = $filter('interventionContainsChoice')(this.algo.intervention, 'RE_act4');
            var currentRed = NmihdAlgoMesureCommon.isRed(this.algo.currentMesure);
            return SR_ACT5 && !RE_ACT3 && !RE_ACT4 && currentRed;
        }

        function _SR14() {
            var SR_ACT6 = $filter('interventionContainsChoice')(this.algo.intervention, 'SR_act6');
            var currentRed = NmihdAlgoMesureCommon.isRed(this.algo.currentMesure);
            return SR_ACT6 && currentRed;
        }

        function _SR15() {
            var currentRed = NmihdAlgoMesureCommon.isRed(this.algo.currentMesure);
            var lastRE = $filter('nmihdLast')(this.algo.intervention, {type: 'RE'});
            var redRE = NmihdAlgoMesureCommon.isRed(lastRE);
            return (redRE || !lastRE) && currentRed;
        }

        function _SR16() {
            var lastSR = $filter('nmihdLast')(this.algo.intervention, {type: 'SR'});
            var redSR = NmihdAlgoMesureCommon.isRed(lastSR);
            var currentGreen = NmihdAlgoMesureCommon.isGreen(this.algo.currentMesure);
            return redSR && currentGreen;
        }

    }

})();

