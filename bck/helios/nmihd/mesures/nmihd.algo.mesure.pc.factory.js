(function () {
    'use strict';

    angular
        .module('app.helios.nmihd')
        .factory('NmihdAlgoMesurePC', nmihdAlgoMesurePC);

    /* jshint -W106 */
    /* jshint -W061 */
    /*jshint validthis:true */
    /* @ngInject */
    function nmihdAlgoMesurePC(NmihdAlgoMesureCommon, $log, $filter) {

        function NmihdAlgoMesurePC(Algo) {
            this.algo = Algo;
        }

        /*jshint validthis:true */
        NmihdAlgoMesurePC.prototype.doIt = function (conditions) {
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

        return NmihdAlgoMesurePC;

        function _PC3() {
            var param = {
                types: ['PT']
            };
            var nonePT = $filter('nmihdAllCorrected')(this.algo.intervention, param);
            var currentPCGreen = NmihdAlgoMesureCommon.isGreen(this.algo.currentMesure);
            var PC_ACT2 = $filter('interventionContainsChoice')(this.algo.intervention, 'PC_act2');

            return !PC_ACT2 && nonePT && currentPCGreen;
        }

        function _PC4() {

            var lastPC = $filter('nmihdLast')(this.algo.intervention, {type: 'PC'});
            var lastPCRed = NmihdAlgoMesureCommon.isRed(lastPC);
            var lastPT = $filter('nmihdLast')(this.algo.intervention, {type: 'PT'});
            var lastPTRed = NmihdAlgoMesureCommon.isRed(lastPT);
            var currentPCGreen = NmihdAlgoMesureCommon.isGreen(this.algo.currentMesure);
            var PC_ACT2 = $filter('interventionContainsChoice')(this.algo.intervention, 'PC_act2');

            return !PC_ACT2 && lastPCRed && lastPTRed && currentPCGreen;
        }

        function _PC5() {

            var lastPT = $filter('nmihdLast')(this.algo.intervention, {type: 'PT'});
            var lastPTGreen = NmihdAlgoMesureCommon.isGreen(lastPT);
            var currentPCGreen = NmihdAlgoMesureCommon.isGreen(this.algo.currentMesure);
            var PC_ACT2 = $filter('interventionContainsChoice')(this.algo.intervention, 'PC_act2');

            return !PC_ACT2 && lastPTGreen && currentPCGreen;
        }

        function _PC6() {
            var currentPCGreen = NmihdAlgoMesureCommon.isGreen(this.algo.currentMesure);
            var PC_ACT2 = $filter('interventionContainsChoice')(this.algo.intervention, 'PC_act2');
            return PC_ACT2 && currentPCGreen;
        }

        function _PC7() {
            var lastSR = $filter('nmihdLast')(this.algo.intervention, {type: 'SR'});
            var currentPCRed = NmihdAlgoMesureCommon.isRed(this.algo.currentMesure);
            var PC_ACT2 = $filter('interventionContainsChoice')(this.algo.intervention, 'PC_act2');
            var PC_ACT1 = $filter('interventionContainsChoice')(this.algo.intervention, 'PC_act1');
            return !lastSR && !PC_ACT1 && !PC_ACT2 && currentPCRed;
        }

        function _PC8() {
            var lastPT = $filter('nmihdLast')(this.algo.intervention, {type: 'PT'});
            var lastPTRed = NmihdAlgoMesureCommon.isRed(lastPT);
            var lastPC = $filter('nmihdLast')(this.algo.intervention, {type: 'PC'});
            var lastPCRed = NmihdAlgoMesureCommon.isRed(lastPC);
            var currentPCGreen = NmihdAlgoMesureCommon.isGreen(this.algo.currentMesure);
            return lastPTRed && !lastPCRed && currentPCGreen;
        }

        function _PC9() {
            var lastSR = $filter('nmihdLast')(this.algo.intervention, {type: 'SR'});
            var lastSRGreen = NmihdAlgoMesureCommon.isGreen(lastSR);
            var currentPCRed = NmihdAlgoMesureCommon.isRed(this.algo.currentMesure);
            var SR_ACT2 = $filter('interventionContainsChoice')(this.algo.intervention, 'SR_act2');
            return lastSRGreen && SR_ACT2 && currentPCRed;
        }

        function _PC10() {
            var lastSR = $filter('nmihdLast')(this.algo.intervention, {type: 'SR'});
            var lastSRGreen = NmihdAlgoMesureCommon.isGreen(lastSR);
            var currentPCGreen = NmihdAlgoMesureCommon.isGreen(this.algo.currentMesure);
            var nonePT = $filter('nmihdLast')(this.algo.intervention, {type: 'PT'});
            return lastSRGreen && !nonePT && currentPCGreen;
        }

        function _PC11() {
            var lastSR = $filter('nmihdLast')(this.algo.intervention, {type: 'SR'});
            var lastSRGreen = NmihdAlgoMesureCommon.isGreen(lastSR);
            var currentPCGreen = NmihdAlgoMesureCommon.isGreen(this.algo.currentMesure);
            var lastPT = $filter('nmihdLast')(this.algo.intervention, {type: 'PT'});
            var lastPTGreen = NmihdAlgoMesureCommon.isGreen(lastPT);
            return lastSRGreen && lastPTGreen && currentPCGreen;
        }

        function _PC12() {
            var SR_ACT2 = $filter('interventionContainsChoice')(this.algo.intervention, 'SR_act2');
            var SR_ACT1 = $filter('interventionContainsChoice')(this.algo.intervention, 'SR_act1');
            var currentPCRed = NmihdAlgoMesureCommon.isRed(this.algo.currentMesure);
            return SR_ACT1 && !SR_ACT2 && currentPCRed;
        }

        function _PC13() {
            var SR_ACT2 = $filter('interventionContainsChoice')(this.algo.intervention, 'SR_act2');
            var SR_ACT1 = $filter('interventionContainsChoice')(this.algo.intervention, 'SR_act1');
            var lastSR = $filter('nmihdLast')(this.algo.intervention, {type: 'SR'});
            var lastSRGreen = NmihdAlgoMesureCommon.isGreen(lastSR);
            var currentPCRed = NmihdAlgoMesureCommon.isRed(this.algo.currentMesure);
            return lastSRGreen && !SR_ACT1 && !SR_ACT2 && currentPCRed;
        }

        function _PC14() {
            var SR_ACT2 = $filter('interventionContainsChoice')(this.algo.intervention, 'SR_act2');
            var SR_ACT1 = $filter('interventionContainsChoice')(this.algo.intervention, 'SR_act1');
            var lastSR = $filter('nmihdLast')(this.algo.intervention, {type: 'SR'});
            var lastSRRed = NmihdAlgoMesureCommon.isRed(lastSR);
            var RE = $filter('nmihdLast')(this.algo.intervention, {type: 'RE'});
            var currentPCRed = NmihdAlgoMesureCommon.isRed(this.algo.currentMesure);
            return lastSRRed && !RE && !SR_ACT1 && !SR_ACT2 && currentPCRed;
        }
    }
})();

