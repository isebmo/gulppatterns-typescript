(function () {
    'use strict';

    angular
        .module('app.intervention')
        .factory('interventionStorageService', interventionStorageService);

    /* @ngInject */
    /*jshint -W072 */
    function interventionStorageService(interventionUtilsService, interventionExistService,
                                        INTER_HISTORY, STATUT_HISTORIQUE, $injector,
                                        $resource, $localForage, $log, $q, $filter, moment, $interval,
                                        params, INTERVENTION_EVENT, $rootScope) {
        /* jshint validthis:true */
        var interventionsKey = 'piditools-helios-interventions';

        var autosave = {
            syncInterval: null,
            syncInProgress: false
        };

        var Resource = $resource('api/private/interventions/:nd/:date',
            {nd: '@nd', date: '@date'},
            {
                query: {
                    method: 'GET',
                    isArray: true,
                    cache: true
                },
                sync: {
                    method: 'POST',
                    isArray: true
                }
            });

        return {
            getInterventions: getInterventions,
            getIntervention: getIntervention,
            getInterventionsFromLocal: getInterventionsFromLocal,
            startAutoSave: startAutoSave
        };

        /**
         * Start interval and check every X seconds if interventions in local need to be synchronized.
         * If nothing to do, interval stops.
         * If sync in progress, nothing to do
         */
        function startAutoSave() {
            $log.debug('start autosave interval');
            if (!autosave.syncInProgress) {
                autosave.syncInProgress = true;
                _stopAutoSave();
                _getAutoSaveTimer()
                    .then(function (autoSaveDelay) {
                        $log.debug('creating interval autosync');
                        autosave.syncInterval = $interval(_startSyncInter, autoSaveDelay || 5000, 0, false);
                    });
            }

            ////////////////////

            function _startSyncInter() {
                getInterventionsFromLocal()
                    .then($filter('interventionToBeSync'))
                    .then(_filterInterventionExistForND)
                    .then(_checkInterToSave);
            }

            /**
             * Parcours la liste des interventions et retourne une nouvelle liste contenant
             * les interventions pour lesquelles il existe une intervention pour le ND
             * cf. [RG5] Pour un technicien ETR, vérifier l'existance d'une intervention
             * sur le ND pour l'ETR du technicien
             */
            function _filterInterventionExistForND(tabInter) {
                var promises = [];
                var interNonValides = [];
                var interValides = [];

                angular.forEach(tabInter, function (interv) {
                    if (interv.nd) {
                        var promise = interventionExistService.existIntervention(interv.nd);
                        promises.push(promise);
                        promise.then(function (result) {
                            addToTab(interv, result)();
                        });
                    } else {
                        interv.statut = STATUT_HISTORIQUE.NOT_EXIST_INTER;
                    }
                });

                function addToTab(inter, result) {
                    return function () {
                        if (!result.exist) {
                            inter.statut = STATUT_HISTORIQUE.NOT_EXIST_INTER;
                            interNonValides.push(inter);
                        } else {
                            interValides.push(inter);
                        }
                    };
                }

                return $q.all(promises).then(function () {
                    return _sauvegarderLocal(interNonValides);
                }).then(function () {
                    return interValides;
                }).catch(function (e) {
                    $log.error(e);
                    return interValides;
                });
            }

            function _checkInterToSave(interventions) {
                if (interventions.length > 0) {
                    _synchronizeInterventions(interventions)
                        .then(function () {
                            $rootScope.$broadcast(INTERVENTION_EVENT.SYNCING.SERVER.SUCCESS);
                        })
                        .catch(function (e) {
                            $log.error('problem during sync of interventions' + e);
                            $rootScope.$broadcast(INTERVENTION_EVENT.SYNCING.SERVER.ERROR);
                        });
                } else {
                    _stopAutoSave();
                }
            }
        }

        function _sauvegarderLocal(tabInter) {
            var service = $injector.get('interventionCurrentService');
            return service.saveInterventionsInLocal(tabInter)
                .catch(function (e) {
                    $log.error('pb de mise à jour des interventions en local');
                    $log.error(e);
                    return tabInter;
                });
        }

        function _getAutoSaveTimer() {
            return params.getParams().then(function (param) {
                return param.saveAutoTimer;
            });
        }

        function _stopAutoSave() {
            $log.debug('stop interval autosync');
            autosave.syncInProgress = false;
            $interval.cancel(autosave.syncInterval);
        }

        function _synchronizeInterventions(inter) {
            $log.debug('synchronisation of interventions : ' + inter.length);
            return Resource.sync({nd: null, date: null}, inter).$promise
                .then(_sauvegarderLocal)
                .catch(function (e) {
                    $log.error(e);
                    $log.error('call (POST) to api/private/interventions failed');
                    throw e;
                });
        }

        /**
         * Permet de récupérer une liste d'interventions depuis le serveur ET le local,
         * cette liste peut-être filtré par :
         *  - un ND
         *  - une date
         *  - une période (dateDebut/dateFin), cette période peut-être ouverte
         *  - une liste de statuts
         *  ATTENTION : s'il y a une liste de statuts alors on ne recherche qu'en local
         * @param {*} filter : peut contenir le nd, la date et/ou une liste de statuts
         */
        function getInterventions(filter) {
            var promise = $q.when([]);

            if (_hasStatutsToLoadFromServer(filter)) {
                promise = promise.then(_getInterventionsFromServer(filter))
                    .then(_initilizedDate, _cantReachServer);
            } else {
                $log.debug('récupération des interventions en local seulement');
            }

            promise = promise.then(_addInterventionsFromLocal)
                .then(interventionUtilsService.setAllStatutsAndRights)
                .then(_suppressDuplicate)
                .then(_filterResults(filter));

            return promise;
        }

        /**
         * On ne traite pas ici le cas ou le serveur est inaccessible
         * @param {error} e
         * @returns {*}
         * @private
         */
        function _cantReachServer(e) {
            $log.error(e);
            $rootScope.$emit(INTERVENTION_EVENT.GETTING.SERVER.ERROR);
            return e;
        }

        function _hasStatutsToLoadFromServer(filter) {
            var hasFilterAndStatus = filter && filter.listStatuts;
            var hasSyncStatus = hasFilterAndStatus && filter.listStatuts.indexOf(STATUT_HISTORIQUE.SYNC) !== -1;
            //cas où on veut les interventions synchronisées mais pas du serveur
            var syncAndLocal = (!filter.onlyLocal && hasSyncStatus);
            return !hasFilterAndStatus || syncAndLocal;
        }

        function _getInterventionsFromServer(filter) {
            return function () {
                return Resource.query(_getServerParamFromFilter(filter)).$promise;
            };
        }

        function _getServerParamFromFilter(filter) {
            var serverParam = {};
            if (filter) {
                if (filter.nd) {
                    serverParam.nd = filter.nd;
                }
                if (filter.date) {
                    serverParam.date = new Date(filter.date).getTime();
                }
                if (filter.periode && filter.periode.dateDebut) {
                    serverParam.dateDebut = new Date(filter.periode.dateDebut).getTime();
                }
                if (filter.periode && filter.periode.dateFin) {
                    serverParam.dateFin = new Date(filter.periode.dateFin).getTime();
                }
            }

            return serverParam;
        }

        function _initilizedDate(interventions) {
            interventions.forEach(function (inter) {
                inter.date = new Date(inter.date);
                inter.syncDate = new Date(inter.syncDate);
            });
            return interventions;
        }

        function _addInterventionsFromLocal(listInterventions) {
            return getInterventionsFromLocal().then(function (listInter) {
                var listFinal = [];
                Array.prototype.push.apply(listFinal, listInterventions);
                Array.prototype.push.apply(listFinal, listInter);
                return listFinal;
            });
        }

        function _suppressDuplicate(listIntervention) {
            return $filter('suppressDuplicateIntervention')(listIntervention);
        }

        function _filterResults(filter) {
            return function (interventions) {
                var listInterventionsFinal = [];
                if (interventions && interventions.length) {
                    interventions.forEach(function (inter) {
                        if (_isValid(inter, filter)) {
                            listInterventionsFinal.push(inter);
                        }
                    });
                }
                return listInterventionsFinal;
            };
        }

        function _isValid(inter, filter) {
            var result = true;
            if (filter) {
                var isNdOk = !filter.nd || filter.nd === inter.nd;
                var isDateEqual = !filter.date || moment(filter.date).isSame(inter.date);
                var isDateAfterPeriodeDebut = true, isDateBeforePeriodeFin = true;
                if (filter.periode) {
                    isDateAfterPeriodeDebut = !filter.periode.dateDebut ||
                        moment(inter.date).isAfter(filter.periode.dateDebut);
                    isDateBeforePeriodeFin = !filter.periode.dateFin ||
                        moment(inter.date).isBefore(filter.periode.dateFin);
                }
                var isStatutCorresponding = !filter.listStatuts || filter.listStatuts.indexOf(inter.statut) !== -1;

                result = isNdOk && isDateEqual && isDateAfterPeriodeDebut && isDateBeforePeriodeFin &&
                    isStatutCorresponding;
            }
            return result;
        }

        /**
         * récupère une liste à partire du getInterventions puis vérifie qu'il n'y a pas plusieurs retour
         * @param {*} filter (cf getInterventions)
         * @returns {Promise} contien 0 ou 1 intervention
         */
        function getIntervention(filter) {
            var deferred = $q.defer();

            getInterventions(filter).then(function (listInterventions) {
                if (listInterventions && listInterventions.length > 1) {
                    deferred.reject('More than one result');
                } else {
                    deferred.resolve(listInterventions ? listInterventions[0] : null);
                }
            }).catch(function (e) {
                $log.error(e);
                deferred.reject(e);
            });

            return deferred.promise;
        }

        function getInterventionsFromLocal() {
            return $localForage.getItem(INTER_HISTORY).then(function (list) {
                return list || [];
            });
        }
    }
})();
