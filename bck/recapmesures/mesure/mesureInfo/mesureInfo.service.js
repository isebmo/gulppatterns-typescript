(function () {
    'use strict';

    angular
        .module('app.recapmesures.mesure.info')
        .factory('mesureInfo', mesureInfo);

    /* @ngInject */
    function mesureInfo(interventionCurrentService, $log, $q, $filter) {

        return {
            showInfo: showInfo,
            isAdsl: isAdsl
        };

        //////////////////////////////

        function showInfo(mesureType) {
            var promise = $q.when(false);
            if (mesureType === 'RE') {
                promise = interventionCurrentService.getCurrentIntervention().then(function (i) {
                    return !$filter('nmihdLast')(i, {type: 'RE'});
                });
            }
            return promise;
        }

        function isAdsl() {
            return interventionCurrentService.getCurrentIntervention().then(function (i) {
                return i && i.profilcourant && i.profilcourant.typeLigne === 'ADSL';
            });
        }
    }
})();
