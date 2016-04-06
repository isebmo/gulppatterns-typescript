(function () {
    'use strict';

    angular
        .module('app.helios.nmihd.diagnosticxdsl')
        .factory('DiagnosticXDSL', diagnosticXDSL);

    /* @ngInject */
    function diagnosticXDSL(DIAGNOSTIC_RESULTS, $filter, DIAGNOSTIC_ERROR_MESSAGES,
                            DIAGNOSTIC_VALUES, mesuresUtilsService, $q) {

        function DiagnosticXDSL(mesure, intervention) {
            this.mesure = mesure;
            this.sensmesure = null;
            this.donneesMesure = null;
            this.profil = _getProfilMesure(intervention);
            this.intervention = intervention;
            this.mesurePT = null;
            this.listErreurDiag = [];
        }

        /**
         * Methode permettant de déterminer le résultat final du diagnostic
         * XDSL
         * @returns result
         * @returns DIAGNOSTIC_RESULTS result.decision
         * @returns String[] result.strResultsDiagXDSL
         */
        DiagnosticXDSL.prototype.getDecision = function () {
            return _getDiagnostic.call(this);
        };

        return DiagnosticXDSL;

        /////////////

        /**
         *Methode permettant de déterminer le cas fonctionnel de la PM
         * @private
         */
        /*jshint validthis:true */
        function _getDiagnostic() {
            var deferred = $q.defer();
            var promise = $q.when({});
            var self = this;
            if (self.mesure && self.mesure.point === 'PT') {
                var lastMesurePM = $filter('nmihdLast')(self.intervention, {type: 'PM'});
                if (lastMesurePM && lastMesurePM.decision === DIAGNOSTIC_RESULTS.default) {
                    promise = _requalifMesurePM.call(self, lastMesurePM, self.mesure);
                }
            }
            promise.then(function () {
                deferred.resolve(_getFinalDiagnosticMesure.call(self, self.mesure));
            });
            return deferred.promise;

            /**
             * Methode permettant de requalifier une mesure PM précédemment
             * Grise et de l'ajouter à l'intervention
             * @param mesure
             * @private
             */
            /*jshint validthis:true */
            function _requalifMesurePM(mesurePM, mesurePT) {
                this.mesurePT = mesurePT;
                var mesurePMtoDiag = mesurePM;
                var diagMesurePM = _getFinalDiagnosticMesure.call(this, mesurePMtoDiag);
                mesurePMtoDiag.decision = diagMesurePM.decision;
                mesurePMtoDiag.strResultsDiagXDSL = diagMesurePM.strResultsDiagXDSL;
                return mesuresUtilsService.addMesureToCurrentIntervention(mesurePMtoDiag);
            }
        }

        /**
         *Methode permettant d'executer le bon type de diagnostic par rapport au profil
         * de la mesure
         * @returns result
         * @returns DIAGNOSTIC_RESULTS result.decision
         * @returns String[] result.strResultsDiagXDSL
         * @private
         */
        /*jshint validthis:true */
        function _getFinalDiagnosticMesure(mesuretoDiag) {
            var result = {
                'decision': null,
                'strResultsDiagXDSL': []
            };
            if (this.profil && this.profil.typeLigne === 'ADSL') {
                result = _getDiagnosticADSL.call(this, mesuretoDiag);
            } else if (this.profil && this.profil.typeLigne === 'VDSL') {
                result = _getDiagnosticVDSL.call(this, mesuretoDiag);
            }
            return result;
        }

        /**
         *Methode permettant de déterminer le diagnstic d'une mesure de type ADSL
         * @returns diagnosticADSL
         * @returns DIAGNOSTIC_RESULTS diagnosticADSL.decision
         * @returns String[] diagnosticADSL.strResultsDiagXDSL
         * @private
         */
        /*jshint validthis:true */
        function _getDiagnosticADSL(mesuretoDiag) {
            var diagnosticADSL = {};
            var diagDesc = _getDecisionPourUnSens.call(this, mesuretoDiag, 'desc');
            diagnosticADSL.decision = diagDesc.decision;
            diagnosticADSL.strResultsDiagXDSL = diagDesc.strResultsDiagXDSL;
            return diagnosticADSL;
        }

        /**
         *Methode permettant de déterminer le diagnstic d'une mesure de type VDSL
         * @returns diagnosticVDSL
         * @returns DIAGNOSTIC_RESULTS diagnosticVDSL.decision
         * @returns String[] diagnosticVDSL.strResultsDiagXDSL
         * @private
         */
        /*jshint validthis:true */
        function _getDiagnosticVDSL(mesuretoDiag) {
            var diagnosticVDSL = {
                decision: '',
                strResultsDiagXDSL: []
            };
            var diagDesc = _getDecisionPourUnSens.call(this, mesuretoDiag, 'desc');
            this.listErreurDiag = [];
            var diagMont = _getDecisionPourUnSens.call(this, mesuretoDiag, 'mont');
            if (diagDesc.decision === DIAGNOSTIC_RESULTS.success &&
                diagMont.decision === DIAGNOSTIC_RESULTS.success) {
                diagnosticVDSL.decision = DIAGNOSTIC_RESULTS.success;
            } else if (diagDesc.decision === DIAGNOSTIC_RESULTS.default &&
                diagMont.decision === DIAGNOSTIC_RESULTS.default) {
                diagnosticVDSL.decision = DIAGNOSTIC_RESULTS.default;
            } else {
                diagnosticVDSL.decision = DIAGNOSTIC_RESULTS.danger;
            }
            diagDesc.strResultsDiagXDSL.forEach(function (result) {
                diagnosticVDSL.strResultsDiagXDSL.push(result + ' ' + DIAGNOSTIC_ERROR_MESSAGES.down);
            });
            diagMont.strResultsDiagXDSL.forEach(function (result) {
                diagnosticVDSL.strResultsDiagXDSL.push(result + ' ' + DIAGNOSTIC_ERROR_MESSAGES.up);
            });
            return diagnosticVDSL;
        }

        /**
         * Methode permettant d'executer le diagnostic pour une mesure et un sens donné (Mont/desc)
         * @param mesure mesuretoDiag
         * @param String sensDecision
         * @returns result
         * @returns DIAGNOSTIC_RESULTS result.decision
         * @returns String[] result.strResultsDiagXDSL
         * @private
         */
        /*jshint validthis:true */
        function _getDecisionPourUnSens(mesuretoDiag, sensDecision) {
            var result = {};
            this.donneesMesure = mesuretoDiag[sensDecision];
            this.sensmesure = sensDecision;
            this.mesure = mesuretoDiag;
            var resultCriteresCommuns = _getResultDesCriteresCommuns.call(this);
            result.decision = resultCriteresCommuns ? DIAGNOSTIC_RESULTS.success : DIAGNOSTIC_RESULTS.danger;

            if (resultCriteresCommuns && this.mesure.point === 'PM') {
                _managePMMesure.call(this, result);

            }
            result.strResultsDiagXDSL = this.listErreurDiag;
            return result;
        }

        /**
         * Methode permettant de calculer le diagnostic des criteres spécifiques aux mesures
         * de type PM
         * @param result
         * @param DIAGNOSTIC_RESULTS result.decision
         * @param String[] result.strResultsDiagXDSL
         * @private
         */
        /*jshint validthis:true */
        function _managePMMesure(result) {
            var lastMesurePT;
            if (!this.mesurePT) {
                lastMesurePT = _getLastMesurePT.call(this);
            } else {
                lastMesurePT = this.mesurePT;
            }
            if (!lastMesurePT) {
                result.decision = DIAGNOSTIC_RESULTS.default;
            } else {
                var resultDesCriterePMAvecPT = _getResultDesCriterePMAvecPT.call(this, lastMesurePT);
                if (resultDesCriterePMAvecPT) {
                    result.decision = DIAGNOSTIC_RESULTS.success;
                } else {
                    result.decision = DIAGNOSTIC_RESULTS.danger;
                }
            }
        }

        /**
         * Methode permettant de calculer les criteres communs à toutes les mesures
         * tableau 1
         * @returns result
         * @returns DIAGNOSTIC_RESULTS result.decision
         * @returns String[] result.strResultsDiagXDSL
         * @private
         */
        /*jshint validthis:true */
        function _getResultDesCriteresCommuns() {
            var sync = _isSynced.call(this);
            var fluctDebit = _fluctuationDebit.call(this);
            var margebruitAttCible = _margeBruitEntreConstateEtCible.call(this);
            var fluctMargeBruit = _fluctuationMargeBruit.call(this);
            var valeurSES = _valeurSES.call(this);
            var valeurCRC = _valeurCRC.call(this);

            return sync && fluctDebit && margebruitAttCible && fluctMargeBruit && valeurSES && valeurCRC;
        }

        /**
         * Methode permettant de déterminer le résultat des critères du
         * tableau 2
         * @param mesure lastMesurePT
         * @returns result
         * @returns DIAGNOSTIC_RESULTS result.decision
         * @returns String[] result.strResultsDiagXDSL
         * @private
         */
        /*jshint validthis:true */
        function _getResultDesCriterePMAvecPT(lastMesurePT) {
            var ecartDebitMaxPTPM = _ecartDebitMaxPTetPM.call(this, lastMesurePT);
            var ecartMargeBruitPTPM = _ecartMargeBruitPTetPM.call(this, lastMesurePT);

            return ecartDebitMaxPTPM && ecartMargeBruitPTPM;
        }

        /**
         *Methode permettant de répopnde au critère de synchronisation
         * @returns {*|boolean}
         * @private
         */
        /*jshint validthis:true */
        function _isSynced() {
            var result = false;
            if (this.mesure.isSynchronized) {
                result = true;
            } else {
                this.listErreurDiag.push(DIAGNOSTIC_ERROR_MESSAGES.notSynchronised);
            }
            return result;
        }

        /**
         *Methde permettant de répondre au critère de Fluctuation du débit
         * @returns {boolean}
         * @private
         */
        /*jshint validthis:true */
        function _fluctuationDebit() {
            var result = false;
            var margeDebit = _calculateFluctuation(this.donneesMesure.debAttMinMax.max,
                this.donneesMesure.debAttMinMax.min);
            if (margeDebit < DIAGNOSTIC_VALUES.fluctuationDebitMax) {
                result = true;
            } else {
                this.listErreurDiag.push(DIAGNOSTIC_ERROR_MESSAGES.fluctuationDebitMax);
            }
            return result;
        }

        /**
         * Methode permettant de répondre au critere de difference marge de bruit
         * entre le constaté et la cible
         * @returns {boolean}
         * @private
         */
        /*jshint validthis:true */
        function _margeBruitEntreConstateEtCible() {
            var result = false;
            var margeBruitCible = this.profil.valeur;
            var margeBruitActu = this.donneesMesure.margeBruitActu;
            if (margeBruitActu >= (margeBruitCible - 1)) {
                result = true;
            } else {
                this.listErreurDiag.push(DIAGNOSTIC_ERROR_MESSAGES.margedeBruitEntreConstateETCible);
            }
            return result;
        }

        /**
         * Methode permettant de répondre au critère de fluctuation de marge de bruit
         * @returns {boolean}
         * @private
         */
        /*jshint validthis:true */
        function _fluctuationMargeBruit() {
            var result = false;
            var margeBruit = _calculateEcart(this.donneesMesure.margeBruitMinMax.max,
                this.donneesMesure.margeBruitMinMax.min);
            if (margeBruit < DIAGNOSTIC_VALUES.fluctuationMargeDeBruit) {
                result = true;
            } else {
                this.listErreurDiag.push(DIAGNOSTIC_ERROR_MESSAGES.fluctuationMargeDeBruit);
            }
            return result;
        }

        /**
         * Methode permettant de répondre au critere d'acceptation du relevé SES
         * @returns {boolean}
         * @private
         */
        /*jshint validthis:true */
        function _valeurSES() {
            var result = false;
            if (this.donneesMesure.SES === 0) {
                result = true;
            } else {
                this.listErreurDiag.push(DIAGNOSTIC_ERROR_MESSAGES.SES);
            }
            return result;
        }

        /**
         * Methode permettant de répondre au critere d'acceptation du relevé CRC
         * @returns {boolean}
         * @private
         */
        /*jshint validthis:true */
        function _valeurCRC() {
            var result = false;
            if (this.mesure.point === 'PT' || this.mesure.point === 'PM') {
                if (this.donneesMesure.CRC < DIAGNOSTIC_VALUES.CRCPTetPM) {
                    result = true;
                } else {
                    this.listErreurDiag.push(DIAGNOSTIC_ERROR_MESSAGES.CRCpourPTetPM);
                }
            } else {
                if (this.donneesMesure.CRC < DIAGNOSTIC_VALUES.CRCAutres) {
                    result = true;
                } else {
                    this.listErreurDiag.push(DIAGNOSTIC_ERROR_MESSAGES.CRCpourPCetSRetRE);
                }
            }
            return result;
        }

        /**
         * Methode permettant de récupéré la dernière mesure PT d'une intervention
         * @returns {Mesure}
         * @private
         */
        /*jshint validthis:true */
        function _getLastMesurePT() {
            return $filter('nmihdLast')(this.intervention, {type: 'PT'});
        }

        /**
         * Methode permettant de répondre au critere d'ecart de débit max entre
         * une mesure PT et PM
         * @param mesurePT
         * @returns {boolean}
         * @private
         */
        /*jshint validthis:true */
        function _ecartDebitMaxPTetPM(mesurePT) {
            var result = false;
            var mesurePM = this.donneesMesure;
            var debitMaxPT = mesurePT[this.sensmesure].debAttMinMax.max;
            var debitMaxPM = mesurePM.debAttMinMax.max;
            var ecartDebitMaxPTetPM = _calculateFluctuation(debitMaxPM, debitMaxPT);
            /* Valeur Absolue de l'ecart inferieur à 7%*/
            if (Math.abs(ecartDebitMaxPTetPM) < DIAGNOSTIC_VALUES.ecartDebitMax) {
                result = true;
            } else {
                this.listErreurDiag.push(DIAGNOSTIC_ERROR_MESSAGES.ecartDebitMax);
            }
            return result;
        }

        /**
         * Methode permettant de répondre au critere d'ecart de Marge de bruit
         * entre une mesure PT et PM
         * @param mesure mesurePT
         * @returns {boolean}
         * @private
         */
        /*jshint validthis:true */
        function _ecartMargeBruitPTetPM(mesurePT) {
            var result = false;
            var mesurePM = this.donneesMesure;
            var MargeBruitMaxPT = mesurePT[this.sensmesure].margeBruitMinMax.max;
            var MargeBruitMaxPM = mesurePM.margeBruitMinMax.max;
            var ecartMargeBruitPTetPM = _calculateEcart(MargeBruitMaxPM, MargeBruitMaxPT);
            /* Valeur Absolue de l'ecart inferieur à 1.5db*/
            if (Math.abs(ecartMargeBruitPTetPM) < DIAGNOSTIC_VALUES.ecartMargeDeBruit) {
                result = true;
            } else {
                this.listErreurDiag.push(DIAGNOSTIC_ERROR_MESSAGES.ecartMargeDeBruit);
            }
            return result;
        }

        /**
         * Methode permettant de calculer une fluctuation entre deux valeurs
         * La premiere etant la donnée la plus grande
         * @param Int firstValue
         * @param Int secondValue
         * @returns {number}
         * @private
         */
        /*jshint validthis:true */
        function _calculateFluctuation(firstValue, secondValue) {
            return ((firstValue - secondValue) / firstValue) * 100;
        }

        /**
         * Methode permettant de calculer une difference entre deux valeurs
         * @param Int firstValue
         * @param Int secondValue
         * @returns {number}
         * @private
         */
        /*jshint validthis:true */
        function _calculateEcart(firstValue, secondValue) {
            return firstValue - secondValue;
        }

        /**
         * Methode permettant de renvoyé le profil pour une mesure
         * @param intervention
         * @private
         */
        /*jshint validthis:true */
        function _getProfilMesure(intervention) {
            return intervention.profilcourant;
        }
    }

})();

