(function() {
    'use strict';

    var core = angular.module('app.core');

    core.config(toastrConfig);

    /* @ngInject */
    function toastrConfig(toastr) {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';
    }

    var config = {
        appErrorPrefix: '[GulpPatterns Error] ', //Configure the exceptionHandler decorator
        appTitle: 'Hélios',
        imageBasePath: '/images/',
        unknownPersonImageSource: 'unknown_person.jpg'
    };

    core.value('config', config);

    core.config(configure);

    /* @ngInject */
    function configure ($compileProvider, $logProvider, $httpProvider,
         diagnostics, exceptionHandlerProvider, routerHelperProvider) {

        diagnostics.enable = false;

        $compileProvider.debugInfoEnabled(false);

        //Ajout des intercepteurs
        $httpProvider.interceptors.push('authInterceptor');

        // turn debugging off/on (no info or warn)
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
        exceptionHandlerProvider.configure(config.appErrorPrefix);
        configureStateHelper();

        ////////////////

        function configureStateHelper() {
            var resolveAlways = { /* @ngInject */
                ready: function(dataservice) {
                    return dataservice.ready();
                }
            };

            routerHelperProvider.configure({
                docTitle: 'Hélios: ',
                resolveAlways: resolveAlways
            });
        }
    }
})();
