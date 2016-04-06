(function () {
    'use strict';

    angular
        .module('app.mesure')
        .factory('PriseDeMesure', priseDeMesure);

    /* jshint -W072 */
    /* This function has too many parameters. */
    /* @ngInject */
    /*jshint -W072 */
    function priseDeMesure($interval, $timeout, $stateParams, $log, $rootScope, $q, moment, toastr,
                           mesuresUtilsService, mamboService, interventionCurrentService, DiagnosticXDSL,
                           ETATS_MESURE, ETATS_SCRUTATION, EVENT_SCRUTATION, NmihdAlgo) {

        /**
         * Construit un prototype pour la prise de mesure
         *
         * @constructor
         */
        function PriseDeMesure(typeMesure, loadParam, view) {
            this.view = view;
            this.intervals = {
                // Fréquence de récupération des mesures
                intervalMesure: null,
                // Temps connecté
                intervalTimer: null,
                // Fréquence de scrutation
                intervalMambo: null
            };

            this.timeouts = {
                // Timeout de fin de scrutation
                timeoutScrutation: null
            };

            this.typeMesure = typeMesure;

            this.param = {
                mambo: {},
                param: loadParam,
                isstrResultsDiagXDSLCollapsed: true
            };

            this.mesure = {};

            this.etatCourant = {
                mesure: ETATS_MESURE.MESURE_NON_DEMARRE,
                scrutation: {}
            };

            this.deletable = true;
        }

        /**
         * Initialise la prise de mesure et vérifie si une mesure existante
         * est passé en paramètre ou est remonté dans la session courante
         *
         * @return {Promise} mesure
         */
        PriseDeMesure.prototype.initPriseDeMesure = function () {
            return _initPriseDeMesure.call(this);
        };

        /**
         * Démarre une prise de mesure
         */
        PriseDeMesure.prototype.demarrerMesure = function () {
            _demarrerMesure.call(this);
        };

        /**
         * Arrête une prise de mesure
         */
        PriseDeMesure.prototype.arreterMesure = function () {
            _arreterMesure.call(this);
        };

        /**
         * Vérifie si la mesure est dans un état donné
         *
         * @param {string} etat
         * @returns {boolean}
         */
        PriseDeMesure.prototype.isMesure = function (etat) {
            return this.etatCourant.mesure === etat;
        };

        /**
         * Vérifie si la scrutation est dans un état donné
         *
         * @param {string} etat
         * @returns {boolean}
         */
        PriseDeMesure.prototype.isScrutation = function (etat) {
            return this.etatCourant.scrutation === etat;
        };

        /**
         * Crée une nouvelle mesure
         */
        PriseDeMesure.prototype.nouvelleMesure = function () {
            _nouvelleMesure.call(this);
        };

        /**
         * Retourne la mesure courante
         *
         * @returns {object} mesure
         */
        PriseDeMesure.prototype.getMesure = function () {
            return this.mesure;
        };

        /**
         * Retourne les paramètres associés à la demande
         *
         * @returns {object} param
         */
        PriseDeMesure.prototype.getParam = function () {
            return this.param;
        };

        /**
         * Arrête tous les intervalles programmés
         */
        PriseDeMesure.prototype._cancelIntervalsAndTimeouts = function () {
            _cancelIntervalsAndTimeouts.call(this);
        };

        /**
         * Vérifie si la mesure peut être supprimé ou non
         *
         * @returns {boolean} param
         */
        PriseDeMesure.prototype.isDeletable = function () {
            return this.deletable;
        };

        /**
         * Démarre une scrutation du terminal de mesure
         */
        PriseDeMesure.prototype.demarrerScrutation = function () {
            _initScrutation.call(this);
        };

        /**
         * Remets à zéro les valeurs courantes de la mesure
         */
        PriseDeMesure.prototype.RAZ = function () {
            _RAZ.call(this);
        };

        /**
         * Renvoie le Message à afficher à l'utilisateur
         * @param {string} typeMesure
         * @returns {string} msgToShow
         */
        PriseDeMesure.prototype.getInformatifMessageToDisplay = function (typeMesure) {
            return this.param.param.messages[typeMesure];
        };

        return PriseDeMesure;

        /////////////////////////

        /**
         * Initialise la prise de mesure et vérifie si une mesure existante
         * est passé en paramètre ou est remonté dans la session courante
         */
        /*jshint validthis:true */
        function _initPriseDeMesure() {
            var self = this;
            var promise = null;
            if ($stateParams.dateMesure && $stateParams.typeMesure) {
                promise = _findMesure.call(self, $stateParams.typeMesure, $stateParams.dateMesure);
            } else {
                promise = mesuresUtilsService.getCurrentMesure().then(function (currentMesure) {
                    if (currentMesure && self.typeMesure === currentMesure.mesure.point) {
                        //Chargement de la dernière mesure
                        self.mesure = currentMesure.mesure;
                        self.param.mambo = currentMesure.mambo;
                        self.etatCourant.mesure = ETATS_MESURE.MESURE_FINI;
                    }
                    _initScrutation.call(self);
                    return self;
                });
            }
            return promise;
        }

        /**
         * Arrête la prise de mesure
         */
        /*jshint validthis:true */
        function _arreterMesure() {
            var self = this;
            $interval.cancel(this.intervals.intervalMesure);
            _stopTimer.call(self);
            // On enregistre seulement si la mesure est cours sinon mesure en doublon en cas d'erreur
            if (self.etatCourant.mesure === ETATS_MESURE.MESURE_EN_COURS) {
                $q.when({})
                    .then(_verifierResultat.bind(self))
                    .then(_addMesureToIntervention.bind(self));
            }
            this.etatCourant.mesure = ETATS_MESURE.MESURE_FINI;
        }

        /**
         * Démarre une prise de mesure
         */
        /*jshint validthis:true */
        function _demarrerMesure() {
            _initMesure.call(this);
            var self = this;
            this.intervals.intervalMesure = $interval(_acquireMesure.bind(self), 500);
            _startTimer.call(this);
        }

        /**
         * Remets à zéro les valeurs courantes et la durée de la mesure
         *
         * @private
         */
        /*jshint validthis:true */
        function _RAZ() {
            this.mesure.mont = null;
            this.mesure.desc = null;
            this.mesure.isSynchronized = this.param.mambo.isConnected;
            _initMesure.call(this);
        }

        /**
         * Initialise la scrutation pour se synchroniser
         * avec le terminal de mesure
         *
         * @private
         */
        /*jshint validthis:true */
        function _initScrutation() {
            this.etatCourant.scrutation = ETATS_SCRUTATION.NOT_YET_SYNCHRONIZED;
            _pushScrutationStateChange.call(this);
            this.timeouts.timeoutScrutation = $timeout(_endScrutation.bind(this), this.param.param.scrutationTimer);
            var self = this;
            this.intervals.intervalMambo = $interval(function () {
                mamboService.getStatus()
                    .then(_setStatusMambo.bind(self))
                    .then(_checkStatus.bind(self))
                    .catch(_problemMambo.bind(self));
            }, 1000);
        }

        /**
         * Annule l'ensemble des intervalles et des timeouts
         *
         * @private
         */
        /*jshint validthis:true */
        function _cancelIntervalsAndTimeouts() {
            var self = this;
            for (var intervalProperty in this.intervals) {
                if (this.intervals.hasOwnProperty(intervalProperty) && this.intervals[intervalProperty] !== null) {
                    $interval.cancel(self.intervals[intervalProperty]);
                }
            }
            for (var timeoutProperty in this.timeouts) {
                if (this.timeouts.hasOwnProperty(timeoutProperty) && this.timeouts[timeoutProperty] !== null) {
                    $timeout.cancel(self.timeouts[timeoutProperty]);
                }
            }
        }

        /**
         * Vérifie la synchronisation du terminal de mesure
         * à la fin du temps de scrutation
         *
         * @private
         */
        /*jshint validthis:true */
        function _endScrutation() {
            $interval.cancel(this.intervals.intervalMambo);
            $timeout.cancel(this.timeouts.timeoutScrutation);
            if (this.etatCourant.scrutation === ETATS_SCRUTATION.NOT_YET_SYNCHRONIZED) {
                this.etatCourant.scrutation = ETATS_SCRUTATION.NOT_SYNCHRONIZED_TIMEOUT;
                var nbSeconds = this.param.param.scrutationTimer / 1000;
                if (!this.param.mambo.wifiName) {
                    _pushScrutationTimeOutErrorMessage('Aucun appareil détecté');
                    this.view.notifyError('Aucun équipement n’a été détecté au bout de ' + nbSeconds + ' secondes. ' +
                        'Veuillez vérifier les connexions puis cliquer sur "Actualiser"');
                } else {
                    _pushScrutationTimeOutErrorMessage(this.param.mambo.wifiName + ' non synchronisé');
                    this.view.notifyError(this.param.mambo.wifiName + ' n’est pas synchronisé au bout de ' +
                        nbSeconds + ' secondes. Veuillez vérifier les connexions puis cliquer sur "Actualiser"');
                }
                _pushScrutationStateChange.call(this);
            }
        }

        /**
         * Vérifie le statut du terminal de mesure
         *
         * @private
         */
        /*jshint validthis:true */
        function _checkStatus() {
            if (this.param.mambo && this.param.mambo.isConnected) {
                this.etatCourant.scrutation = ETATS_SCRUTATION.SYNCHRONIZED;
                _pushScrutationStateChange.call(this);
                $interval.cancel(this.intervals.intervalMambo);
                $timeout.cancel(this.timeouts.timeoutScrutation);
            }
        }

        /**
         * Mets à jour le statut du terminal de mesure
         *
         * @param {object} status
         * @private
         */
        /*jshint validthis:true */
        function _setStatusMambo(status) {
            this.mesure.isSynchronized = status.isConnected;
            this.param.mambo = status;
        }

        /**
         * Démarre le timer du temps de mesure
         *
         * @private
         */
        /*jshint validthis:true */
        function _startTimer() {
            if (this.param.mambo.timeConnected) {
                var self = this;
                this.intervals.intervalTimer = $interval(function timeElapsed() {
                    self.mesure.duree = moment().diff(self.param.mambo.timeConnected, 'seconds');
                }, 1000);
            }
        }

        /**
         * Nettoie l'analyse des mesures et réinitialise les états
         */
        /*jshint validthis:true */
        function _nouvelleMesure() {
            this.etatCourant.mesure = ETATS_MESURE.MESURE_NON_DEMARRE;
            this.analyse = null;
            this.mesure.decision = null;
            this.mesure.strResultsDiagXDSL = null;
            this.mesure.mont = null;
            this.mesure.desc = null;
            this.mesure.isSynchronized = this.param.mambo.isConnected;
            this.mesure.actions = null;
        }

        /**
         * Arrête le timer du temps de mesure
         *
         * @private
         */
        /*jshint validthis:true */
        function _stopTimer() {
            $interval.cancel(this.intervals.intervalTimer);
        }

        /**
         * Initialise la mesure à 0
         *
         * @private
         */
        /*jshint validthis:true */
        function _initMesure() {
            this.etatCourant.mesure = ETATS_MESURE.MESURE_EN_COURS;
            this.mesure.duree = 0;
            this.param.mambo.timeConnected = moment();
        }

        /**
         * Cherche la mesure dans l'intervention (cas de la consultation)
         * valide aussi le caractère suppressible d'une donnée
         * @param {String} typeMesure
         * @param {number} dateMesure
         */
        /*jshint validthis:true */
        function _findMesure(typeMesure, dateMesure) {
            var self = this;
            return mesuresUtilsService.findMesure(typeMesure, dateMesure)
                .then(_setMesure.bind(self))
                .then(_setDeletable.bind(self));

            //////////////

            function _setMesure(currentMesure) {
                this.mesure = currentMesure;
                this.etatCourant.mesure = ETATS_MESURE.IS_DETAIL;
                return currentMesure;
            }

            function _setDeletable(currentMesure) {
                var self = this;
                return mesuresUtilsService.isMesureDeletable(this.mesure).then(function (bool) {
                    self.deletable = bool;
                    return self;
                });
            }
        }

        function _addMesureToIntervention() {
            var self = this;
            mesuresUtilsService.addMesureToCurrentIntervention(this.mesure).then(function () {
                self.view.notifySuccess('La mesure a bien été enregistrée en local sur la tablette.');
            }).catch(function (e) {
                self.view.notifyError()('Impossible d\'ajouter la mesure');
                $log.error(e);
            });
        }

        /**
         * détermine les actions à mener en fonction des relevés effectués (ces action sont mises dans le model)
         * ET renvoit les notification
         */
        /*jshint validthis:true */
        function _verifierResultat() {
            var self = this;
            return interventionCurrentService.getCurrentIntervention().then(function (intervention) {
                var diag = new DiagnosticXDSL(self.mesure, intervention);
                return diag.getDecision().then(function (result) {
                    self.mesure.decision = result.decision;
                    self.mesure.strResultsDiagXDSL = result.strResultsDiagXDSL;
                    var algo = new NmihdAlgo(self.param.param.algoNmihdActions, intervention);
                    var decision = algo.getNextActions(self.mesure);
                    self.mesure.actions = decision ? decision.actions : null;
                    return intervention;
                });
            }).catch(function (e) {
                self.view.notifyError('Impossible de calculer le diagnostic');
                $log.error(e);
            });
        }

        /**
         * Récupère les mesures du terminal et aggrège les données à calculer
         *
         * @private
         */
        /*jshint validthis:true */
        function _acquireMesure() {
            var self = this;
            mamboService.getParamLines()
                .then(_transformMesure.bind(self))
                .then(mesuresUtilsService.calculateMesureMinMax)
                .catch(_cantGetMesureFromMambo.bind(self));
        }

        /**
         * Transforme une mesure récupérée du terminal en un prototype de mesure
         *
         * @param {*} data mesure à merger
         * @returns {{}|*}
         * @private
         */
        /*jshint validthis:true */
        function _transformMesure(data) {
            angular.merge(this.mesure, data);
            this.mesure.point = this.typeMesure;
            this.mesure.date = Date.now();
            return this.mesure;
        }

        /**
         * Rejet en cas d'erreur lors de la récupération des infos du terminal de mesure
         * @param {error} e
         * @private
         */
        /*jshint validthis:true */
        function _cantGetMesureFromMambo(e) {
            this.mesure.isSynchronized = false;
            _cancelIntervalsAndTimeouts.call(this);
            _arreterMesure.call(this);
            _initScrutation.call(this);
            _problemMambo.call(this, e);
        }

        /**
         * Notifie en cas d'erreur avec le terminal de mesure
         *
         * @param {error} e
         * @private
         */
        /*jshint validthis:true */
        function _problemMambo(e) {
            // On n'affiche pas les memes erreurs plusieurs fois
            if (!this.param.mambo.error || !angular.equals(this.param.mambo.error, e)) {
                this.param.mambo.error = e;
                toastr.error('Boitier Mambo injoignable');
                $log.warn('boitier Mambo injoignable');
                $log.warn(e);
            }
        }

        /**
         * Diffuse le changement d'état de scrutation
         *
         * @param etat
         * @private
         */
        /*jshint validthis:true */
        function _pushScrutationStateChange() {
            $rootScope.$broadcast(EVENT_SCRUTATION.STATE, this.etatCourant.scrutation);
        }

        /**
         * Diffuse le message d'erreur à la fin de la scrutation
         *
         * @param {string} message
         * @private
         */
        function _pushScrutationTimeOutErrorMessage(message) {
            $rootScope.$broadcast(EVENT_SCRUTATION.ERROR_MSG, message);
        }

    }
})();
