/* global toastr:false, moment:false */
(function () {
    'use strict';

    angular
        .module('app.mesure')
        .constant('ETATS_MESURE', {
                // Mesure non démarrée
                MESURE_NON_DEMARRE: 'Mesure non démarrée',
                // le bouton arrêter a été pressé
                MESURE_FINI: 'Mesure fini',
                // le bouton démarré a été pressé mais le bouton arrêter n'a pas encore été pressé
                MESURE_EN_COURS: 'Mesure en cours',
                // la page est consulter pour visualiser le détail d'une mesure passée
                IS_DETAIL: 'Détail d\'une mesure'
            }
        )
        .constant('ETATS_SCRUTATION', {
            // Le terminal de mesure est synchronisé
            SYNCHRONIZED: 'Synchronisé',
            // Le terminal de mesure n'est toujours pas synchronisé (scrutation en cours)
            NOT_YET_SYNCHRONIZED: 'En attente de synchronisation',
            // Le terminal de mesure n'est pas synchronisé et la scrutation est arreté
            NOT_SYNCHRONIZED_TIMEOUT: 'Scrutation arrêté'
        })
        .constant('EVENT_SCRUTATION', {
            STATE: 'event:scrutation:stateUpdated',
            ERROR_MSG: 'event:scrutation:errorMsg',
            LAUNCH: 'event:scrutation:launch'
        });

})();
