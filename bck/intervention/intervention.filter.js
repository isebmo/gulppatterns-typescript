(function () {
    'use strict';

    angular
        .module('app.intervention')
        .filter('indexOfIntervention', IndexOfIntervention)
        .filter('suppressDuplicateIntervention', SuppressDuplicateIntervention)
        .filter('interventionToBeSync', InterventionToBeSync)
        .filter('disfonctIntervention', DisfonctIntervention)
        .filter('modifiedIntervention', modifiedIntervention)
        .filter('purgedIntervention', PurgedIntervention);

    /* @ngInject */
    function IndexOfIntervention(moment) {
        return indexOfIntervention;

        ////////////////

        function indexOfIntervention(listInterventions, intervention) {

            if (!listInterventions || !listInterventions.length) {
                return -1;
            }

            var i;
            for (i = 0; i < listInterventions.length; i++) {
                if (isSameIntervention(listInterventions[i], intervention)) {
                    return i;
                }
            }
            return -1;

            ////////////////

            function isSameIntervention(inter1, inter2) {
                return moment(inter1.date).isSame(inter2.date) && inter1.nd === inter2.nd;
            }
        }
    }

    /* @ngInject */
    function modifiedIntervention(moment) {
        return interventionsToBeSync;

        ////////////////

        function interventionsToBeSync(listInterventions) {
            var finalListInterventions = [];

            if (listInterventions) {
                listInterventions.forEach(function (inter) {
                    if (!inter.syncDate || (inter.lastUpdate && moment(inter.lastUpdate).isAfter(inter.syncDate))) {
                        finalListInterventions.push(inter);
                    }
                });
            }

            return finalListInterventions;
        }
    }

    /* @ngInject */
    function DisfonctIntervention(INTER_DYSFONCTIONNEMENTS) {
        return disfonctIntervention;

        ////////////////

        /**
         * Retourne vrai si les codes de dysfonctionnement sont présents dans l'intervention.
         * @param {intervention} intervention
         * @param {dysfonctionnements} intervention.dysfonctionnements
         * @param {string} intervention.dysfonctionnements.koDeja
         * @param {string} intervention.dysfonctionnements.koJamais
         * @param {string} intervention.dysfonctionnements.okAutre
         * @param {Array<string>} codes
         * @returns {boolean} si les codes sont dans l'intervention
         */
        function disfonctIntervention(intervention, codes) {
            var result = true;

            if (intervention.dysfonctionnements) {
                for (var i = 0; i < codes.length; i++) {
                    var code = codes[i];
                    switch (code) {
                        case INTER_DYSFONCTIONNEMENTS.KO_DEJA:
                            result = result && intervention.dysfonctionnements.koDeja;
                            break;
                        case INTER_DYSFONCTIONNEMENTS.KO_JAMAIS:
                            result = result && intervention.dysfonctionnements.koJamais;
                            break;
                        case INTER_DYSFONCTIONNEMENTS.OK_AUTRE:
                            result = result && intervention.dysfonctionnements.okAutre;
                            break;
                        default:
                            result = false;
                    }
                }
            } else {
                result = false;
            }

            return result;
        }

    }

    /* @ngInject */
    function InterventionToBeSync($filter) {
        return interventionToBeSync;

        ////////////////

        /**
         * Filtre les interventions à synchroniser
         * @param {Array} listInterventions
         * @returns {Array} liste d'interventions à synchroniser
         */
        function interventionToBeSync(listInterventions) {
            var modified = $filter('modifiedIntervention')(listInterventions);
            var result = [];

            modified.forEach(function (inter) {
                if (inter.groupmesures && inter.groupmesures.length > 0) {
                    result.push(inter);
                }
            });

            return result;
        }

    }

    /* @ngInject */
    function SuppressDuplicateIntervention(moment, $filter) {
        return suppressDuplicateIntervention;

        ////////////////

        function suppressDuplicateIntervention(listInterventions) {
            var finalListInterventions = [],
                indexOfIntervention,
                tempInter;

            if (listInterventions) {
                listInterventions.forEach(function (inter) {
                    indexOfIntervention = $filter('indexOfIntervention')(finalListInterventions, inter);

                    if (indexOfIntervention === -1) {
                        finalListInterventions.push(inter);
                    } else {
                        tempInter = _findMostUpdate(finalListInterventions[indexOfIntervention], inter);
                        finalListInterventions[indexOfIntervention] = tempInter;
                    }
                });
            }

            return finalListInterventions;
        }

        function _findMostUpdate(inter1, inter2) {
            var dateInter1 = inter1.lastUpdate || inter1.syncDate;
            var dateInter2 = inter2.lastUpdate || inter2.syncDate;

            if (moment(dateInter1).isAfter(dateInter2)) {
                return inter1;
            } else {
                return inter2;
            }
        }
    }

    /* @ngInject */
    function PurgedIntervention(moment, STATUT_HISTORIQUE) {
        return purgedIntervention;

        ////////////////
        function purgedIntervention(listInterventions) {
            var finalListInterventions = [];
            if (listInterventions) {
                listInterventions.forEach(function (inter) {
                    if (_isInterventionOfDay(inter)) {
                        finalListInterventions.push(inter);
                    } else if (!!inter.statut && inter.statut !== STATUT_HISTORIQUE.SYNC) {
                        if (!!inter.groupmesures) {
                            finalListInterventions.push(inter);
                        }
                    }
                });
            }
            return finalListInterventions;
        }

        function _isInterventionOfDay(intervention) {
            return moment(intervention.date).isSame(moment(), 'day');
        }
    }

})();

