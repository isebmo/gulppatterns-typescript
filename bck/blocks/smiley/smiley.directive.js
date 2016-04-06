(function() {
    'use strict';

    angular
        .module('app.core')
        .directive('smiley', smiley);

    /* @ngInject */
    function smiley () {
        return {
            bindToController: true,
            controller: 'SmileyController',
            controllerAs: 'vm',
            restrict: 'E',
            scope: {
                'type': '=',
                'size': '@'
            },
            templateUrl: 'app/blocks/smiley/smiley.html'
        };
    }
})();
