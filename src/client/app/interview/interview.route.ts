module app.interview {
    'use strict';

    angular
        .module('app.interview')
        .config(configureStates);

    //configureStates.$inject = ['$stateProvider'];
    /* @ngInject */
    function configureStates($stateProvider:ng.ui.IStateProvider) {
        var states = getStates();
        states.forEach(function (state) {
            $stateProvider.state(state.state, state.config);
        });
    }

    function getStates() {
        return [
            {
                state: 'interview',
                config: {
                    url: '/interview',
                    templateUrl: 'app/interview/interview.html',
                    controller: 'InterviewController',
                    controllerAs: 'vm',
                    settings: {},
                    resolve: {}
                }
            }
        ];
    }
}
