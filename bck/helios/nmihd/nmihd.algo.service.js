(function () {
    'use strict';

    angular
        .module('app.helios.nmihd')
        .factory('nmihdAlgo', NmihdAlgo);

    /* @ngInject */
    function NmihdAlgo() {

        return {
            loadInterventions: loadInterventions
        };

        ///////////////////////

        function loadInterventions() {
        }
    }
})();
