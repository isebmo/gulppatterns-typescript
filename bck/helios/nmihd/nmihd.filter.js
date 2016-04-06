(function () {
    'use strict';

    angular
        .module('app.helios.nmihd')
        .filter('nmihdCorrected', Corrected)
        .filter('nmihdAllCorrected', AllCorrected)
        .filter('nmihdFirst', First)
        .filter('nmihdLast', Last);

    /* @ngInject */
    function Corrected($filter, moment) {
        return corrected;

        ////////////////

        /**
         * @param {intervention} intervention
         * @param {param} param
         * @param {string} param.from
         * @param {string} param.to
         * @param {array.<string>} param.types
         * @param {string} param.status
         * @returns {boolean}
         */
        function corrected(intervention, param) {
            var result = false;

            for (var i = 0; i < param.types.length && !result; i++) {
                var type = param.types[i];
                result = singleCorrected(intervention, param, type);
            }

            return result;

            ////////////////

            function singleCorrected(intervention, param, type) {
                var p = {
                    type: type,
                    status: param.from
                };
                var first = $filter('nmihdFirst')(intervention, p);
                var lastLikeFirst = $filter('nmihdLast')(intervention, p);
                p.status = param.to;
                var last = $filter('nmihdLast')(intervention, p);
                return !!first && !!last && moment(first.date).isBefore(last.date) &&
                    (!lastLikeFirst || moment(lastLikeFirst.date).isBefore(last.date));
            }

        }
    }

    /* @ngInject */
    function AllCorrected($filter) {
        return allcorrected;

        ////////////////

        /**
         * Retourne vrai si toutes les mesures n'ont pas le statut passé en paramètre
         * @param {intervention} intervention
         * @param {param} param
         * @param {array.<string>} param.types
         * @param {string} param.status
         * @returns {boolean}
         */
        function allcorrected(intervention, param) {
            var foundIncorrect = null;

            for (var i = 0; i < param.types.length && !foundIncorrect; i++) {
                var type = param.types[i];
                foundIncorrect = foundWithStatus(intervention, param, type);
            }

            return !foundIncorrect;

            ////////////////

            function foundWithStatus(intervention, param, type) {
                var p = {
                    type: type,
                    status: param.status
                };
                return $filter('nmihdLast')(intervention, p);
            }

        }
    }

    /* @ngInject */
    function First() {
        return first;

        ////////////////

        /**
         *
         * @param {intervention} intervention
         * @param {array} intervention.groupemesures
         * @param {param} param
         * @param {string} param.status statut de la mesure à rechercher
         * @param {string} param.type type de mesure à rechercher
         *
         * @returns {*} mesure qui match les critères param
         */
        function first(intervention, param) {
            var mesureMatching = null;

            if (intervention && intervention.groupmesures) {
                for (var i = 0; i < intervention.groupmesures.length && !mesureMatching; i++) {
                    var group = intervention.groupmesures[i];
                    for (var j = 0; group.mesures && j < group.mesures.length && !mesureMatching; j++) {
                        var mesure = group.mesures[j];
                        if (_mesureMatch(mesure, param)) {
                            mesureMatching = mesure;
                        }
                    }
                }
            }

            return mesureMatching;
        }
    }

    /* @ngInject */
    function Last() {
        return last;

        ////////////////

        function last(intervention, param) {
            var mesureMatching = null;

            if (intervention && intervention.groupmesures) {
                for (var i = 0; i < intervention.groupmesures.length; i++) {
                    var group = intervention.groupmesures[i];
                    for (var j = 0; group.mesures && j < group.mesures.length; j++) {
                        var mesure = group.mesures[j];
                        if (_mesureMatch(mesure, param)) {
                            mesureMatching = mesure;
                        }
                    }
                }
            }

            return mesureMatching;
        }
    }

    function _mesureMatch(mesure, param) {
        var sameStatus = true;
        if (param.status) {
            sameStatus = mesure.decision === param.status;
        }
        return (mesure.point === param.type) && (sameStatus);
    }

})();

