(function () {
    'use strict';

    angular
        .module('app.mesure')
        .filter('getMesureFromInter', getMesureFromInter);

    /* @ngInject */
    function getMesureFromInter(moment) {
        return findMesure;

        ////////////////

        /**
         * Return a measure matching the filter criteria
         * @param {Object} intervention
         * @param {Object} filter criterias
         * @returns {Object} mesureMatching
         */
        function findMesure(intervention, filter) {
            var mesureMatching = null;

            if (intervention && intervention.groupmesures) {
                for (var i = 0; i < intervention.groupmesures.length && !mesureMatching; i++) {
                    var group = intervention.groupmesures[i];
                    for (var j = 0; group.mesures && j < group.mesures.length && !mesureMatching; j++) {
                        var mesure = group.mesures[j];
                        if (mesure.point === filter.typeMesure && moment(mesure.date).isSame(filter.dateMesure)) {
                            mesureMatching = mesure;
                        }
                    }
                }
            }

            return mesureMatching;
        }
    }

})();

