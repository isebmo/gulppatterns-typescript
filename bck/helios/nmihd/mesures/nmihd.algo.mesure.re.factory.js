(function () {
    'use strict';

    angular
        .module('app.helios.nmihd')
        .factory('NmihdAlgoMesureRE', nmihdAlgoMesureRE);

    /* jshint -W106 */
    /* jshint -W061 */
    /*jshint validthis:true */
    /* @ngInject */
    function nmihdAlgoMesureRE(NmihdAlgoMesureCommon, $filter, $log) {

        function NmihdAlgoMesureRE(Algo) {
            this.algo = Algo;
        }

        NmihdAlgoMesureRE.prototype.doIt = function (conditions) {
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

        return NmihdAlgoMesureRE;

        /////////////////////

        function _RE3() {
            var lastSR = $filter('nmihdFirst')(this.algo.intervention, {type: 'SR'});
            var lastSRRed = NmihdAlgoMesureCommon.isRed(lastSR);
            var lastRE = $filter('nmihdFirst')(this.algo.intervention, {type: 'RE'});
            var lastRERed = NmihdAlgoMesureCommon.isRed(lastSR);
            var currentGreen = NmihdAlgoMesureCommon.isGreen(this.algo.currentMesure);
            return lastSRRed && (!lastRE || !lastRERed) && currentGreen;
        }

        function _RE5() {
            var re1 = $filter('nmihdFirst')(this.algo.intervention, {type: 'RE'});
            var re2 = $filter('nmihdLast')(this.algo.intervention, {type: 'RE'});

            var param = {
                status: 'danger',
                types: this.algo.allMesures
            };
            var noneRed = $filter('nmihdAllCorrected')(this.algo.intervention, param);
            return re1 === re2 && noneRed && NmihdAlgoMesureCommon.isGreen(this.algo.currentMesure);
        }

        function _RE6(mesure) {
            return NmihdAlgoMesureCommon.isRed(this.algo.currentMesure);
        }

        function _RE7() {
            var re = $filter('nmihdLast')(this.algo.intervention, {type: 'RE'});
            var sr = $filter('nmihdLast')(this.algo.intervention, {type: 'SR'});
            var derniereRERed = NmihdAlgoMesureCommon.isRed(re);
            var derniereSRRed = NmihdAlgoMesureCommon.isRed(sr);
            return derniereRERed && (!sr || !derniereSRRed) && NmihdAlgoMesureCommon.isGreen(this.algo.currentMesure);
        }

        function _RE8(mesure) {
            var re = $filter('nmihdLast')(this.algo.intervention, {type: 'RE'});
            var sr = $filter('nmihdLast')(this.algo.intervention, {type: 'SR'});
            var derniereRERed = NmihdAlgoMesureCommon.isRed(re);
            var derniereSRRed = NmihdAlgoMesureCommon.isRed(sr);
            return derniereRERed && derniereSRRed && NmihdAlgoMesureCommon.isGreen(this.algo.currentMesure);
        }
    }

})();

