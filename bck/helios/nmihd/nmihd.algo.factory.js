(function () {
    'use strict';

    angular
        .module('app.helios.nmihd')
        .factory('NmihdAlgo', nmihdAlgo);

    /* @ngInject */
    function nmihdAlgo($log, NmihdAlgoMesureRE, NmihdAlgoMesureSR, NmihdAlgoMesurePC,
                       NmihdAlgoMesurePT, NmihdAlgoMesurePM) {

        function NmihdAlgo(propositions, intervention) {
            this.propositions = propositions;
            this.intervention = intervention;
            this.allMesures = Object.keys(propositions);
            this.currentMesure = null;
        }

        NmihdAlgo.prototype.getNextActions = function (mesure) {
            return _findCondition.call(this, mesure);
        };

        return NmihdAlgo;

        /*jshint validthis:true */
        /* jshint -W061 */
        function _findCondition(mesure) {
            this.currentMesure = mesure;
            var condition = null;
            if (this.propositions && this.propositions[mesure.point] && mesure) {
                var conditions = this.propositions[mesure.point];
                var algoMesure = null;
                switch (mesure.point) {
                    case 'RE':
                        algoMesure = new NmihdAlgoMesureRE(this);
                        break;
                    case 'SR':
                        algoMesure = new NmihdAlgoMesureSR(this);
                        break;
                    case 'PC':
                        algoMesure = new NmihdAlgoMesurePC(this);
                        break;
                    case 'PT':
                        algoMesure = new NmihdAlgoMesurePT(this);
                        break;
                    case 'PM':
                        algoMesure = new NmihdAlgoMesurePM(this);
                        break;
                    default:
                        var msgE = 'mesure ' + mesure.point + ' unknown';
                        $log.error(msgE);
                        throw new Error(msgE);
                }
                condition = algoMesure.doIt(conditions);
                transformAction.call(this, condition);
            }
            return condition;
        }

        /**
         * Methode permettant de transformer une action prete à etre affichées
         * @param {object} condition
         * @returns {*}
         * @private
         */
        function transformAction(condition) {
            if (condition && condition.actions) {
                condition.actions.forEach(function (action) {
                    if (action.type === 'LINK') {
                        action.link = _getUrlMesureAction(action.mesureSuivante);
                    } else if (action.type === 'LINKMESURES') {
                        action.link = _getUrlRecapMesureAction();
                    }
                });
            }
        }

        /**
         * Methode permettant de créer une URL d'accès à une mesure suivante
         * @param {string} mesureSuivante
         * @returns {string|*}
         * @private
         */
        function _getUrlMesureAction(mesureSuivante) {
            var link = {
                state: 'home.helios.mesures.mesure-new',
                params: {typeMesure: mesureSuivante},
                options: {reload: 'home.helios.mesures.mesure-new'}
            };
            return link;
        }

        /**
         * Methode permettant de créer une URL d'accès au tableau de mesures
         * @returns {string}
         * @private
         */
        function _getUrlRecapMesureAction() {
            var link = {
                state: 'home.helios.mesures.recapmesures'
            };
            return link;
        }

    }

})();

