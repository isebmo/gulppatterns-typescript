(function () {
    'use strict';

    angular
        .module('app.graph')
        .controller('Graph', Graph);

    /* @ngInject */
    function Graph($window, updateTimeGraph) {
        var vm = this;
        vm.title = 'Graph';
        vm.back = back;
        vm.graphicType = 'SNR';
        vm.updateTime = updateTimeGraph;

        function back() {
            $window.history.back();
        }

    }
})();
