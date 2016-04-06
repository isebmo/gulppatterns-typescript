/* global toastr:false, moment:false */
(function () {
    'use strict';

    angular
        .module('blocks.auth')
        .constant('accessRight', {
            module: {
                HELIOS: {
                    ETR: 'helios_ptools',
                    Orange: 'vqse_ptools_orange'
                }
            }
        });

})();
