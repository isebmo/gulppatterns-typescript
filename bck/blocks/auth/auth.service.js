(function () {
    'use strict';

    angular
        .module('blocks.auth')
        .service('AuthService', AuthService);

    /* @ngInject */
    function AuthService(User, $resource, $cacheFactory, $localForage, $q, $log) {
        /* jshint validthis:true */
        var cache = $cacheFactory.get('$http');
        var API_USER = 'api/connect';
        var KEY_LAST_CONNECTED_USER = 'LAST_CONNECTED_USER';
        var Resource = $resource(API_USER,
            {},
            {
                get: {
                    method: 'GET',
                    isArray: false,
                    cache: true
                }
            });

        return {
            getUser: getUser,
            getLastConnectedUser: getLastConnectedUser
        };

        ////////////////////

        function invalidateCache() {
            cache.remove(API_USER);
        }

        /**
         * Retourne l'utilisateur connecté depuis le serveur.
         * Cet appel est mis en cache, pour forcer la récupération
         * passer le paramètre force à true.
         * @param {*} force pour forcer l'appel au serveur
         * @returns {*}
         */
        function _getUser(force) {
            if (force) {
                invalidateCache();
            }
            return Resource.get().$promise.then(_buildUser);
        }

        function getLastConnectedUser() {
            return $localForage.getItem(KEY_LAST_CONNECTED_USER).then(function (stringUser) {
                $log.debug('récupération de l\'utilisateur en local: ' + stringUser);
                var user = null;
                if (stringUser) {
                    user = JSON.parse(stringUser);
                    user = _buildUser(user);
                }
                return user;
            });
        }

        function _setLastConnectedUser(u) {
            var result = $q.when(u);
            var userPersisted = {};
            if (u) {
                angular.copy(u, userPersisted);
                userPersisted.isLocal = true;
                $localForage.setItem(KEY_LAST_CONNECTED_USER, JSON.stringify(userPersisted));
            }
            return result;
        }

        function getUser() {
            var deferred = $q.defer();
            _getUser(false).then(_setLastConnectedUser).then(_resolvePromise).catch(_rejectPromise);
            return deferred.promise;

            function _resolvePromise(user) {
                deferred.resolve(user);
            }

            function _rejectPromise(e) {
                deferred.reject(e);
            }
        }

        function _buildUser(u) {
            var user = new User();
            angular.extend(user, u);
            return user;
        }
    }

})();
