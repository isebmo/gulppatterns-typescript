(function() {
    'use strict';

    angular
        .module('app.layout')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'home',
                config: {
                    abstract: true,
                    templateUrl: 'app/layout/shell.html',
                    controller: 'Shell',
                    controllerAs: 'vm',
                    params: {
                        title: 'Shell'
                    }
                }
            }
        ];
    }
})();
