(function () {
    'use strict';

    angular
        .module('app.helios.nmihd.diagnosticxdsl')
        .constant('DIAGNOSTIC_ERROR_MESSAGES', {
            notSynchronised: 'Synchronisation KO',
            fluctuationDebitMax: 'Fluctuations du débit max superieur ou égale à 7%',
            margedeBruitEntreConstateETCible: 'Marge de bruit par rapport à la cible inferieur à la marge cible - 1',
            fluctuationMargeDeBruit: 'Fluctuations de la marge de bruit superieur ou égale à 1.5dB',
            SES: 'SES superieur à 0',
            CRCpourPTetPM: 'CRC superieur ou égal à 7',
            CRCpourPCetSRetRE: 'CRC superieur ou égal à 4',
            ecartDebitMax: 'Ecart de débit Max entre PT et PM superieur à 7%',
            ecartMargeDeBruit: 'Ecart de marge de bruit entre PT et PM superieur à 1.5dB',
            up: '(UP)',
            down: '(DOWN)'
        })
        .constant('DIAGNOSTIC_RESULTS', {
            success: 'success',
            danger: 'danger',
            default: 'default'
        })
        .constant('DIAGNOSTIC_VALUES', {
            fluctuationDebitMax: 7,
            fluctuationMargeDeBruit: 1.5,
            SES: 0,
            CRCPTetPM: 7,
            CRCAutres: 4,
            ecartDebitMax: 7,
            ecartMargeDeBruit: 1.5
        });

})();
