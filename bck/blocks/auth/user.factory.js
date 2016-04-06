(function () {
    'use strict';

    angular
        .module('blocks.auth')
        .factory('User', fUser);

    /* @ngInject */
    function fUser(moment) {

        function User(userId) {
            this.login = null;
            this.nd = null;
            this.pidiRoles = [];
            this.userId = userId;
            this.lastConnection = {
                time: moment(),
                module: null
            };
            //true if user was saved in local storage
            this.isLocal = false;
        }

        User.prototype.isETR = function () {
            return !!this.siuId || !this.cuid;
        };

        User.prototype.hasRightToModule = function (module) {
            if (this.isETR()) {
                return this.pidiRoles.indexOf(module.ETR) !== -1;
            } else {
                return this.pidiRoles.indexOf(module.Orange) !== -1;
            }
        };

        User.prototype.needToLogin = function () {
            return moment(moment()).diff(this.lastConnection.time, 'days') > 0;
        };

        return User;
    }

})();

