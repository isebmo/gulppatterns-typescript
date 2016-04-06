(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('params', params);

    /* @ngInject */
    function params($resource, $cacheFactory) {

        var cache = $cacheFactory.get('$http');
        var API_PARAMS = 'api/public/params';
        var Resource = $resource(API_PARAMS,
            {},
            {
                get: {
                    method: 'GET',
                    isArray: false,
                    cache: true
                }
            });

        return {
            getParams: getParams,
            getDescInHTML: getDescInHTML
        };

        ////////////////////

        function invalidateCache() {
            cache.remove(API_PARAMS);
        }

        function getParams() {
            return Resource.get().$promise;
        }

        /**
         * Transformation de l'objet description en en html.
         * @param {object} descriptions
         * @param {string} descriptions.libelle
         * @param {boolean} descriptions.orange
         * @param {boolean} descriptions.gras
         */
        function getDescInHTML(descriptions) {
            var descriptionHTML = '';
            descriptions.forEach(function (description) {
                var bold = description.gras;
                var orange = description.orange;
                if (bold && orange) {
                    descriptionHTML += '<strong class=\'label-orange\'>' + description.libelle + '</strong>';
                } else if (bold) {
                    descriptionHTML += '<strong>' + description.libelle + '</strong>';
                } else if (orange) {
                    descriptionHTML += '<span class=\'label-orange\'>' + description.libelle + '</span>';
                } else {
                    descriptionHTML += description.libelle;
                }
            });
            return descriptionHTML;
        }

    }
})();
