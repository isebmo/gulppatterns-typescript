(function () {
    'use strict';

    angular
        .module('app')
        .filter('oui_non', OuiNon);

    function OuiNon() {
        return ouiNon;

        ////////////////

        function ouiNon(bool) {
            if (bool === true) {
                return 'Oui';
            } else if (bool === false) {
                return 'Non';
            }
            return '';
        }
    }

})();

