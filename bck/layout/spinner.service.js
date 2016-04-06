(function () {
    'use strict';

    angular
        .module('app.layout')
        .factory('spinnerService', spinnerService);

    /* @ngInject */
    function spinnerService() {

        var promise;
        var observers = [];

        return {
            makeMeSpin: makeMeSpin,
            onPromiseUpdated: onPromiseUpdated
        };

        ////////////////////

        function makeMeSpin(p) {
            promise = p;
            _notifyPromiseUpdated();
            return promise;
        }

        function onPromiseUpdated(callback) {
            if (callback) {
                observers.push(callback);
            }
        }

        function _notifyPromiseUpdated() {
            observers.forEach(function (callback) {
                callback(promise);
            });
            observers = [];
        }
    }
})();
