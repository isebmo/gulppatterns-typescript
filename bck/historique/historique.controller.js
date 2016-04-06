(function () {
    'use strict';

    angular
        .module('app.historique')
        .controller('Historique', Historique);

    /* @ngInject */
    function Historique($state) {
        var vm = this;

        vm.param = {
            state: $state
        };
        vm.fn = {
        };

        _activate();

        //////////////////

        function _activate() {
        }

    }
})();
