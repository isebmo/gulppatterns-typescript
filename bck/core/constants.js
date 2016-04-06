/* global toastr:false, moment:false, Dygraph:false */
(function() {
    'use strict';

    angular
        .module('app.core')
        .constant('toastr', toastr)
        .constant('moment', moment)
        .constant('Dygraph', Dygraph);
})();
