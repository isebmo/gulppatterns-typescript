(function () {
    'use strict';

    angular
        .module('app.intervention')
        .factory('interventionExistService', interventionExistService);

    /* @ngInject */
    function interventionExistService($resource, $q) {

        var Resource = $resource('api/private/existIntervention/:nd',
            {nd: '@nd'});

        return {
            existIntervention: existIntervention
        };

        function existIntervention(ndParam) {
            return Resource.get({nd: ndParam}).$promise;
        }

    }
})();
