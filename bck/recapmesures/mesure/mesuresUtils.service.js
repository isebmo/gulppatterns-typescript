(function () {
    'use strict';

    angular
        .module('app.mesure')
        .factory('mesuresUtilsService', mesuresUtilsService);

    /* @ngInject */
    function mesuresUtilsService(interventionCurrentService, interviewService, MODIFICATION_RIGHT, $q, $resource,
                                 moment, $filter) {

        var currentMesure;

        return {
            getGraphData: getGraphData,
            addMesureToCurrentIntervention: addMesureToCurrentIntervention,
            findMesure: findMesure,
            isMesureDeletable: isMesureDeletable,
            deleteMesure: deleteMesure,
            getCurrentMesure: getCurrentMesure,
            setCurrentMesure: setCurrentMesure,
            calculateMesureMinMax: calculateMesureMinMax,
        };

        function getGraphData() {
            var Resource = $resource('/api/private/graphdata');
            return Resource.get().$promise;
        }

        function getCurrentMesure() {
            return $q.when(currentMesure);
        }

        function setCurrentMesure(mesure) {
            currentMesure = mesure;
            return $q.when(currentMesure);
        }

        /**
         * Recherche une mesure dans l'intervention courante
         * pour un type (point) et une date/heure donnée
         *
         * @param {string} typeMesure
         * @param {date} dateMesure
         * @returns {object} mesure
         */
        function findMesure(typeMesure, dateMesure) {
            return interventionCurrentService.getCurrentIntervention()
                .then(_filterMesureFromIntervention(typeMesure, moment(parseInt(dateMesure))));
        }

        /**
         * Recherche dans la liste des mesures d'une intervention, la mesure
         * qui correspond à une date et un type de point donnés
         *
         * @param {String} typeMesure
         * @param {Date} dateMesure
         * @returns {Function}
         * @private
         */
        function _filterMesureFromIntervention(typeMesure, dateMesure) {
            return function (intervention) {
                var filter = {
                    typeMesure: typeMesure,
                    dateMesure: dateMesure
                };
                return $filter('getMesureFromInter')(intervention, filter);
            };
        }

        function isMesureDeletable(mesure) {
            var deferred = $q.defer();
            interventionCurrentService.getCurrentIntervention().then(function (intervention) {
                var dernierGroupMesure = _getLastGroupMesures(intervention);

                if (dernierGroupMesure && dernierGroupMesure.mesures.length) {
                    var derniereMesure = dernierGroupMesure.mesures[dernierGroupMesure.mesures.length - 1],
                        hasRightDelete = intervention.rights.indexOf(MODIFICATION_RIGHT.ANYTHING_EXCEPT_ND) !== -1,
                        isLastMesure = moment(derniereMesure.date).isSame(mesure.date);
                    deferred.resolve(isLastMesure && hasRightDelete);
                }
            }).catch(function (e) {
                deferred.reject(e);
            });
            return deferred.promise;
        }

        function deleteMesure(mesure) {
            var deferred = $q.defer();
            isMesureDeletable(mesure).then(function (bool) {
                if (bool) {
                    _deleteMesure(deferred);
                } else {
                    deferred.resolve();
                }
            }).catch(function (e) {
                deferred.reject(e);
            });

            return deferred.promise;

            ////////////

            function _deleteMesure(deferred) {
                // Si la mesure est supprimable alors elle est présente
                // et est placée à la fin de la liste de mesure du dernier groupeMesure
                interventionCurrentService.getCurrentIntervention()
                    .then(_mayDeleteGroupMesure)
                    .then(_deleteInterview)
                    .then(_updateIntervention)
                    .catch(function (e) {
                        deferred.reject(e);
                    });

                function _mayDeleteGroupMesure(intervention) {
                    var dernierGroupeMesures = _getLastGroupMesures(intervention);

                    dernierGroupeMesures.mesures.pop();
                    if (dernierGroupeMesures.mesures.length === 0) {
                        intervention.groupmesures.pop();
                    }
                    return intervention;
                }

                function _deleteInterview(intervention) {
                    if ($filter('nmihdLast')(intervention, {type: mesure.point}) === null) {
                        interviewService.deleteInterviewType(mesure.point, intervention);
                    }

                    return intervention;
                }

                function _updateIntervention(intervention) {
                    interventionCurrentService.updateIntervention(intervention).then(function () {
                        deferred.resolve();
                    });
                }
            }
        }

        function addMesureToCurrentIntervention(mesure) {
            var mesureToSave = angular.copy(mesure);
            return interventionCurrentService.getCurrentIntervention()
                .then(pushMesureToMesuresGroup)
                .then(interventionCurrentService.updateIntervention);

            function pushMesureToMesuresGroup(intervention) {
                var dernierGroupeMesures = _getLastGroupMesures(intervention);

                if (!dernierGroupeMesures || dernierGroupeMesures.profil.code !== intervention.profilcourant.code) {
                    dernierGroupeMesures = _createGroupMesures(intervention);
                }
                dernierGroupeMesures.mesures.push(mesureToSave);

                return intervention;
            }

            function _createGroupMesures(intervention) {
                if (!intervention.groupmesures) {
                    intervention.groupmesures = [];
                }

                var newGroup = {
                    profil: intervention.profilcourant,
                    mesures: []
                };
                intervention.groupmesures.push(newGroup);

                return newGroup;
            }
        }

        function _getLastGroupMesures(intervention) {
            var groupesMesures = intervention.groupmesures;
            return groupesMesures && groupesMesures.length ? groupesMesures[groupesMesures.length - 1] : null;
        }

        /**
         * Calcul les débits  et marges atteignables
         * min et max en montant et en descendant pour une mesure donnée
         *
         * @param {*} mesure
         */
        function calculateMesureMinMax(mesure) {
            mesure.mont.debAttMinMax.min = _calculateMin(mesure.mont.debAttMinMax.min,
                mesure.mont.debAttActu);
            mesure.mont.debAttMinMax.max = _calculateMax(mesure.mont.debAttMinMax.max,
                mesure.mont.debAttActu);
            mesure.desc.debAttMinMax.min = _calculateMin(mesure.desc.debAttMinMax.min,
                mesure.desc.debAttActu);
            mesure.desc.debAttMinMax.max = _calculateMax(mesure.desc.debAttMinMax.max,
                mesure.desc.debAttActu);
            mesure.mont.margeBruitMinMax.min = _calculateMin(mesure.mont.margeBruitMinMax.min,
                mesure.mont.margeBruitActu);
            mesure.mont.margeBruitMinMax.max = _calculateMax(mesure.mont.margeBruitMinMax.max,
                mesure.mont.margeBruitActu);
            mesure.desc.margeBruitMinMax.min = _calculateMin(mesure.desc.margeBruitMinMax.min,
                mesure.desc.margeBruitActu);
            mesure.desc.margeBruitMinMax.max = _calculateMax(mesure.desc.margeBruitMinMax.max,
                mesure.desc.margeBruitActu);
        }

        /**
         * Calcul le min entre 2 valeurs
         *
         * @param {number} refValue
         * @param {number} value
         * @returns {number} min value
         * @private
         */
        function _calculateMin(refValue, value) {
            return refValue ? Math.min(refValue, value) : value;
        }

        /**
         * Calcul le max entre 2 valeurs
         *
         * @param {number} refValue
         * @param {number} value
         * @returns {number} max value
         * @private
         */
        function _calculateMax(refValue, value) {
            return refValue ? Math.max(refValue, value) : value;
        }

    }
})();
