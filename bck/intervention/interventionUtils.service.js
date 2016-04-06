(function () {
    'use strict';

    angular
        .module('app.intervention')
        .factory('interventionUtilsService', interventionUtilsService);

    /* @ngInject */
    function interventionUtilsService(STATUT_HISTORIQUE, MODIFICATION_RIGHT, moment, $q, $filter) {

        return {
            setStatutAndRights: setStatutAndRights,
            setAllStatutsAndRights: setAllStatutsAndRights,
            hasRightToCreateMesure: hasRightToCreateMesure,
            mergeInterventions: mergeInterventions,
            addChoice: addChoice
        };

        ///////////////////////////////

        /**
         * déterminer l'intervention peut être de modifier (entièrement, partiellement, ...)
         * @param {*} intervention
         * @returns {promise} contient les droits de modifications associé à l'intervention
         */
        function setStatutAndRights(intervention) {
            return $q.when(_setStatutAndRights(intervention));
        }

        function _setStatutAndRights(intervention) {
            intervention.statut = _getStatut(intervention);
            intervention.rights = _getRights(intervention);
            return intervention;
        }

        function _getRights(intervention) {
            var isFromToday = moment(intervention.date).isSame(moment(), 'day');
            var rights = [];

            if (isFromToday) {
                rights.push(MODIFICATION_RIGHT.ANYTHING_EXCEPT_ND);
            }
            if (intervention.statut === STATUT_HISTORIQUE.LOCAL ||
                intervention.statut === STATUT_HISTORIQUE.NOT_FOUND ||
                intervention.statut === STATUT_HISTORIQUE.INVALID) {
                rights.push(MODIFICATION_RIGHT.ND);
            }

            return rights;
        }

        /**
         * retourne le statut en fonction de l'état de synchronisation avec le serveur
         * @param {intervention} intervention
         * @param {date} intervention.syncDate
         * @param {date} intervention.lastUpdate
         */
        function _getStatut(intervention) {
            if (intervention.statut === STATUT_HISTORIQUE.NOT_EXIST_INTER) {
                //PHA US sauvegarder sur le serveur
                return STATUT_HISTORIQUE.NOT_EXIST_INTER;
            } else if (!intervention.syncDate) {
                return STATUT_HISTORIQUE.LOCAL;
            } else if (!intervention.lastUpdate || moment(intervention.syncDate).isAfter(intervention.lastUpdate)) {
                return STATUT_HISTORIQUE.SYNC;
            } else if (intervention.lastUpdate && !moment(intervention.syncDate).isAfter(intervention.lastUpdate)) {
                return STATUT_HISTORIQUE.PARTIAL;
            }
            return STATUT_HISTORIQUE.DEFAULT; // todo ASI : gérer les statuts invalid + notFound (US de sauvegarde ?)
        }

        /**
         * calcul et attribut les droits  et statuts de chaque intervention de la liste
         * @param {Array} listIntervention
         * @returns {Promise}
         */
        function setAllStatutsAndRights(listIntervention) {
            if (!listIntervention) {
                return $q.when(listIntervention);
            }

            var deferred = $q.defer(),
                listCompletedIntervention = [];

            listIntervention.forEach(function (inter) {
                listCompletedIntervention.push(_setStatutAndRights(inter));
            });

            deferred.resolve(listCompletedIntervention);
            return deferred.promise;
        }

        function hasRightToCreateMesure(intervention, right) {
            return $q.when(intervention &&
                intervention.rights &&
                intervention.rights.indexOf(right) !== -1);
        }

        /**
         *
         * @param {Array} oldInterventions
         * @param {Array} newInterventions
         */
        function mergeInterventions(oldInterventions, newInterventions) {
            var indexOfIntervention;
            var merged = oldInterventions || [];

            newInterventions.forEach(function (intervention) {
                indexOfIntervention = $filter('indexOfIntervention')(merged, intervention);

                if (indexOfIntervention !== -1) {
                    merged[indexOfIntervention] = intervention;
                } else {
                    merged.push(intervention);
                }
            });

            return $q.when(merged);
        }

        /**
         * Ajoute le choix à l'intervention
         * @param {*} choix
         * @param {string} choix.code
         * @param {string} typeMesure
         * @returns {Function}
         */
        function addChoice(choix) {
            return function (intervention) {
                if (!intervention.choix || !Array.isArray(intervention.choix)) {
                    intervention.choix = [choix];
                } else {
                    intervention.choix.push(choix);
                }
                return $q.when(intervention);
            };
        }
    }
})();

