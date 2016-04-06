var app;
(function (app) {
    var interview;
    (function (interview) {
        'use strict';
        angular
            .module('app.interview')
            .config(configureStates);
        //configureStates.$inject = ['$stateProvider'];
        /* @ngInject */
        function configureStates($stateProvider) {
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
    })(interview = app.interview || (app.interview = {}));
})(app || (app = {}));

//# sourceMappingURL=interview.route.js.map
