(function () {
    'use strict';

    angular
        .module('app.core')
        .controller('SmileyController', SmileyController);

    /* @ngInject */
    function SmileyController(typesSmiley) {
        var vm = this;

        _activate();

        ///////////////////

        function _activate() {
            vm.classsize = vm.size ? 'fa-' + vm.size : 'fa-2x';

            switch (vm.type) {
                case typesSmiley.success:
                    vm.class = 'fa fa-smile-o text-success ' + vm.classsize;
                    break;
                case typesSmiley.danger:
                    vm.class = 'fa fa-frown-o text-danger ' + vm.classsize;
                    break;
                default:
                    vm.class = 'fa fa-meh-o text-default ' + vm.classsize;
            }
        }
    }
})();
