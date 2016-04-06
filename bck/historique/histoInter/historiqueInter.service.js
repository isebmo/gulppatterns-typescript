(function () {
    'use strict';

    angular
        .module('app.historique.interventions')
        .factory('historiqueInterService', HistoriqueInter);

    /* @ngInject */
    function HistoriqueInter(interventionStorageService, STATUT_HISTORIQUE, $filter, moment) {

        return {
            loadInterventions: loadInterventions
        };

        ///////////////////////

        function loadInterventions() {
            var todayMidnight = moment().hours(0).minute(0).seconds(0).milliseconds(0);
            var filterToday = {
                periode: {
                    dateDebut: todayMidnight.valueOf(),
                    dateFin: todayMidnight.add(1, 'day').subtract(1, 'millisecond').valueOf()
                },
                listStatuts: [
                    STATUT_HISTORIQUE.LOCAL,
                    STATUT_HISTORIQUE.INVALID,
                    STATUT_HISTORIQUE.NOT_FOUND,
                    STATUT_HISTORIQUE.SYNC
                ],
                onlyLocal: true
            };
            var filterNeverSynchronized = {
                periode: {
                    dateFin: moment().hours(0).minute(0).seconds(0).milliseconds(0)
                        .subtract(1, 'millisecond').valueOf()
                },
                listStatuts: [
                    STATUT_HISTORIQUE.LOCAL,
                    STATUT_HISTORIQUE.INVALID,
                    STATUT_HISTORIQUE.NOT_FOUND
                ]
            };

            return interventionStorageService.getInterventions(filterToday)
                .then(_addNeverSynchronized(filterNeverSynchronized))
                .then(_sortByDate);
        }

        function _sortByDate(listInterventions) {
            return $filter('orderBy')(listInterventions, 'date', true);
        }

        function _addNeverSynchronized(filterNeverSynchronized) {
            return function (listInterventions) {
                return interventionStorageService.getInterventions(filterNeverSynchronized).then(function (listInter) {
                    var listFinal = [];
                    Array.prototype.push.apply(listFinal, listInterventions);
                    Array.prototype.push.apply(listFinal, listInter);
                    return listFinal;
                });
            };
        }
    }
})();
