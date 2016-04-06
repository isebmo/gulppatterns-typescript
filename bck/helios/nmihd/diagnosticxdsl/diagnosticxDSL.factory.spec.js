/* jshint -W117, -W030 */
describe('diagnosticxdsl', function () {
    describe('diagnosticxDSL.factory', function () {

        beforeEach(function () {
            module('app.helios.nmihd.diagnosticxdsl');
            bard.inject(this, 'DiagnosticXDSL','DIAGNOSTIC_RESULTS','$filter','DIAGNOSTIC_ERROR_MESSAGES',
                'DIAGNOSTIC_VALUES', 'mesuresUtilsService', 'interventionCurrentService');
        });

        describe('decision', function () {
            var interventionADSL = {
                "groupmesures": [
                    {
                        "profil": {
                            "code": "0",
                            "libelle": "8dB",
                            "valeur":8,
                            "typeLigne":"ADSL",
                            "description": "offre TV 1/8/18MMax"},
                        "mesures": [
                            {
                                "date": 956516516511,
                                "point": "PT",
                                "condition": "Disjoncteur EDF ON",
                                "decision": "danger",
                                "actions": [
                                    {
                                        "ordre": 1,
                                        "message": "Si devis accepté, réaliser mesure à la PM",
                                        "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                    },
                                    {
                                        "ordre": 2,
                                        "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                        "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                    }
                                ],
                                "mont": {},
                                "desc": {},
                                "duree": 40
                            },
                            {
                                "mont": {
                                    "debReel": 0,
                                    "debAttActu": 1,
                                    "debAttMinMax": {
                                        "min":9500,
                                        "max":8500
                                    },
                                    "margeBruitActu": 15,
                                    "margeBruitMinMax": {
                                        "min":15,
                                        "max":16
                                    },
                                    "SES": 0,
                                    "CRC": 1,
                                    "FEC": 8,
                                    "attenu": 9
                                },
                                "desc": {
                                    "debReel": 0,
                                    "debAttActu": 1,
                                    "debAttMinMax": {
                                        "min":9500,
                                        "max":8500
                                    },
                                    "margeBruitActu": 15,
                                    "margeBruitMinMax": {
                                        "min":15,
                                        "max":16
                                    },
                                    "SES": 0,
                                    "CRC": 1,
                                    "FEC": 8,
                                    "attenu": 9
                                },
                                "point": "PT",
                                "date": 16565165165,
                                "decision": "success",
                                "actions": [
                                    {
                                        "ordre": 3,
                                        "message": "Si devis accepté, réaliser mesure à la PM",
                                        "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                    },
                                    {
                                        "ordre": 2,
                                        "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                        "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                    }
                                ],
                                "duree": 40
                            }
                        ]
                    },
                    {
                        "profil": {
                            "code": "0",
                            "libelle": "8dB",
                            "valeur":8,
                            "typeLigne":"ADSL",
                            "description": "offre TV 1/8/18MMax"},
                        "mesures": [
                            {
                                "mont": {},
                                "desc": {},
                                "condition": "Disjoncteur EDF OFF",
                                "point": "RE",
                                "date": 16565165192,
                                "decision": "danger",
                                "strResultsDiagXDSL": "Il y a encore quelque chose qui ne va pas",
                                "actions": [
                                    {
                                        "ordre": 3,
                                        "message": "Si devis accepté, réaliser mesure à la PM",
                                        "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                    },
                                    {
                                        "ordre": 2,
                                        "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                        "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                    }
                                ],
                                "duree": 40
                            }
                        ]
                    }
                ]
            };
            var interventionVDSL = {
                "groupmesures": [
                    {
                        "profil": {
                            "code": "0",
                            "libelle": "8dB",
                            "valeur":8,
                            "typeLigne":"VDSL",
                            "description": "offre TV 1/8/18MMax"},
                        "mesures": [
                            {
                                "date": 956516516511,
                                "point": "PT",
                                "condition": "Disjoncteur EDF ON",
                                "decision": "danger",
                                "actions": [
                                    {
                                        "ordre": 1,
                                        "message": "Si devis accepté, réaliser mesure à la PM",
                                        "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                    },
                                    {
                                        "ordre": 2,
                                        "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                        "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                    }
                                ],
                                "mont": {},
                                "desc": {},
                                "duree": 40
                            },
                            {
                                "mont": {
                                    "debReel": 0,
                                    "debAttActu": 1,
                                    "debAttMinMax": {
                                        "min":9500,
                                        "max":8500
                                    },
                                    "margeBruitActu": 15,
                                    "margeBruitMinMax": {
                                        "min":15,
                                        "max":16
                                    },
                                    "SES": 0,
                                    "CRC": 1,
                                    "FEC": 8,
                                    "attenu": 9
                                },
                                "desc": {
                                    "debReel": 0,
                                    "debAttActu": 1,
                                    "debAttMinMax": {
                                        "min":9500,
                                        "max":8500
                                    },
                                    "margeBruitActu": 15,
                                    "margeBruitMinMax": {
                                        "min":15,
                                        "max":16
                                    },
                                    "SES": 0,
                                    "CRC": 1,
                                    "FEC": 8,
                                    "attenu": 9
                                },
                                "point": "PT",
                                "date": 16565165165,
                                "decision": "success",
                                "actions": [
                                    {
                                        "ordre": 3,
                                        "message": "Si devis accepté, réaliser mesure à la PM",
                                        "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                    },
                                    {
                                        "ordre": 2,
                                        "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                        "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                    }
                                ],
                                "duree": 40
                            }
                        ]
                    },
                    {
                        "profil": {
                            "code": "0",
                            "libelle": "8dB",
                            "valeur":8,
                            "typeLigne":"VDSL",
                            "description": "offre TV 1/8/18MMax"},
                        "mesures": [
                            {
                                "mont": {},
                                "desc": {},
                                "condition": "Disjoncteur EDF OFF",
                                "point": "RE",
                                "date": 16565165192,
                                "decision": "danger",
                                "strResultsDiagXDSL": "Il y a encore quelque chose qui ne va pas",
                                "actions": [
                                    {
                                        "ordre": 3,
                                        "message": "Si devis accepté, réaliser mesure à la PM",
                                        "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                    },
                                    {
                                        "ordre": 2,
                                        "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                        "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                    }
                                ],
                                "duree": 40
                            }
                        ]
                    }
                ]
            };

            it('est synchonisé', function () {
                var mesure = {
                    "isSynchronized":true,
                    "point": "PT",
                    mont:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 6,
                        "FEC": 8,
                        "attenu": 9
                    },
                    desc:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 6,
                        "FEC": 8,
                        "attenu": 9
                    }
                };
                var diagADSL = new DiagnosticXDSL(mesure, interventionADSL);
                var diagVDSL = new DiagnosticXDSL(mesure, interventionVDSL);
                diagVDSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.success);
                });
                diagADSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.success);
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.success)
                });
            });

            it('n\'est pas synchonisé', function () {
                var mesure = {
                    "isSynchronized":false,
                    "point": "PT",
                    mont:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 6,
                        "FEC": 8,
                        "attenu": 9
                    },
                    desc:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 6,
                        "FEC": 8,
                        "attenu": 9
                    }
                };
                var diagADSL = new DiagnosticXDSL(mesure, interventionADSL);
                var diagVDSL = new DiagnosticXDSL(mesure, interventionVDSL);
                diagADSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.danger);
                    expect(result.strResultsDiagXDSL[0]).to.include(DIAGNOSTIC_ERROR_MESSAGES.notSynchronised);
                });
                diagVDSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.danger);
                    expect(result.strResultsDiagXDSL[0]).to.include(DIAGNOSTIC_ERROR_MESSAGES.notSynchronised);
                });
            });

            it('Fluctuations du débit max inferieur à 7%', function () {
                var mesure = {
                    "isSynchronized":true,
                    "point": "PT",
                    mont:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 6,
                        "FEC": 8,
                        "attenu": 9
                    },
                    desc:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 6,
                        "FEC": 8,
                        "attenu": 9
                    }
                };
                var diagADSL = new DiagnosticXDSL(mesure, interventionADSL);
                var diagVDSL = new DiagnosticXDSL(mesure, interventionVDSL);
                diagADSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.success);
                });
                diagVDSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.success);
                });
            });

            it('Fluctuations du débit max n\'est pas inferieur à 7%', function () {
                var mesure = {
                    "isSynchronized":true,
                    "point": "PT",
                    mont:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":5000,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 6,
                        "FEC": 8,
                        "attenu": 9
                    },
                    desc:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":5000,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 6,
                        "FEC": 8,
                        "attenu": 9
                    }
                };
                var diagADSL = new DiagnosticXDSL(mesure, interventionADSL);
                var diagVDSL = new DiagnosticXDSL(mesure, interventionVDSL);
                diagADSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.danger);
                    expect(result.strResultsDiagXDSL[0]).to.include(DIAGNOSTIC_ERROR_MESSAGES.fluctuationDebitMax);
                });
                diagVDSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.danger);
                    expect(result.strResultsDiagXDSL[0]).to.include(DIAGNOSTIC_ERROR_MESSAGES.fluctuationDebitMax);
                });
            });

            it('Marge de bruit inferieur à la marge cible - 1', function () {
                var mesure = {
                    "isSynchronized":true,
                    "point": "PT",
                    mont:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 7,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 6,
                        "FEC": 8,
                        "attenu": 9
                    },
                    desc:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 7,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 6,
                        "FEC": 8,
                        "attenu": 9
                    }
                };
                var diagADSL = new DiagnosticXDSL(mesure, interventionADSL);
                var diagVDSL = new DiagnosticXDSL(mesure, interventionVDSL);
                diagADSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.success);
                });
                diagVDSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.success);
                });
            });

            it('Marge de bruit n\'est pas inferieur à la marge cible - 1', function () {
                var mesure = {
                    "isSynchronized":true,
                    "point": "PT",
                    mont:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9800,
                            "max":10000
                        },
                        "margeBruitActu": 5,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 6,
                        "FEC": 8,
                        "attenu": 9
                    },
                    desc:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9800,
                            "max":10000
                        },
                        "margeBruitActu": 5,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 6,
                        "FEC": 8,
                        "attenu": 9
                    }
                };
                var diagADSL = new DiagnosticXDSL(mesure, interventionADSL);
                var diagVDSL = new DiagnosticXDSL(mesure, interventionVDSL);
                diagADSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.danger);
                    expect(result.strResultsDiagXDSL[0]).to.include(DIAGNOSTIC_ERROR_MESSAGES.margedeBruitEntreConstateETCible);
                });
                diagVDSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.danger);
                    expect(result.strResultsDiagXDSL[0]).to.include(DIAGNOSTIC_ERROR_MESSAGES.margedeBruitEntreConstateETCible);
                });
            });

            it('Fluctuations de la marge de bruit inferieur à 1,5db', function () {
                var mesure = {
                    "isSynchronized":true,
                    "point": "PT",
                    mont:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 6,
                        "FEC": 8,
                        "attenu": 9
                    },
                    desc:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 6,
                        "FEC": 8,
                        "attenu": 9
                    }
                };
                var diagADSL = new DiagnosticXDSL(mesure, interventionADSL);
                var diagVDSL = new DiagnosticXDSL(mesure, interventionVDSL);
                diagADSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.success);
                });
                diagVDSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.success);
                });
            });

            it('Fluctuations de la marge de bruit n\'est pas inferieur à 1,5db', function () {
                var mesure = {
                    "isSynchronized":true,
                    "point": "PT",
                    mont:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":17
                        },
                        "SES": 0,
                        "CRC": 6,
                        "FEC": 8,
                        "attenu": 9
                    },
                    desc:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":17
                        },
                        "SES": 0,
                        "CRC": 6,
                        "FEC": 8,
                        "attenu": 9
                    }
                };
                var diagADSL = new DiagnosticXDSL(mesure, interventionADSL);
                var diagVDSL = new DiagnosticXDSL(mesure, interventionVDSL);
                diagADSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.danger);
                    expect(result.strResultsDiagXDSL[0]).to.include(DIAGNOSTIC_ERROR_MESSAGES.fluctuationMargeDeBruit);
                });
                diagVDSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.danger);
                    expect(result.strResultsDiagXDSL[0]).to.include(DIAGNOSTIC_ERROR_MESSAGES.fluctuationMargeDeBruit);
                });
            });

            it('SES égal à 0', function () {
                var mesure = {
                    "isSynchronized":true,
                    "point": "PT",
                    mont:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 6,
                        "FEC": 8,
                        "attenu": 9
                    },
                    desc:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 6,
                        "FEC": 8,
                        "attenu": 9
                    }
                };
                var diagADSL = new DiagnosticXDSL(mesure, interventionADSL);
                var diagVDSL = new DiagnosticXDSL(mesure, interventionVDSL);
                diagADSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.success);
                });
                diagVDSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.success);
                });
            });

            it('SES n\'est pas égal à 0', function () {
                var mesure = {
                    "isSynchronized":true,
                    "point": "PT",
                    mont:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":17
                        },
                        "SES": 2,
                        "CRC": 6,
                        "FEC": 8,
                        "attenu": 9
                    },
                    desc:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":17
                        },
                        "SES": 2,
                        "CRC": 6,
                        "FEC": 8,
                        "attenu": 9
                    }
                };
                var diagADSL = new DiagnosticXDSL(mesure, interventionADSL);
                var diagVDSL = new DiagnosticXDSL(mesure, interventionVDSL);
                diagADSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.danger);
                    expect(result.strResultsDiagXDSL[1]).to.include(DIAGNOSTIC_ERROR_MESSAGES.SES);
                });
                diagADSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.danger);
                    expect(result.strResultsDiagXDSL[1]).to.include(DIAGNOSTIC_ERROR_MESSAGES.SES);
                });
            });

            it('CRC PT inferieur à 7', function () {
                var mesure = {
                    "isSynchronized":true,
                    "point": "PT",
                    mont:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 6,
                        "FEC": 8,
                        "attenu": 9
                    },
                    desc:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 6,
                        "FEC": 8,
                        "attenu": 9
                    }
                };
                var diagADSL = new DiagnosticXDSL(mesure, interventionADSL);
                var diagVDSL = new DiagnosticXDSL(mesure, interventionVDSL);
                diagADSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.success);
                });
                diagVDSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.success);
                });
            });

            it('CRC PT n\'est pas inferieur à 7', function () {
                var mesure = {
                    "isSynchronized":true,
                    "point": "PT",
                    mont:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":17
                        },
                        "SES": 2,
                        "CRC": 7,
                        "FEC": 8,
                        "attenu": 9
                    },
                    desc:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":17
                        },
                        "SES": 2,
                        "CRC": 7,
                        "FEC": 8,
                        "attenu": 9
                    }
                };
                var diagADSL = new DiagnosticXDSL(mesure, interventionADSL);
                var diagVDSL = new DiagnosticXDSL(mesure, interventionVDSL);
                diagADSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.danger);
                    expect(result.strResultsDiagXDSL[2]).to.include(DIAGNOSTIC_ERROR_MESSAGES.CRCpourPTetPM);
                });
                diagVDSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.danger);
                    expect(result.strResultsDiagXDSL[2]).to.include(DIAGNOSTIC_ERROR_MESSAGES.CRCpourPTetPM);
                });
            });

            it('CRC PM inferieur à 7', function () {
                var mesure = {
                    "isSynchronized":true,
                    "point": "PM",
                    mont:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":9500
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 2,
                        "FEC": 8,
                        "attenu": 9
                    },
                    desc:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":9500
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 2,
                        "FEC": 8,
                        "attenu": 9
                    }
                };
                var intervADSL = {
                    "groupmesures": [
                        {
                            "profil": {
                                "code": "0",
                                "libelle": "8dB",
                                "valeur":8,
                                "typeLigne":"ADSL",
                                "description": "offre TV 1/8/18MMax"},
                            "mesures": [
                                {
                                    "date": 956516516511,
                                    "point": "PT",
                                    "condition": "Disjoncteur EDF ON",
                                    "decision": "danger",
                                    "actions": [
                                        {
                                            "ordre": 1,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "mont": {},
                                    "desc": {},
                                    "duree": 40
                                },
                                {
                                    "mont": {
                                        "debReel": 0,
                                        "debAttActu": 1,
                                        "debAttMinMax": {
                                            "min":9500,
                                            "max":9500
                                        },
                                        "margeBruitActu": 15,
                                        "margeBruitMinMax": {
                                            "min":15,
                                            "max":16
                                        },
                                        "SES": 0,
                                        "CRC": 1,
                                        "FEC": 8,
                                        "attenu": 9
                                    },
                                    "desc": {
                                        "debReel": 0,
                                        "debAttActu": 1,
                                        "debAttMinMax": {
                                            "min":9500,
                                            "max":9500
                                        },
                                        "margeBruitActu": 15,
                                        "margeBruitMinMax": {
                                            "min":15,
                                            "max":16
                                        },
                                        "SES": 0,
                                        "CRC": 1,
                                        "FEC": 8,
                                        "attenu": 9
                                    },
                                    "point": "PT",
                                    "date": 16565165165,
                                    "decision": "success",
                                    "actions": [
                                        {
                                            "ordre": 3,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "duree": 40
                                }
                            ]
                        },
                        {
                            "profil": {
                                "code": "0",
                                "libelle": "8dB",
                                "valeur":8,
                                "typeLigne":"ADSL",
                                "description": "offre TV 1/8/18MMax"},
                            "mesures": [
                                {
                                    "mont": {},
                                    "desc": {},
                                    "condition": "Disjoncteur EDF OFF",
                                    "point": "RE",
                                    "date": 16565165192,
                                    "decision": "danger",
                                    "strResultsDiagXDSL": "Il y a encore quelque chose qui ne va pas",
                                    "actions": [
                                        {
                                            "ordre": 3,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "duree": 40
                                }
                            ]
                        }
                    ]
                };
                var intervVDSL = {
                    "groupmesures": [
                        {
                            "profil": {
                                "code": "0",
                                "libelle": "8dB",
                                "valeur":8,
                                "typeLigne":"VDSL",
                                "description": "offre TV 1/8/18MMax"},
                            "mesures": [
                                {
                                    "date": 956516516511,
                                    "point": "PT",
                                    "condition": "Disjoncteur EDF ON",
                                    "decision": "danger",
                                    "actions": [
                                        {
                                            "ordre": 1,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "mont": {},
                                    "desc": {},
                                    "duree": 40
                                },
                                {
                                    "mont": {
                                        "debReel": 0,
                                        "debAttActu": 1,
                                        "debAttMinMax": {
                                            "min":9500,
                                            "max":9500
                                        },
                                        "margeBruitActu": 15,
                                        "margeBruitMinMax": {
                                            "min":15,
                                            "max":16
                                        },
                                        "SES": 0,
                                        "CRC": 1,
                                        "FEC": 8,
                                        "attenu": 9
                                    },
                                    "desc": {
                                        "debReel": 0,
                                        "debAttActu": 1,
                                        "debAttMinMax": {
                                            "min":9500,
                                            "max":9500
                                        },
                                        "margeBruitActu": 15,
                                        "margeBruitMinMax": {
                                            "min":15,
                                            "max":16
                                        },
                                        "SES": 0,
                                        "CRC": 1,
                                        "FEC": 8,
                                        "attenu": 9
                                    },
                                    "point": "PT",
                                    "date": 16565165165,
                                    "decision": "success",
                                    "actions": [
                                        {
                                            "ordre": 3,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "duree": 40
                                }
                            ]
                        },
                        {
                            "profil": {
                                "code": "0",
                                "libelle": "8dB",
                                "valeur":8,
                                "typeLigne":"VDSL",
                                "description": "offre TV 1/8/18MMax"},
                            "mesures": [
                                {
                                    "mont": {},
                                    "desc": {},
                                    "condition": "Disjoncteur EDF OFF",
                                    "point": "RE",
                                    "date": 16565165192,
                                    "decision": "danger",
                                    "strResultsDiagXDSL": "Il y a encore quelque chose qui ne va pas",
                                    "actions": [
                                        {
                                            "ordre": 3,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "duree": 40
                                }
                            ]
                        }
                    ]
                };
                var diagADSL = new DiagnosticXDSL(mesure, intervADSL);
                var diagVDSL = new DiagnosticXDSL(mesure, intervVDSL);
                diagADSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.success);
                });
                diagVDSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.success);
                });
            });

            it('CRC PM n\'est pas inferieur à 7', function () {
                var mesure = {
                    "isSynchronized":true,
                    "point": "PM",
                    mont:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 12,
                        "FEC": 8,
                        "attenu": 9
                    },
                    desc:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 12,
                        "FEC": 8,
                        "attenu": 9
                    }
                };
                var diagADSL = new DiagnosticXDSL(mesure, interventionADSL);
                var diagVDSL = new DiagnosticXDSL(mesure, interventionVDSL);
                diagADSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.danger);
                    expect(result.strResultsDiagXDSL[0]).to.include(DIAGNOSTIC_ERROR_MESSAGES.CRCpourPTetPM);
                });
                diagVDSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.danger);
                    expect(result.strResultsDiagXDSL[0]).to.include(DIAGNOSTIC_ERROR_MESSAGES.CRCpourPTetPM);
                });
            });

            it('CRC PC inferieur à 4', function () {
                var mesure = {
                    "isSynchronized":true,
                    "point": "PC",
                    mont:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 2,
                        "FEC": 8,
                        "attenu": 9
                    },
                    desc:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 2,
                        "FEC": 8,
                        "attenu": 9
                    }
                };
                var diagADSL = new DiagnosticXDSL(mesure, interventionADSL);
                var diagVDSL = new DiagnosticXDSL(mesure, interventionVDSL);
                diagADSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.success);
                });
                diagVDSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.success);
                });
            });

            it('CRC PC n\'est pas inferieur à 4', function () {
                var mesure = {
                    "isSynchronized":true,
                    "point": "PC",
                    mont:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 6,
                        "FEC": 8,
                        "attenu": 9
                    },
                    desc:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 6,
                        "FEC": 8,
                        "attenu": 9
                    }
                };
                var diagADSL = new DiagnosticXDSL(mesure, interventionADSL);
                var diagVDSL = new DiagnosticXDSL(mesure, interventionVDSL);
                diagADSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.danger);
                    expect(result.strResultsDiagXDSL[0]).to.include(DIAGNOSTIC_ERROR_MESSAGES.CRCpourPCetSRetRE);
                });
                diagVDSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.danger);
                    expect(result.strResultsDiagXDSL[0]).to.include(DIAGNOSTIC_ERROR_MESSAGES.CRCpourPCetSRetRE);
                });
            });

            it('CRC SR inferieur à 4', function () {
                var mesure = {
                    "isSynchronized":true,
                    "point": "SR",
                    mont:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 2,
                        "FEC": 8,
                        "attenu": 9
                    },
                    desc:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 2,
                        "FEC": 8,
                        "attenu": 9
                    }
                };
                var diagADSL = new DiagnosticXDSL(mesure, interventionADSL);
                var diagVDSL = new DiagnosticXDSL(mesure, interventionVDSL);
                diagADSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.success);
                });
                diagVDSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.success);
                });
            });

            it('CRC SR n\'est pas inferieur à 4', function () {
                var mesure = {
                    "isSynchronized":true,
                    "point": "PC",
                    mont:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 8,
                        "FEC": 8,
                        "attenu": 9
                    },
                    desc:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 8,
                        "FEC": 8,
                        "attenu": 9
                    }
                };
                var diagADSL = new DiagnosticXDSL(mesure, interventionADSL);
                var diagVDSL = new DiagnosticXDSL(mesure, interventionVDSL);
                diagADSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.danger);
                    expect(result.strResultsDiagXDSL[0]).to.include(DIAGNOSTIC_ERROR_MESSAGES.CRCpourPCetSRetRE);
                });
                diagVDSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.danger);
                    expect(result.strResultsDiagXDSL[0]).to.include(DIAGNOSTIC_ERROR_MESSAGES.CRCpourPCetSRetRE);
                });
            });

            it('CRC RE inferieur à 4', function () {
                var mesure = {
                    "isSynchronized":true,
                    "point": "RE",
                    mont:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 1,
                        "FEC": 8,
                        "attenu": 9
                    },
                    desc:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 1,
                        "FEC": 8,
                        "attenu": 9
                    }
                };
                var diagADSL = new DiagnosticXDSL(mesure, interventionADSL);
                var diagVDSL = new DiagnosticXDSL(mesure, interventionVDSL);
                diagADSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.success);
                });
                diagVDSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.success);
                });
            });

            it('CRC RE n\'est pas inferieur à 4', function () {
                var mesure = {
                    "isSynchronized":true,
                    "point": "RE",
                    mont:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 4,
                        "FEC": 8,
                        "attenu": 9
                    },
                    desc:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 4,
                        "FEC": 8,
                        "attenu": 9
                    }
                };
                var diagADSL = new DiagnosticXDSL(mesure, interventionADSL);
                var diagVDSL = new DiagnosticXDSL(mesure, interventionVDSL);
                diagADSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.danger);
                    expect(result.strResultsDiagXDSL[0]).to.include(DIAGNOSTIC_ERROR_MESSAGES.CRCpourPCetSRetRE);
                });
                diagVDSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.danger);
                    expect(result.strResultsDiagXDSL[0]).to.include(DIAGNOSTIC_ERROR_MESSAGES.CRCpourPCetSRetRE);
                });
            });

            it('PM avec PT inexistante et critères communs rouges', function () {
                var intervADSL = {
                    "groupmesures": [
                        {
                            "profil": {
                                "code": "0",
                                "libelle": "8dB",
                                "valeur":8,
                                "typeLigne":"ADSL",
                                "description": "offre TV 1/8/18MMax"},
                            "mesures": [
                                {
                                    "date": 956516516511,
                                    "point": "RE",
                                    "condition": "Disjoncteur EDF ON",
                                    "decision": "danger",
                                    "actions": [
                                        {
                                            "ordre": 1,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "mont": {},
                                    "desc": {},
                                    "duree": 40
                                },
                                {
                                    "mont": {
                                        "debReel": 0,
                                        "debAttActu": 1,
                                        "debAttMinMax": {
                                            "min":9500,
                                            "max":10000
                                        },
                                        "margeBruitActu": 15,
                                        "margeBruitMinMax": {
                                            "min":15,
                                            "max":16
                                        },
                                        "SES": 0,
                                        "CRC": 1,
                                        "FEC": 8,
                                        "attenu": 9
                                    },
                                    "desc": {
                                        "debReel": 0,
                                        "debAttActu": 1,
                                        "debAttMinMax": {
                                            "min":9500,
                                            "max":10000
                                        },
                                        "margeBruitActu": 15,
                                        "margeBruitMinMax": {
                                            "min":15,
                                            "max":16
                                        },
                                        "SES": 0,
                                        "CRC": 1,
                                        "FEC": 8,
                                        "attenu": 9
                                    },
                                    "point": "PC",
                                    "date": 16565165165,
                                    "decision": "success",
                                    "actions": [
                                        {
                                            "ordre": 3,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "duree": 40
                                }
                            ]
                        },
                        {
                            "profil": {
                                "code": "0",
                                "libelle": "8dB",
                                "valeur":8,
                                "typeLigne":"ADSL",
                                "description": "offre TV 1/8/18MMax"},
                            "mesures": [
                                {
                                    "mont": {},
                                    "desc": {},
                                    "condition": "Disjoncteur EDF OFF",
                                    "point": "SR",
                                    "date": 16565165192,
                                    "decision": "danger",
                                    "strResultsDiagXDSL": "Il y a encore quelque chose qui ne va pas",
                                    "actions": [
                                        {
                                            "ordre": 3,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "duree": 40
                                }
                            ]
                        }
                    ]
                };
                var intervVDSL = {
                    "groupmesures": [
                        {
                            "profil": {
                                "code": "0",
                                "libelle": "8dB",
                                "valeur":8,
                                "typeLigne":"VDSL",
                                "description": "offre TV 1/8/18MMax"},
                            "mesures": [
                                {
                                    "date": 956516516511,
                                    "point": "RE",
                                    "condition": "Disjoncteur EDF ON",
                                    "decision": "danger",
                                    "actions": [
                                        {
                                            "ordre": 1,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "mont": {},
                                    "desc": {},
                                    "duree": 40
                                },
                                {
                                    "mont": {
                                        "debReel": 0,
                                        "debAttActu": 1,
                                        "debAttMinMax": {
                                            "min":9500,
                                            "max":10000
                                        },
                                        "margeBruitActu": 15,
                                        "margeBruitMinMax": {
                                            "min":15,
                                            "max":16
                                        },
                                        "SES": 0,
                                        "CRC": 1,
                                        "FEC": 8,
                                        "attenu": 9
                                    },
                                    "desc": {
                                        "debReel": 0,
                                        "debAttActu": 1,
                                        "debAttMinMax": {
                                            "min":9500,
                                            "max":10000
                                        },
                                        "margeBruitActu": 15,
                                        "margeBruitMinMax": {
                                            "min":15,
                                            "max":16
                                        },
                                        "SES": 0,
                                        "CRC": 1,
                                        "FEC": 8,
                                        "attenu": 9
                                    },
                                    "point": "PC",
                                    "date": 16565165165,
                                    "decision": "success",
                                    "actions": [
                                        {
                                            "ordre": 3,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "duree": 40
                                }
                            ]
                        },
                        {
                            "profil": {
                                "code": "0",
                                "libelle": "8dB",
                                "valeur":8,
                                "typeLigne":"VDSL",
                                "description": "offre TV 1/8/18MMax"},
                            "mesures": [
                                {
                                    "mont": {},
                                    "desc": {},
                                    "condition": "Disjoncteur EDF OFF",
                                    "point": "SR",
                                    "date": 16565165192,
                                    "decision": "danger",
                                    "strResultsDiagXDSL": "Il y a encore quelque chose qui ne va pas",
                                    "actions": [
                                        {
                                            "ordre": 3,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "duree": 40
                                }
                            ]
                        }
                    ]
                };
                var mesure = {
                    "isSynchronized":false,
                    "point": "PM",
                    mont:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 2,
                        "FEC": 8,
                        "attenu": 9
                    },
                    desc:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 2,
                        "FEC": 8,
                        "attenu": 9
                    }
                };
                var diagADSL = new DiagnosticXDSL(mesure, intervADSL);
                var diagVDSL = new DiagnosticXDSL(mesure, intervVDSL);
                diagADSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.danger);
                });
                diagVDSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.danger);
                });
            });

            it('PM avec PT inexistante et critères communs verts (Bonhomme gris)', function () {
                var mesure = {
                    "isSynchronized":true,
                    "point": "PM",
                    mont:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 2,
                        "FEC": 8,
                        "attenu": 9
                    },
                    desc:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 2,
                        "FEC": 8,
                        "attenu": 9
                    }
                };
                var intervVDSL = {
                    "groupmesures": [
                        {
                            "profil": {
                                "code": "0",
                                "libelle": "8dB",
                                "valeur":8,
                                "typeLigne":"VDSL",
                                "description": "offre TV 1/8/18MMax"},
                            "mesures": [
                                {
                                    "date": 956516516511,
                                    "point": "RE",
                                    "condition": "Disjoncteur EDF ON",
                                    "decision": "danger",
                                    "actions": [
                                        {
                                            "ordre": 1,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "mont": {},
                                    "desc": {},
                                    "duree": 40
                                },
                                {
                                    "mont": {
                                        "debReel": 0,
                                        "debAttActu": 1,
                                        "debAttMinMax": {
                                            "min":9500,
                                            "max":10000
                                        },
                                        "margeBruitActu": 15,
                                        "margeBruitMinMax": {
                                            "min":15,
                                            "max":16
                                        },
                                        "SES": 0,
                                        "CRC": 1,
                                        "FEC": 8,
                                        "attenu": 9
                                    },
                                    "desc": {
                                        "debReel": 0,
                                        "debAttActu": 1,
                                        "debAttMinMax": {
                                            "min":9500,
                                            "max":10000
                                        },
                                        "margeBruitActu": 15,
                                        "margeBruitMinMax": {
                                            "min":15,
                                            "max":16
                                        },
                                        "SES": 0,
                                        "CRC": 1,
                                        "FEC": 8,
                                        "attenu": 9
                                    },
                                    "point": "PC",
                                    "date": 16565165165,
                                    "decision": "success",
                                    "actions": [
                                        {
                                            "ordre": 3,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "duree": 40
                                }
                            ]
                        },
                        {
                            "profil": {
                                "code": "0",
                                "libelle": "8dB",
                                "valeur":8,
                                "typeLigne":"VDSL",
                                "description": "offre TV 1/8/18MMax"},
                            "mesures": [
                                {
                                    "mont": {},
                                    "desc": {},
                                    "condition": "Disjoncteur EDF OFF",
                                    "point": "SR",
                                    "date": 16565165192,
                                    "decision": "danger",
                                    "strResultsDiagXDSL": "Il y a encore quelque chose qui ne va pas",
                                    "actions": [
                                        {
                                            "ordre": 3,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "duree": 40
                                }
                            ]
                        }
                    ]
                };
                var intervADSL = {
                    "groupmesures": [
                        {
                            "profil": {
                                "code": "0",
                                "libelle": "8dB",
                                "valeur":8,
                                "typeLigne":"ADSL",
                                "description": "offre TV 1/8/18MMax"},
                            "mesures": [
                                {
                                    "date": 956516516511,
                                    "point": "RE",
                                    "condition": "Disjoncteur EDF ON",
                                    "decision": "danger",
                                    "actions": [
                                        {
                                            "ordre": 1,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "mont": {},
                                    "desc": {},
                                    "duree": 40
                                },
                                {
                                    "mont": {
                                        "debReel": 0,
                                        "debAttActu": 1,
                                        "debAttMinMax": {
                                            "min":9500,
                                            "max":10000
                                        },
                                        "margeBruitActu": 15,
                                        "margeBruitMinMax": {
                                            "min":15,
                                            "max":16
                                        },
                                        "SES": 0,
                                        "CRC": 1,
                                        "FEC": 8,
                                        "attenu": 9
                                    },
                                    "desc": {
                                        "debReel": 0,
                                        "debAttActu": 1,
                                        "debAttMinMax": {
                                            "min":9500,
                                            "max":10000
                                        },
                                        "margeBruitActu": 15,
                                        "margeBruitMinMax": {
                                            "min":15,
                                            "max":16
                                        },
                                        "SES": 0,
                                        "CRC": 1,
                                        "FEC": 8,
                                        "attenu": 9
                                    },
                                    "point": "PC",
                                    "date": 16565165165,
                                    "decision": "success",
                                    "actions": [
                                        {
                                            "ordre": 3,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "duree": 40
                                }
                            ]
                        },
                        {
                            "profil": {
                                "code": "0",
                                "libelle": "8dB",
                                "valeur":8,
                                "typeLigne":"ADSL",
                                "description": "offre TV 1/8/18MMax"},
                            "mesures": [
                                {
                                    "mont": {},
                                    "desc": {},
                                    "condition": "Disjoncteur EDF OFF",
                                    "point": "SR",
                                    "date": 16565165192,
                                    "decision": "danger",
                                    "strResultsDiagXDSL": "Il y a encore quelque chose qui ne va pas",
                                    "actions": [
                                        {
                                            "ordre": 3,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "duree": 40
                                }
                            ]
                        }
                    ]
                };
                var diagADSL = new DiagnosticXDSL(mesure, intervADSL);
                var diagVDSL = new DiagnosticXDSL(mesure, intervVDSL);
                diagADSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.default);
                });
                diagVDSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.default);
                });
            });

            it('PM avec PT existante et Ecart de débit max inferieur à 7%', function () {
                var mesure = {
                    "isSynchronized":true,
                    "point": "PM",
                    mont:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 2,
                        "FEC": 8,
                        "attenu": 9
                    },
                    desc:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 2,
                        "FEC": 8,
                        "attenu": 9
                    }
                };
                var intervADSL = {
                    "groupmesures": [
                        {
                            "profil": {
                                "code": "0",
                                "libelle": "8dB",
                                "valeur":8,
                                "typeLigne":"ADSL",
                                "description": "offre TV 1/8/18MMax"},
                            "mesures": [
                                {
                                    "date": 956516516511,
                                    "point": "PT",
                                    "condition": "Disjoncteur EDF ON",
                                    "decision": "danger",
                                    "actions": [
                                        {
                                            "ordre": 1,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "mont": {},
                                    "desc": {},
                                    "duree": 40
                                },
                                {
                                    "mont": {
                                        "debReel": 0,
                                        "debAttActu": 1,
                                        "debAttMinMax": {
                                            "min":9500,
                                            "max":9500
                                        },
                                        "margeBruitActu": 15,
                                        "margeBruitMinMax": {
                                            "min":15,
                                            "max":16
                                        },
                                        "SES": 0,
                                        "CRC": 1,
                                        "FEC": 8,
                                        "attenu": 9
                                    },
                                    "desc": {
                                        "debReel": 0,
                                        "debAttActu": 1,
                                        "debAttMinMax": {
                                            "min":9500,
                                            "max":9500
                                        },
                                        "margeBruitActu": 15,
                                        "margeBruitMinMax": {
                                            "min":15,
                                            "max":16
                                        },
                                        "SES": 0,
                                        "CRC": 1,
                                        "FEC": 8,
                                        "attenu": 9
                                    },
                                    "point": "PT",
                                    "date": 16565165165,
                                    "decision": "success",
                                    "actions": [
                                        {
                                            "ordre": 3,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "duree": 40
                                }
                            ]
                        },
                        {
                            "profil": {
                                "code": "0",
                                "libelle": "8dB",
                                "valeur":8,
                                "typeLigne":"ADSL",
                                "description": "offre TV 1/8/18MMax"},
                            "mesures": [
                                {
                                    "mont": {},
                                    "desc": {},
                                    "condition": "Disjoncteur EDF OFF",
                                    "point": "RE",
                                    "date": 16565165192,
                                    "decision": "danger",
                                    "strResultsDiagXDSL": "Il y a encore quelque chose qui ne va pas",
                                    "actions": [
                                        {
                                            "ordre": 3,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "duree": 40
                                }
                            ]
                        }
                    ]
                };
                var intervVDSL = {
                    "groupmesures": [
                        {
                            "profil": {
                                "code": "0",
                                "libelle": "8dB",
                                "valeur":8,
                                "typeLigne":"VDSL",
                                "description": "offre TV 1/8/18MMax"},
                            "mesures": [
                                {
                                    "date": 956516516511,
                                    "point": "PT",
                                    "condition": "Disjoncteur EDF ON",
                                    "decision": "danger",
                                    "actions": [
                                        {
                                            "ordre": 1,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "mont": {},
                                    "desc": {},
                                    "duree": 40
                                },
                                {
                                    "mont": {
                                        "debReel": 0,
                                        "debAttActu": 1,
                                        "debAttMinMax": {
                                            "min":9500,
                                            "max":9500
                                        },
                                        "margeBruitActu": 15,
                                        "margeBruitMinMax": {
                                            "min":15,
                                            "max":16
                                        },
                                        "SES": 0,
                                        "CRC": 1,
                                        "FEC": 8,
                                        "attenu": 9
                                    },
                                    "desc": {
                                        "debReel": 0,
                                        "debAttActu": 1,
                                        "debAttMinMax": {
                                            "min":9500,
                                            "max":9500
                                        },
                                        "margeBruitActu": 15,
                                        "margeBruitMinMax": {
                                            "min":15,
                                            "max":16
                                        },
                                        "SES": 0,
                                        "CRC": 1,
                                        "FEC": 8,
                                        "attenu": 9
                                    },
                                    "point": "PT",
                                    "date": 16565165165,
                                    "decision": "success",
                                    "actions": [
                                        {
                                            "ordre": 3,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "duree": 40
                                }
                            ]
                        },
                        {
                            "profil": {
                                "code": "0",
                                "libelle": "8dB",
                                "valeur":8,
                                "typeLigne":"VDSL",
                                "description": "offre TV 1/8/18MMax"},
                            "mesures": [
                                {
                                    "mont": {},
                                    "desc": {},
                                    "condition": "Disjoncteur EDF OFF",
                                    "point": "RE",
                                    "date": 16565165192,
                                    "decision": "danger",
                                    "strResultsDiagXDSL": "Il y a encore quelque chose qui ne va pas",
                                    "actions": [
                                        {
                                            "ordre": 3,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "duree": 40
                                }
                            ]
                        }
                    ]
                };
                var diagADSL = new DiagnosticXDSL(mesure, intervADSL);
                var diagVDSL = new DiagnosticXDSL(mesure, intervVDSL);
                diagADSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.success);
                });
                diagVDSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.success);
                });
            });

            it('PM avec PT existante et Ecart de débit max n\'est pas inferieur à 7%', function () {
                var mesure = {
                    "isSynchronized":true,
                    "point": "PM",
                    mont:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":9500
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":14
                        },
                        "SES": 0,
                        "CRC": 2,
                        "FEC": 8,
                        "attenu": 9
                    },
                    desc:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":9500
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":14
                        },
                        "SES": 0,
                        "CRC": 2,
                        "FEC": 8,
                        "attenu": 9
                    }
                };
                var intervADSL = {
                    "groupmesures": [
                        {
                            "profil": {
                                "code": "0",
                                "libelle": "8dB",
                                "valeur":8,
                                "typeLigne":"ADSL",
                                "description": "offre TV 1/8/18MMax"},
                            "mesures": [
                                {
                                    "date": 956516516511,
                                    "point": "PT",
                                    "condition": "Disjoncteur EDF ON",
                                    "decision": "danger",
                                    "actions": [
                                        {
                                            "ordre": 1,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "mont": {},
                                    "desc": {},
                                    "duree": 40
                                },
                                {
                                    "mont": {
                                        "debReel": 0,
                                        "debAttActu": 1,
                                        "debAttMinMax": {
                                            "min":9500,
                                            "max":8000
                                        },
                                        "margeBruitActu": 15,
                                        "margeBruitMinMax": {
                                            "min":15,
                                            "max":25
                                        },
                                        "SES": 0,
                                        "CRC": 1,
                                        "FEC": 8,
                                        "attenu": 9
                                    },
                                    "desc": {
                                        "debReel": 0,
                                        "debAttActu": 1,
                                        "debAttMinMax": {
                                            "min":9500,
                                            "max":8000
                                        },
                                        "margeBruitActu": 15,
                                        "margeBruitMinMax": {
                                            "min":15,
                                            "max":25
                                        },
                                        "SES": 0,
                                        "CRC": 1,
                                        "FEC": 8,
                                        "attenu": 9
                                    },
                                    "point": "PT",
                                    "date": 16565165165,
                                    "decision": "success",
                                    "actions": [
                                        {
                                            "ordre": 3,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "duree": 40
                                }
                            ]
                        },
                        {
                            "profil": {
                                "code": "0",
                                "libelle": "8dB",
                                "valeur":8,
                                "typeLigne":"ADSL",
                                "description": "offre TV 1/8/18MMax"},
                            "mesures": [
                                {
                                    "mont": {},
                                    "desc": {},
                                    "condition": "Disjoncteur EDF OFF",
                                    "point": "RE",
                                    "date": 16565165192,
                                    "decision": "danger",
                                    "strResultsDiagXDSL": "Il y a encore quelque chose qui ne va pas",
                                    "actions": [
                                        {
                                            "ordre": 3,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "duree": 40
                                }
                            ]
                        }
                    ]
                };
                var intervVDSL = {
                    "groupmesures": [
                        {
                            "profil": {
                                "code": "0",
                                "libelle": "8dB",
                                "valeur":8,
                                "typeLigne":"VDSL",
                                "description": "offre TV 1/8/18MMax"},
                            "mesures": [
                                {
                                    "date": 956516516511,
                                    "point": "PT",
                                    "condition": "Disjoncteur EDF ON",
                                    "decision": "danger",
                                    "actions": [
                                        {
                                            "ordre": 1,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "mont": {},
                                    "desc": {},
                                    "duree": 40
                                },
                                {
                                    "mont": {
                                        "debReel": 0,
                                        "debAttActu": 1,
                                        "debAttMinMax": {
                                            "min":9500,
                                            "max":8000
                                        },
                                        "margeBruitActu": 15,
                                        "margeBruitMinMax": {
                                            "min":15,
                                            "max":16
                                        },
                                        "SES": 0,
                                        "CRC": 1,
                                        "FEC": 8,
                                        "attenu": 9
                                    },
                                    "desc": {
                                        "debReel": 0,
                                        "debAttActu": 1,
                                        "debAttMinMax": {
                                            "min":9500,
                                            "max":8000
                                        },
                                        "margeBruitActu": 15,
                                        "margeBruitMinMax": {
                                            "min":15,
                                            "max":16
                                        },
                                        "SES": 0,
                                        "CRC": 1,
                                        "FEC": 8,
                                        "attenu": 9
                                    },
                                    "point": "PT",
                                    "date": 16565165165,
                                    "decision": "success",
                                    "actions": [
                                        {
                                            "ordre": 3,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "duree": 40
                                }
                            ]
                        },
                        {
                            "profil": {
                                "code": "0",
                                "libelle": "8dB",
                                "valeur":8,
                                "typeLigne":"VDSL",
                                "description": "offre TV 1/8/18MMax"},
                            "mesures": [
                                {
                                    "mont": {},
                                    "desc": {},
                                    "condition": "Disjoncteur EDF OFF",
                                    "point": "RE",
                                    "date": 16565165192,
                                    "decision": "danger",
                                    "strResultsDiagXDSL": "Il y a encore quelque chose qui ne va pas",
                                    "actions": [
                                        {
                                            "ordre": 3,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "duree": 40
                                }
                            ]
                        }
                    ]
                };
                var diagADSL = new DiagnosticXDSL(mesure, intervADSL);
                var diagVDSL = new DiagnosticXDSL(mesure, intervVDSL);
                diagADSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.danger);
                    expect(result.strResultsDiagXDSL[0]).to.include(DIAGNOSTIC_ERROR_MESSAGES.ecartDebitMax);
                });
                diagVDSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.danger);
                    expect(result.strResultsDiagXDSL[0]).to.include(DIAGNOSTIC_ERROR_MESSAGES.ecartDebitMax);
                });
            });

            it('PM avec PT existante et Ecart de Marge de Bruit inferieur à 1.5 db', function () {
                var mesure = {
                    "isSynchronized":true,
                    "date":1459634400000,
                    "point": "PM",
                    "decision":"default",
                    mont:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 2,
                        "FEC": 8,
                        "attenu": 9
                    },
                    desc:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 2,
                        "FEC": 8,
                        "attenu": 9
                    }
                };
                var intervADSL = {
                    "groupmesures": [
                        {
                            "profil": {
                                "code": "0",
                                "libelle": "8dB",
                                "valeur":8,
                                "typeLigne":"ADSL",
                                "description": "offre TV 1/8/18MMax"},
                            "mesures": [
                                {
                                    "date": 956516516511,
                                    "point": "PT",
                                    "condition": "Disjoncteur EDF ON",
                                    "decision": "danger",
                                    "actions": [
                                        {
                                            "ordre": 1,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "mont": {},
                                    "desc": {},
                                    "duree": 40
                                },
                                {
                                    "mont": {
                                        "debReel": 0,
                                        "debAttActu": 1,
                                        "debAttMinMax": {
                                            "min":9500,
                                            "max":9500
                                        },
                                        "margeBruitActu": 15,
                                        "margeBruitMinMax": {
                                            "min":15,
                                            "max":16
                                        },
                                        "SES": 0,
                                        "CRC": 1,
                                        "FEC": 8,
                                        "attenu": 9
                                    },
                                    "desc": {
                                        "debReel": 0,
                                        "debAttActu": 1,
                                        "debAttMinMax": {
                                            "min":9500,
                                            "max":9500
                                        },
                                        "margeBruitActu": 15,
                                        "margeBruitMinMax": {
                                            "min":15,
                                            "max":16
                                        },
                                        "SES": 0,
                                        "CRC": 1,
                                        "FEC": 8,
                                        "attenu": 9
                                    },
                                    "point": "PT",
                                    "date": 16565165165,
                                    "decision": "success",
                                    "actions": [
                                        {
                                            "ordre": 3,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "duree": 40
                                }
                            ]
                        },
                        {
                            "profil": {
                                "code": "0",
                                "libelle": "8dB",
                                "valeur":8,
                                "typeLigne":"ADSL",
                                "description": "offre TV 1/8/18MMax"},
                            "mesures": [
                                {
                                    "mont": {},
                                    "desc": {},
                                    "condition": "Disjoncteur EDF OFF",
                                    "point": "RE",
                                    "date": 16565165192,
                                    "decision": "danger",
                                    "strResultsDiagXDSL": "Il y a encore quelque chose qui ne va pas",
                                    "actions": [
                                        {
                                            "ordre": 3,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "duree": 40
                                }
                            ]
                        }
                    ]
                };
                var intervVDSL = {
                    "groupmesures": [
                        {
                            "profil": {
                                "code": "0",
                                "libelle": "8dB",
                                "valeur":8,
                                "typeLigne":"VDSL",
                                "description": "offre TV 1/8/18MMax"},
                            "mesures": [
                                {
                                    "date": 956516516511,
                                    "point": "PT",
                                    "condition": "Disjoncteur EDF ON",
                                    "decision": "danger",
                                    "actions": [
                                        {
                                            "ordre": 1,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "mont": {},
                                    "desc": {},
                                    "duree": 40
                                },
                                {
                                    "mont": {
                                        "debReel": 0,
                                        "debAttActu": 1,
                                        "debAttMinMax": {
                                            "min":9500,
                                            "max":9500
                                        },
                                        "margeBruitActu": 15,
                                        "margeBruitMinMax": {
                                            "min":15,
                                            "max":16
                                        },
                                        "SES": 0,
                                        "CRC": 1,
                                        "FEC": 8,
                                        "attenu": 9
                                    },
                                    "desc": {
                                        "debReel": 0,
                                        "debAttActu": 1,
                                        "debAttMinMax": {
                                            "min":9500,
                                            "max":9500
                                        },
                                        "margeBruitActu": 15,
                                        "margeBruitMinMax": {
                                            "min":15,
                                            "max":16
                                        },
                                        "SES": 0,
                                        "CRC": 1,
                                        "FEC": 8,
                                        "attenu": 9
                                    },
                                    "point": "PT",
                                    "date": 16565165165,
                                    "decision": "success",
                                    "actions": [
                                        {
                                            "ordre": 3,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "duree": 40
                                }
                            ]
                        },
                        {
                            "profil": {
                                "code": "0",
                                "libelle": "8dB",
                                "valeur":8,
                                "typeLigne":"VDSL",
                                "description": "offre TV 1/8/18MMax"},
                            "mesures": [
                                {
                                    "mont": {},
                                    "desc": {},
                                    "condition": "Disjoncteur EDF OFF",
                                    "point": "RE",
                                    "date": 16565165192,
                                    "decision": "danger",
                                    "strResultsDiagXDSL": "Il y a encore quelque chose qui ne va pas",
                                    "actions": [
                                        {
                                            "ordre": 3,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "duree": 40
                                }
                            ]
                        }
                    ]
                };
                var diagADSL = new DiagnosticXDSL(mesure, intervADSL);
                var diagVDSL = new DiagnosticXDSL(mesure, intervVDSL);
                diagADSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.success);
                });
                diagVDSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.success);
                });
            });

            it('PM avec PT existante et Ecart de Marge de Bruit n\'est pas inferieur à 1.5 db', function () {
                var mesure = {
                    "isSynchronized":true,
                    "point": "PM",
                    mont:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":9500
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":14
                        },
                        "SES": 0,
                        "CRC": 2,
                        "FEC": 8,
                        "attenu": 9
                    },
                    desc:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":9500
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":14
                        },
                        "SES": 0,
                        "CRC": 2,
                        "FEC": 8,
                        "attenu": 9
                    }
                };
                var intervADSL = {
                    "groupmesures": [
                        {
                            "profil": {
                                "code": "0",
                                "libelle": "8dB",
                                "valeur":8,
                                "typeLigne":"ADSL",
                                "description": "offre TV 1/8/18MMax"},
                            "mesures": [
                                {
                                    "date": 956516516511,
                                    "point": "PT",
                                    "condition": "Disjoncteur EDF ON",
                                    "decision": "danger",
                                    "actions": [
                                        {
                                            "ordre": 1,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "mont": {},
                                    "desc": {},
                                    "duree": 40
                                },
                                {
                                    "mont": {
                                        "debReel": 0,
                                        "debAttActu": 1,
                                        "debAttMinMax": {
                                            "min":9500,
                                            "max":8000
                                        },
                                        "margeBruitActu": 15,
                                        "margeBruitMinMax": {
                                            "min":15,
                                            "max":25
                                        },
                                        "SES": 0,
                                        "CRC": 1,
                                        "FEC": 8,
                                        "attenu": 9
                                    },
                                    "desc": {
                                        "debReel": 0,
                                        "debAttActu": 1,
                                        "debAttMinMax": {
                                            "min":9500,
                                            "max":8000
                                        },
                                        "margeBruitActu": 15,
                                        "margeBruitMinMax": {
                                            "min":15,
                                            "max":25
                                        },
                                        "SES": 0,
                                        "CRC": 1,
                                        "FEC": 8,
                                        "attenu": 9
                                    },
                                    "point": "PT",
                                    "date": 16565165165,
                                    "decision": "success",
                                    "actions": [
                                        {
                                            "ordre": 3,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "duree": 40
                                }
                            ]
                        },
                        {
                            "profil": {
                                "code": "0",
                                "libelle": "8dB",
                                "valeur":8,
                                "typeLigne":"ADSL",
                                "description": "offre TV 1/8/18MMax"},
                            "mesures": [
                                {
                                    "mont": {},
                                    "desc": {},
                                    "condition": "Disjoncteur EDF OFF",
                                    "point": "RE",
                                    "date": 16565165192,
                                    "decision": "danger",
                                    "strResultsDiagXDSL": "Il y a encore quelque chose qui ne va pas",
                                    "actions": [
                                        {
                                            "ordre": 3,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "duree": 40
                                }
                            ]
                        }
                    ]
                };
                var intervVDSL = {
                    "groupmesures": [
                        {
                            "profil": {
                                "code": "0",
                                "libelle": "8dB",
                                "valeur":8,
                                "typeLigne":"VDSL",
                                "description": "offre TV 1/8/18MMax"},
                            "mesures": [
                                {
                                    "date": 956516516511,
                                    "point": "PT",
                                    "condition": "Disjoncteur EDF ON",
                                    "decision": "danger",
                                    "actions": [
                                        {
                                            "ordre": 1,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "mont": {},
                                    "desc": {},
                                    "duree": 40
                                },
                                {
                                    "mont": {
                                        "debReel": 0,
                                        "debAttActu": 1,
                                        "debAttMinMax": {
                                            "min":9500,
                                            "max":8000
                                        },
                                        "margeBruitActu": 15,
                                        "margeBruitMinMax": {
                                            "min":15,
                                            "max":16
                                        },
                                        "SES": 0,
                                        "CRC": 1,
                                        "FEC": 8,
                                        "attenu": 9
                                    },
                                    "desc": {
                                        "debReel": 0,
                                        "debAttActu": 1,
                                        "debAttMinMax": {
                                            "min":9500,
                                            "max":8000
                                        },
                                        "margeBruitActu": 15,
                                        "margeBruitMinMax": {
                                            "min":15,
                                            "max":16
                                        },
                                        "SES": 0,
                                        "CRC": 1,
                                        "FEC": 8,
                                        "attenu": 9
                                    },
                                    "point": "PT",
                                    "date": 16565165165,
                                    "decision": "success",
                                    "actions": [
                                        {
                                            "ordre": 3,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "duree": 40
                                }
                            ]
                        },
                        {
                            "profil": {
                                "code": "0",
                                "libelle": "8dB",
                                "valeur":8,
                                "typeLigne":"VDSL",
                                "description": "offre TV 1/8/18MMax"},
                            "mesures": [
                                {
                                    "mont": {},
                                    "desc": {},
                                    "condition": "Disjoncteur EDF OFF",
                                    "point": "RE",
                                    "date": 16565165192,
                                    "decision": "danger",
                                    "strResultsDiagXDSL": "Il y a encore quelque chose qui ne va pas",
                                    "actions": [
                                        {
                                            "ordre": 3,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "duree": 40
                                }
                            ]
                        }
                    ]
                };
                var diagADSL = new DiagnosticXDSL(mesure, intervADSL);
                var diagVDSL = new DiagnosticXDSL(mesure, intervVDSL);
                diagADSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.danger);
                    expect(result.strResultsDiagXDSL[1]).to.include(DIAGNOSTIC_ERROR_MESSAGES.ecartMargeDeBruit);
                });
                diagVDSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.danger);
                    expect(result.strResultsDiagXDSL[1]).to.include(DIAGNOSTIC_ERROR_MESSAGES.ecartMargeDeBruit);
                });
            });

            it('Pas de GroupMesure dans l\'intervention, utilisation du profil courant de l\'intervention' , function () {
                var mesure = {
                    "isSynchronized":true,
                    "point": "SR",
                    mont:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 2,
                        "FEC": 8,
                        "attenu": 9
                    },
                    desc:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 2,
                        "FEC": 8,
                        "attenu": 9
                    }
                };
                var intervADSL = {
                    "profilcourant": {
                        "code": "0",
                        "libelle": "8dB",
                        "valeur":8,
                        "typeLigne":"ADSL",
                        "description": "offre TV 1/8/18MMax"}
                };
                var intervVDSL = {
                    "profilcourant": {
                        "code": "0",
                        "libelle": "8dB",
                        "valeur":8,
                        "typeLigne":"VDSL",
                        "description": "offre TV 1/8/18MMax"}
                };
                var diagADSL = new DiagnosticXDSL(mesure, intervADSL);
                var diagVDSL = new DiagnosticXDSL(mesure, intervVDSL);
                diagADSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.success);
                });
                diagVDSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.success);
                });
            });

            it('PT avec PM Grise à requalifier en Vert' , function () {
                var mesure = {
                    "isSynchronized":true,
                    "point": "PT",
                    mont:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 1,
                        "FEC": 8,
                        "attenu": 9
                    },
                    desc:{
                        "debReel": 0,
                        "debAttActu": 1,
                        "debAttMinMax": {
                            "min":9500,
                            "max":10000
                        },
                        "margeBruitActu": 15,
                        "margeBruitMinMax": {
                            "min":15,
                            "max":16
                        },
                        "SES": 0,
                        "CRC": 1,
                        "FEC": 8,
                        "attenu": 9
                    }
                };
                var interventionADSL = {
                    "groupmesures": [
                        {
                            "profil": {
                                "code": "0",
                                "libelle": "8dB",
                                "valeur":8,
                                "typeLigne":"ADSL",
                                "description": "offre TV 1/8/18MMax"},
                            "mesures": [
                                {
                                    "isSynchronized":true,
                                    "point": "PM",
                                    "decision": 'default',
                                    mont:{
                                        "debReel": 0,
                                        "debAttActu": 1,
                                        "debAttMinMax": {
                                            "min":9500,
                                            "max":10000
                                        },
                                        "margeBruitActu": 15,
                                        "margeBruitMinMax": {
                                            "min":15,
                                            "max":16
                                        },
                                        "SES": 0,
                                        "CRC": 2,
                                        "FEC": 8,
                                        "attenu": 9
                                    },
                                    desc:{
                                        "debReel": 0,
                                        "debAttActu": 1,
                                        "debAttMinMax": {
                                            "min":9500,
                                            "max":10000
                                        },
                                        "margeBruitActu": 15,
                                        "margeBruitMinMax": {
                                            "min":15,
                                            "max":16
                                        },
                                        "SES": 0,
                                        "CRC": 2,
                                        "FEC": 8,
                                        "attenu": 9
                                    }
                                },
                                {
                                    "mont": {
                                        "debReel": 0,
                                        "debAttActu": 1,
                                        "debAttMinMax": {
                                            "min":9500,
                                            "max":10000
                                        },
                                        "margeBruitActu": 15,
                                        "margeBruitMinMax": {
                                            "min":15,
                                            "max":16
                                        },
                                        "SES": 0,
                                        "CRC": 1,
                                        "FEC": 8,
                                        "attenu": 9
                                    },
                                    "desc": {
                                        "debReel": 0,
                                        "debAttActu": 1,
                                        "debAttMinMax": {
                                            "min":9500,
                                            "max":10000
                                        },
                                        "margeBruitActu": 15,
                                        "margeBruitMinMax": {
                                            "min":15,
                                            "max":16
                                        },
                                        "SES": 0,
                                        "CRC": 1,
                                        "FEC": 8,
                                        "attenu": 9
                                    },
                                    "point": "PT",
                                    "date": 16565165165,
                                    "decision": "success",
                                    "actions": [
                                        {
                                            "ordre": 3,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "duree": 40
                                }
                            ]
                        }
                    ]
                };
                var interventionVDSL = {
                    "groupmesures": [
                        {
                            "profil": {
                                "code": "0",
                                "libelle": "8dB",
                                "valeur":8,
                                "typeLigne":"VDSL",
                                "description": "offre TV 1/8/18MMax"},
                            "mesures": [
                                {
                                    "isSynchronized":true,
                                    "point": "PM",
                                    "decision": 'default',
                                    mont:{
                                        "debReel": 0,
                                        "debAttActu": 1,
                                        "debAttMinMax": {
                                            "min":9500,
                                            "max":10000
                                        },
                                        "margeBruitActu": 15,
                                        "margeBruitMinMax": {
                                            "min":15,
                                            "max":16
                                        },
                                        "SES": 0,
                                        "CRC": 2,
                                        "FEC": 8,
                                        "attenu": 9
                                    },
                                    desc:{
                                        "debReel": 0,
                                        "debAttActu": 1,
                                        "debAttMinMax": {
                                            "min":9500,
                                            "max":10000
                                        },
                                        "margeBruitActu": 15,
                                        "margeBruitMinMax": {
                                            "min":15,
                                            "max":16
                                        },
                                        "SES": 0,
                                        "CRC": 2,
                                        "FEC": 8,
                                        "attenu": 9
                                    }
                                },
                                {
                                    "mont": {
                                        "debReel": 0,
                                        "debAttActu": 1,
                                        "debAttMinMax": {
                                            "min":9500,
                                            "max":10000
                                        },
                                        "margeBruitActu": 15,
                                        "margeBruitMinMax": {
                                            "min":15,
                                            "max":16
                                        },
                                        "SES": 0,
                                        "CRC": 1,
                                        "FEC": 8,
                                        "attenu": 9
                                    },
                                    "desc": {
                                        "debReel": 0,
                                        "debAttActu": 1,
                                        "debAttMinMax": {
                                            "min":9500,
                                            "max":10000
                                        },
                                        "margeBruitActu": 15,
                                        "margeBruitMinMax": {
                                            "min":15,
                                            "max":16
                                        },
                                        "SES": 0,
                                        "CRC": 1,
                                        "FEC": 8,
                                        "attenu": 9
                                    },
                                    "point": "PT",
                                    "date": 16565165165,
                                    "decision": "success",
                                    "actions": [
                                        {
                                            "ordre": 3,
                                            "message": "Si devis accepté, réaliser mesure à la PM",
                                            "etat": "mesure-new({typeMesure: 'PM', groupIndex: null, mesureIndex: null})"
                                        },
                                        {
                                            "ordre": 2,
                                            "message": "Si devis refusé, tester la Livebox et ses accessoires au PT",
                                            "etat": "mesure-new({typeMesure: 'PT', groupIndex: null, mesureIndex: null})"
                                        }
                                    ],
                                    "duree": 40
                                }
                            ]
                        }
                    ]
                };
                var diagADSL = new DiagnosticXDSL(mesure, interventionADSL);
                var diagVDSL = new DiagnosticXDSL(mesure, interventionVDSL);
                diagADSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.success);
                });
                diagVDSL.getDecision().then(function (result){
                    expect(result.decision).to.equal(DIAGNOSTIC_RESULTS.success);
                });
            });

          });
    });
});
