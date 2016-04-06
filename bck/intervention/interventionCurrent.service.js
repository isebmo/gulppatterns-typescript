(function () {
    'use strict';

    angular
        .module('app.intervention')
        .factory('interventionCurrentService', interventionCurrentService);

    /* @ngInject */
    function interventionCurrentService(interventionUtilsService, interventionStorageService, INTER_HISTORY,
                                        $localForage, $log, $q, $filter, $rootScope, INTERVENTION_EVENT) {
        /* jshint validthis:true */
        var currentIntervention;

        return {
            updateIntervention: updateCurrentIntervention,
            setCurrentIntervention: setCurrentIntervention,
            createIntervention: createNewIntervention,
            getCurrentIntervention: getCurrentIntervention,
            saveInterventionsInLocal: saveInterventionsInLocal
        };

        //////////////////////////////

        /**
         * update la currentIntervention (ne peut être appelé que pour modifier une intervention déjà existante)
         * et supprime dans le local storage l'ancienne version de l'intervention si le nd a changé
         * => ne pas utiliser pour charger une intervention différente
         * @param {*} intervention
         * @returns {Promise} promesse
         */
        function updateCurrentIntervention(intervention) {
            intervention.lastUpdate = new Date();
            var previousIntervention = currentIntervention;

            var promise = saveInterventionInLocal(intervention)
                .then(setCurrentIntervention);

            if (previousIntervention.nd !== intervention.nd) {
                promise = promise.then(function () {
                    return _deleteInterventionFromLocal(previousIntervention);
                });
            }
            return promise;

            //////////////////////////////

            /**
             * supprime l'intervention en paramètre du local storage (si elle existe)
             * @param {*} intervention
             * @returns {Promise} promesse vide
             */
            function _deleteInterventionFromLocal(intervention) {
                var deferred = $q.defer();
                interventionStorageService.getInterventionsFromLocal()
                    .then(_deleteInList)
                    .then(_saveChanges);

                return deferred.promise;

                //////////////////

                function _deleteInList(listInterventions) {
                    var indexOfIntervention,
                        listInterFinale = [];
                    if (listInterventions) {
                        Array.prototype.push.apply(listInterFinale, listInterventions);
                    }

                    indexOfIntervention = $filter('indexOfIntervention')(listInterFinale, intervention);
                    if (indexOfIntervention !== -1) {
                        listInterFinale.splice(indexOfIntervention, 1);
                    }

                    return listInterFinale;
                }

                function _saveChanges(listIntervention) {
                    return _setInterventionsInLocal(listIntervention).then(function () {
                        deferred.resolve();
                    });
                }
            }
        }

        /**
         * Sauvegarde dans le local storage l'intervention passée en paramètre
         * (écrase la précédente version si elle existe déjà) et lance la synchro
         * automatique
         * @param {*} intervention
         * @returns object contenant l'intervention sauvegardée
         */
        function saveInterventionInLocal(intervention) {
            return interventionStorageService.getInterventionsFromLocal()
                .then(_changeInList)
                .then(_setInterventionsInLocal)
                .then(function () {
                    interventionStorageService.startAutoSave();
                    return intervention;
                });

            //////////////////

            function _changeInList(listInterventions) {
                return interventionUtilsService.mergeInterventions(listInterventions, [intervention]);
            }
        }

        /**
         * Enregistre en local la liste en mettant à jour
         * @param {*} interventions
         */
        function saveInterventionsInLocal(interventions) {
            return interventionStorageService.getInterventionsFromLocal()
                .then(_matchAndReplace)
                .then(_setInterventionsInLocal);

            function _matchAndReplace(localInterventions) {
                return interventionUtilsService.mergeInterventions(localInterventions, interventions);
            }
        }

        /**
         * change la currentIntervention (sans vérification et sans sauvegarde) et encapsule le tout dans une promesse
         * @param {*} intervention
         * @returns {Promise} qui contient l'intervention
         */
        function setCurrentIntervention(intervention) {
            var deferred = $q.defer();
            if (!intervention.nd) {
                //todo instancier l'objet error quand il sera créé
                deferred.reject({data: 'intervention nd non présent'});
            } else {
                interventionUtilsService.setStatutAndRights(intervention).then(function (inter) {
                    currentIntervention = inter;
                    deferred.resolve(inter);
                    $rootScope.$emit(INTERVENTION_EVENT.CURRENT_UPDATED, inter);
                });
            }
            return deferred.promise;
        }

        /**
         * Sauvegarde la précédente currentIntervention puis change la currentIntervention et la sauvegarde
         * @param {*} intervention
         * @returns {Promise} sans valeurs de résultats onFulFilment
         */
        function createNewIntervention(intervention) {
            intervention.date = new Date();
            var promise = $q.when();

            // un maillon de la chaine de promesses optionnel
            if (currentIntervention) {
                promise = promise.then(function () {
                    return saveInterventionInLocal(currentIntervention);
                });
            }

            promise = promise.then(function () {
                return setCurrentIntervention(intervention);
            }).then(function (inter) {
                return saveInterventionInLocal(inter);
            });

            return promise;
        }

        /**
         * Récupération de l'intervention courante dans le cache
         * @returns intervention courante
         */
        function getCurrentIntervention() {
            var promise = $q.when();
            if (currentIntervention) {
                promise = interventionUtilsService.setStatutAndRights(currentIntervention);
            }
            return promise.then(function (i) {
                return angular.copy(i);
            });
        }

        /**
         *
         * @param {array<intervention>} history
         * @returns {array<intervention>} history
         * @private
         */
        function _setInterventionsInLocal(history) {
            if (currentIntervention) {
                var indexCurrentIntervention = $filter('indexOfIntervention')(history, currentIntervention);
                if (indexCurrentIntervention !== -1) {
                    setCurrentIntervention(history[indexCurrentIntervention]);
                }
            }
            // US 470 : Purge des interventions en local: Renvoi que les interventions à garder
            history = $filter('purgedIntervention')(history);
            return $localForage.setItem(INTER_HISTORY, history);
        }
    }
})();
