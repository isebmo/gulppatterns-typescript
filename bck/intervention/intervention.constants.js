/* global toastr:false, moment:false */
(function () {
    'use strict';

    angular
        .module('app.intervention')
        .constant('STATUT_HISTORIQUE', {
            SYNC: 'Synchronisé',
            LOCAL: 'Tablette',
            PARTIAL: 'Partiellement synchronisé',
            INVALID: 'ND non valide',
            NOT_EXIST_INTER: 'ND “Inconnu dans votre plan de charge”',
            NOT_FOUND: 'ND inexistant',
            DEFAULT: 'Statut inconnu'
        })
        .constant('INTER_DYSFONCTIONNEMENTS', {
            'KO_JAMAIS': 'KO_JAMAIS',
            'KO_DEJA': 'KO_DEJA',
            'OK_AUTRE': 'OK_AUTRE'
        })
        .constant('MODIFICATION_RIGHT', {
            ND: 'ND',
            ANYTHING_EXCEPT_ND: 'ANYTHING_EXCEPT_ND'
        })
        .constant('INTER_HISTORY', 'piditools-helios-interventions')
        .constant('INTERVENTION_EVENT', {
            CURRENT_UPDATED: 'event:intervention:currentUpdated',
            SYNCING: {
                SERVER: {
                    SUCCESS: 'event:intervention:syncing:server:success',
                    ERROR: 'event:intervention:syncing:server:error'
                }
            },
            GETTING: {
                SERVER: {
                    ERROR: 'event:intervention:getting:server:error'
                }
            }
        });

    //.constant('INTER_CURRENT', 'current');
})();
