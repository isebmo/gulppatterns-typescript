(function () {
    'use strict';

    angular
        .module('app.helios.nmihd')
        .factory('NmihdAlgoMesurePM', nmihdAlgoMesurePM);

    /* jshint -W106 */
    /* jshint -W061 */
    /*jshint validthis:true */
    /* @ngInject */
    function nmihdAlgoMesurePM(NmihdAlgoMesureCommon, $log, $filter, INTER_DYSFONCTIONNEMENTS) {

        function NmihdAlgoMesurePM(Algo) {
            this.algo = Algo;
        }

        NmihdAlgoMesurePM.prototype.doIt = function (conditions) {
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

        return NmihdAlgoMesurePM;

        //////////////////////

        function _PM7() {
            return NmihdAlgoMesureCommon.isUnknown(this.algo.currentMesure);
        }

        function _PM8() {
            var param = {
                from: 'danger',
                to: 'success',
                types: ['RE', 'SR', 'PC', 'PT', 'PM']
            };

            var oneCorrected = $filter('nmihdCorrected')(this.algo.intervention, param);
            var PM_ACT1 = $filter('interventionContainsChoice')(this.algo.intervention, 'PM_act1');
            var currentGreen = NmihdAlgoMesureCommon.isGreen(this.algo.currentMesure);
            return oneCorrected && currentGreen && !PM_ACT1;
        }

        function _PM10() {
            var disf = $filter('disfonctIntervention')(this.algo.intervention, [INTER_DYSFONCTIONNEMENTS.KO_JAMAIS]);
            var param = {
                status: 'danger',
                types: this.algo.allMesures
            };
            var noneRed = $filter('nmihdAllCorrected')(this.algo.intervention, param);
            var currentGreen = NmihdAlgoMesureCommon.isGreen(this.algo.currentMesure);

            return disf && noneRed && currentGreen;
        }

        function _PM11() {
            var param = {
                status: 'success',
                types: ['PM']
            };
            var nonePMGreen = $filter('nmihdAllCorrected')(this.algo.intervention, param);
            var currentRed = NmihdAlgoMesureCommon.isRed(this.algo.currentMesure);
            param = {
                types: ['PT']
            };
            var nonPT = $filter('nmihdAllCorrected')(this.algo.intervention, param);
            return nonePMGreen && currentRed && nonPT;
        }

        function _PM12() {
            var lastPT = $filter('nmihdLast')(this.algo.intervention, {type: 'PT'});
            var lastPTRed = NmihdAlgoMesureCommon.isRed(lastPT);
            var PT_ACT1 = $filter('interventionContainsChoice')(this.algo.intervention, 'PT_act1');
            var PT_ACT2 = $filter('interventionContainsChoice')(this.algo.intervention, 'PT_act2');
            var currentRed = NmihdAlgoMesureCommon.isRed(this.algo.currentMesure);
            return lastPTRed && !PT_ACT1 && !PT_ACT2 && currentRed;
        }

        function _PM6() {
            var lastPT = $filter('nmihdLast')(this.algo.intervention, {type: 'PT'});
            var lastPTRed = NmihdAlgoMesureCommon.isRed(lastPT);
            var currentRed = NmihdAlgoMesureCommon.isRed(this.algo.currentMesure);
            var PT_ACT1 = $filter('interventionContainsChoice')(this.algo.intervention, 'PT_act1');
            var PT_ACT2 = $filter('interventionContainsChoice')(this.algo.intervention, 'PT_act2');
            return lastPTRed && PT_ACT1 && !PT_ACT2 && currentRed;
        }

        function _PM13() {
            var lastPT = $filter('nmihdLast')(this.algo.intervention, {type: 'PT'});
            var lastPTRed = NmihdAlgoMesureCommon.isRed(lastPT);
            var currentRed = NmihdAlgoMesureCommon.isRed(this.algo.currentMesure);
            var PT_ACT1 = $filter('interventionContainsChoice')(this.algo.intervention, 'PT_act1');
            var PT_ACT2 = $filter('interventionContainsChoice')(this.algo.intervention, 'PT_act2');
            return lastPTRed && PT_ACT1 && PT_ACT2 && currentRed;
        }

        function _PM14() {
            var lastPT = $filter('nmihdLast')(this.algo.intervention, {type: 'PT'});
            var lastPTGreen = NmihdAlgoMesureCommon.isGreen(lastPT);
            var currentRed = NmihdAlgoMesureCommon.isRed(this.algo.currentMesure);
            return lastPTGreen && currentRed;
        }

        function _PM15() {
            var lastPT = $filter('nmihdLast')(this.algo.intervention, {type: 'PT'});
            var lastPTGreen = NmihdAlgoMesureCommon.isGreen(lastPT);
            var currentGreen = NmihdAlgoMesureCommon.isGreen(this.algo.currentMesure);
            var param = {
                status: 'danger',
                types: this.algo.allMesures
            };
            var noneRed = $filter('nmihdAllCorrected')(this.algo.intervention, param);
            var disf = $filter('disfonctIntervention')(this.algo.intervention, [INTER_DYSFONCTIONNEMENTS.KO_JAMAIS]);

            return lastPTGreen && noneRed && !disf && currentGreen;
        }

    }

})();

