(function () {
    'use strict';

    angular
        .module('blocks.interceptors')
        .factory('authInterceptor', authInterceptor);

    /* @ngInject */
    function authInterceptor($q) {
        var service = {
            /*response: response,*/
            responseError: responseError
        };
        return service;

        ////////////////

        /*function response(response) {
         TimeoutService.reset();
         return response || $q.when(response);
         }*/

        function responseError(response) {
            //if (response.status === 401) {
            //todo
            //}
            return $q.reject(response);
        }
    }

})();

