(function() {
    'use strict';

    angular
        .module('app.core', [
            /* Angular modules */
            'ngAnimate',
            'ngSanitize',
            'ngResource',
            /* Cross-app modules */
            'blocks.diagnostics',
            'blocks.exception',
            'blocks.logger',
            'blocks.router',
            'blocks.auth',
            'blocks.interceptors',
            /* 3rd-party modules */
            'ui.router',
            'ui.bootstrap',
            'LocalForageModule',
            'cgBusy'
        ]);

})();
