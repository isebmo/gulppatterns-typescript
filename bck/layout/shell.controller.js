(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('Shell', Shell);

    /* @ngInject */
    function Shell(spinnerService) {
        var vm = this;

        vm.param = {};
        vm.fn = {};

        onInit();

        function onInit() {
            spinnerService.onPromiseUpdated(_updatePromise);
        }

        function _updatePromise(promise) {
            vm.param.spinner = promise;
        }
    }
})();
