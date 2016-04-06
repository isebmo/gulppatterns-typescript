(function () {
    'use strict';

    angular
        .module('app.helios')
        .controller('Helios', Helios);

    /* @ngInject */
    function Helios(interventionStorageService) {
        var vm = this;

        activate();

        function activate() {
            //Start to sync interventions with server
            interventionStorageService.startAutoSave();
        }
    }
})();
