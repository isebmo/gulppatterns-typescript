(function () {
    'use strict';

    angular
        .module('app.helios')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        var otherwise = '/404';
        routerHelper.configureStates(getStates(), otherwise);
    }

    function getStates() {
        return [
            {
                state: 'home.helios',
                config: {
                    url: '/helios',
                    templateUrl: 'app/helios/helios.html',
                    controller: 'Helios',
                    controllerAs: 'vm',
                    abstract: true,
                    resolve: {
                        userConnected: getUser
                    }
                }
            }
        ];

        /* @ngInject */
        function getUser(accessRight, AuthService, $q, toastr) {
            var deferred = $q.defer();
            AuthService.getUser().then(_checkRight, _handleError);
            return deferred.promise;

            function _checkRight(user) {
                if (!user) {
                    //todo erreur à renvoyer se lettre d'accord sur le format de l'objet
                    deferred.reject({data: 'pas de user'});
                } else if (user.needToLogin()) {
                    toastr.error('Veuillez vous authentifier');
                    deferred.reject({data: 'l\'utilisateur doit se reconnecter'});
                } else if (user.hasRightToModule(accessRight.module.HELIOS)) {
                    deferred.resolve(user);
                } else {
                    deferred.reject({data: 'l\'utilisateur n\'a pas les droits d\'accés à HELIOS'});
                }
            }

            function _handleError(e) {
                if (e.status !== 403) {
                    AuthService.getLastConnectedUser().then(_checkRight).catch(_rejectConnection);
                }
            }

            function _rejectConnection(mes) {
                deferred.reject({data: 'l\'utilisateur doit se reconnecter'});
            }
        }
    }
})();
