var mockedDataInterventions = (function () {
    return {
        getInterventions: getInterventions,
    };

    function getInterventions (anneeDate, anneeSyncDate) {
        return [{
            'nd': '0123456789',
            'date': new Date(anneeDate, 1, 1),
            'syncDate': new Date(anneeSyncDate, 1, 2),
            'commentaire': null,
            'profilcourant': {
                "code": "1",
                "libelle": "10dB",
                "valeur": "10",
                "descriptions": "<strong>10dB</strong><strong class='label-orange'> ADSL </strong> : Offre Internet 8MMax* ",
                "typeLigne": "ADSL"
            },
            'dysfonctionnements': {
                'koJamais': false,
                'koDeja': false,
                'okAutre': false,
                'strAutre': null
            },
            'groupmesures': [
                {
                    'profil': {'code': '0', 'libelle': '8dB', 'description': 'offre TV 1/8/18MMax'},
                    'mesures': [
                        {
                            'mont': {
                                'debReel': 0,
                                'debAttActu': 1,
                                'debAttMinMax': 2,
                                'margeBruitActu': 4,
                                'margeBruitMinMax': 5,
                                'SES': 6,
                                'CRC': 7,
                                'FEC': 8,
                                'attenu': 9,
                                'desync': false
                            },
                            'desc': {
                                'debReel': 100,
                                'debAttActu': 71,
                                'debAttMinMax': 28,
                                'margeBruitActu': 47,
                                'margeBruitMinMax': 53,
                                'SES': 68,
                                'CRC': 78,
                                'FEC': 87,
                                'attenu': 98,
                                'desync': false
                            },
                            'date': new Date(2015, 1, 2),
                            'point': 'PT',
                            'condition': 'Disjoncteur EDF ON',
                            'decision': 'danger',
                            'strDecision': 'Il y a quelque chose qui ne va pas',
                            'actions': [{
                                'ordre': 1,
                                'message': 'Si devis accepté, réaliser mesure à la PM',
                                'etat': 'mesure-new({typeMesure: \'PM\', groupIndex: null, mesureIndex: null})'
                            },{
                                'ordre': 2,
                                'message': 'Si devis refusé, tester la Livebox et ses accessoires au PT',
                                'etat': 'mesure-new({typeMesure: \'PT\', groupIndex: null, mesureIndex: null})'
                            }
                            ],
                            'duree': 40
                        },
                        {
                            'mont': {
                                'debReel': 0,
                                'debAttActu': 1,
                                'debAttMinMax': 2,
                                'margeBruitActu': 4,
                                'margeBruitMinMax': 5,
                                'SES': 6,
                                'CRC': 7,
                                'FEC': 8,
                                'attenu': 9,
                                'desync': true
                            },
                            'desc': {
                                'debReel': 0,
                                'debAttActu': 1,
                                'debAttMinMax': 2,
                                'margeBruitActu': 4,
                                'margeBruitMinMax': 5,
                                'SES': 6,
                                'CRC': 7,
                                'FEC': 8,
                                'attenu': 9,
                                'desync': true
                            },
                            'condition': 'Disjoncteur EDF OFF',
                            'point': 'PT',
                            'date': 16565165165,
                            'decision': 'success',
                            'strDecision': 'Tout va bien',
                            'actions': [{
                                'ordre': 3,
                                'message': 'Si devis accepté, réaliser mesure à la PM',
                                'etat': 'mesure-new({typeMesure: \'PM\', groupIndex: null, mesureIndex: null})'
                            },{
                                'ordre': 2,
                                'message': 'Si devis refusé, tester la Livebox et ses accessoires au PT',
                                'etat': 'mesure-new({typeMesure: \'PT\', groupIndex: null, mesureIndex: null})'
                            }
                            ],
                            'duree': 40
                        }
                    ]
                },
                {
                    'profil': {'code': '1', 'libelle': '10dB', 'description': 'offre Internet 8MMax'},
                    'mesures': [
                        {
                            'mont': {
                                'debReel': 0,
                                'debAttActu': 1,
                                'debAttMinMax': 2,
                                'margeBruitActu': 4,
                                'SES': 6,
                                'CRC': 7,
                                'FEC': 8,
                                'attenu': 9,
                                'desync': false
                            },
                            'desc': {
                                'debReel': 0,
                                'debAttActu': 1,
                                'debAttMinMax': 2,
                                'margeBruitActu': 4,
                                'SES': 6,
                                'CRC': 7,
                                'FEC': 8,
                                'attenu': 9,
                                'desync': false
                            },
                            'condition': 'Disjoncteur EDF OFF',
                            'point': 'RE',
                            'date': new Date(2015, 1, 2),
                            'decision': 'danger',
                            'strDecision': 'Il y a encore quelque chose qui ne va pas',
                            'actions': [{
                                'ordre': 3,
                                'message': 'Si devis accepté, réaliser mesure à la PM',
                                'etat': 'mesure-new({typeMesure: \'PM\', groupIndex: null, mesureIndex: null})'
                            },{
                                'ordre': 2,
                                'message': 'Si devis refusé, tester la Livebox et ses accessoires au PT',
                                'etat': 'mesure-new({typeMesure: \'PT\', groupIndex: null, mesureIndex: null})'
                            }
                            ],
                            'duree': 40
                        }
                    ]
                }
            ]
        },{
            'nd': '0123456789',
            'date': new Date(anneeDate, 2, 1),
            'syncDate': new Date(anneeSyncDate, 2, 2),
            'commentaire': null,
            'profilcourant': {
                "code": "1",
                "libelle": "10dB",
                "valeur": "10",
                "descriptions": "<strong>10dB</strong><strong class='label-orange'> ADSL </strong> : Offre Internet 8MMax* ",
                "typeLigne": "ADSL"
            },
            'dysfonctionnements': {
                'koJamais': false,
                'koDeja': false,
                'okAutre': false,
                'strAutre': null
            },
            'groupmesures': [
                {
                    'profil': {'code': '0', 'libelle': '8dB', 'description': 'offre TV 1/8/18MMax'},
                    'mesures': [
                        {
                            'mont': {
                                'debReel': 0,
                                'debAttActu': 1,
                                'debAttMinMax': 2,
                                'margeBruitActu': 4,
                                'margeBruitMinMax': 5,
                                'SES': 6,
                                'CRC': 7,
                                'FEC': 8,
                                'attenu': 9,
                                'desync': false
                            },
                            'desc': {
                                'debReel': 100,
                                'debAttActu': 71,
                                'debAttMinMax': 28,
                                'margeBruitActu': 47,
                                'margeBruitMinMax': 53,
                                'SES': 68,
                                'CRC': 78,
                                'FEC': 87,
                                'attenu': 98,
                                'desync': false
                            },
                            'date': new Date(2015, 1, 2),
                            'point': 'PT',
                            'condition': 'Disjoncteur EDF ON',
                            'decision': 'danger',
                            'strDecision': 'Il y a quelque chose qui ne va pas',
                            'actions': [{
                                    'ordre': 1,
                                    'message': 'Si devis accepté, réaliser mesure à la PM',
                                    'etat': 'mesure-new({typeMesure: \'PM\', groupIndex: null, mesureIndex: null})'
                                },{
                                    'ordre': 2,
                                    'message': 'Si devis refusé, tester la Livebox et ses accessoires au PT',
                                    'etat': 'mesure-new({typeMesure: \'PT\', groupIndex: null, mesureIndex: null})'
                                }
                            ],
                            'duree': 40
                        },
                        {
                            'mont': {
                                'debReel': 0,
                                'debAttActu': 1,
                                'debAttMinMax': 2,
                                'margeBruitActu': 4,
                                'margeBruitMinMax': 5,
                                'SES': 6,
                                'CRC': 7,
                                'FEC': 8,
                                'attenu': 9,
                                'desync': true
                            },
                            'desc': {
                                'debReel': 0,
                                'debAttActu': 1,
                                'debAttMinMax': 2,
                                'margeBruitActu': 4,
                                'margeBruitMinMax': 5,
                                'SES': 6,
                                'CRC': 7,
                                'FEC': 8,
                                'attenu': 9,
                                'desync': true
                            },
                            'condition': 'Disjoncteur EDF OFF',
                            'point': 'PT',
                            'date': 16565165165,
                            'decision': 'success',
                            'strDecision': 'Tout va bien',
                            'actions': [{
                                    'ordre': 3,
                                    'message': 'Si devis accepté, réaliser mesure à la PM',
                                    'etat': 'mesure-new({typeMesure: \'PM\', groupIndex: null, mesureIndex: null})'
                                },{
                                    'ordre': 2,
                                    'message': 'Si devis refusé, tester la Livebox et ses accessoires au PT',
                                    'etat': 'mesure-new({typeMesure: \'PT\', groupIndex: null, mesureIndex: null})'
                                }
                            ],
                            'duree': 40
                        }
                    ]
                },
                {
                    'profil': {'code': '1', 'libelle': '10dB', 'description': 'offre Internet 8MMax'},
                    'mesures': [
                        {
                            'mont': {
                                'debReel': 0,
                                'debAttActu': 1,
                                'debAttMinMax': 2,
                                'margeBruitActu': 4,
                                'SES': 6,
                                'CRC': 7,
                                'FEC': 8,
                                'attenu': 9,
                                'desync': false
                            },
                            'desc': {
                                'debReel': 0,
                                'debAttActu': 1,
                                'debAttMinMax': 2,
                                'margeBruitActu': 4,
                                'SES': 6,
                                'CRC': 7,
                                'FEC': 8,
                                'attenu': 9,
                                'desync': false
                            },
                            'condition': 'Disjoncteur EDF OFF',
                            'point': 'RE',
                            'date': new Date(2015, 1, 2),
                            'decision': 'danger',
                            'strDecision': 'Il y a encore quelque chose qui ne va pas',
                            'actions': [{
                                    'ordre': 3,
                                    'message': 'Si devis accepté, réaliser mesure à la PM',
                                    'etat': 'mesure-new({typeMesure: \'PM\', groupIndex: null, mesureIndex: null})'
                                },{
                                    'ordre': 2,
                                    'message': 'Si devis refusé, tester la Livebox et ses accessoires au PT',
                                    'etat': 'mesure-new({typeMesure: \'PT\', groupIndex: null, mesureIndex: null})'
                                }
                            ],
                            'duree': 40
                        }
                    ]
                }
            ]
        },{
            'nd': '9876543210',
            'date': new Date(anneeDate, 3, 1),
            'syncDate': new Date(anneeSyncDate, 3, 2),
            'commentaire': null,
            'profilcourant': {
                "code": "1",
                "libelle": "10dB",
                "valeur": "10",
                "descriptions": "<strong>10dB</strong><strong class='label-orange'> ADSL </strong> : Offre Internet 8MMax* ",
                "typeLigne": "ADSL"
            },
            'dysfonctionnements': {
                'koJamais': false,
                'koDeja': false,
                'okAutre': false,
                'strAutre': null
            },
            'groupmesures': [
                {
                    'profil': {'code': '0', 'libelle': '8dB', 'description': 'offre TV 1/8/18MMax'},
                    'mesures': [
                        {
                            'mont': {
                                'debReel': 0,
                                'debAttActu': 1,
                                'debAttMinMax': 2,
                                'margeBruitActu': 4,
                                'margeBruitMinMax': 5,
                                'SES': 6,
                                'CRC': 7,
                                'FEC': 8,
                                'attenu': 9,
                                'desync': false
                            },
                            'desc': {
                                'debReel': 100,
                                'debAttActu': 71,
                                'debAttMinMax': 28,
                                'margeBruitActu': 47,
                                'margeBruitMinMax': 53,
                                'SES': 68,
                                'CRC': 78,
                                'FEC': 87,
                                'attenu': 98,
                                'desync': false
                            },
                            'date': 956516516511,
                            'point': 'PT',
                            'condition': 'Disjoncteur EDF ON',
                            'decision': 'danger',
                            'strDecision': 'Il y a quelque chose qui ne va pas',
                            'actions': [{
                                    'ordre': 1,
                                    'message': 'Si devis accepté, réaliser mesure à la PM',
                                    'etat': 'mesure-new({typeMesure: \'PM\', groupIndex: null, mesureIndex: null})'
                                }, {
                                    'ordre': 2,
                                    'message': 'Si devis refusé, tester la Livebox et ses accessoires au PT',
                                'etat': 'mesure-new({typeMesure: \'PT\', groupIndex: null, mesureIndex: null})'
                            }
                            ],
                            'duree': 40
                        },
                        {
                            'mont': {
                                'debReel': 0,
                                'debAttActu': 1,
                                'debAttMinMax': 2,
                                'margeBruitActu': 4,
                                'margeBruitMinMax': 5,
                                'SES': 6,
                                'CRC': 7,
                                'FEC': 8,
                                'attenu': 9,
                                'desync': true
                            },
                            'desc': {
                                'debReel': 0,
                                'debAttActu': 1,
                                'debAttMinMax': 2,
                                'margeBruitActu': 4,
                                'margeBruitMinMax': 5,
                                'SES': 6,
                                'CRC': 7,
                                'FEC': 8,
                                'attenu': 9,
                                'desync': true
                            },
                            'condition': 'Disjoncteur EDF OFF',
                            'point': 'PT',
                            'date': 16565165165,
                            'decision': 'success',
                            'strDecision': 'Tout va bien',
                            'actions': [{
                                    'ordre': 3,
                                    'message': 'Si devis accepté, réaliser mesure à la PM',
                                    'etat': 'mesure-new({typeMesure: \'PM\', groupIndex: null, mesureIndex: null})'
                                }, {
                                    'ordre': 2,
                                    'message': 'Si devis refusé, tester la Livebox et ses accessoires au PT',
                                    'etat': 'mesure-new({typeMesure: \'PT\', groupIndex: null, mesureIndex: null})'
                                }
                            ],
                            'duree': 40
                        }
                    ]
                },{
                    'profil': {'code': '1', 'libelle': '10dB', 'description': 'offre Internet 8MMax'},
                    'mesures': [
                        {
                            'mont': {
                                'debReel': 0,
                                'debAttActu': 1,
                                'debAttMinMax': 2,
                                'margeBruitActu': 4,
                                'SES': 6,
                                'CRC': 7,
                                'FEC': 8,
                                'attenu': 9,
                                'desync': false
                            },
                            'desc': {
                                'debReel': 0,
                                'debAttActu': 1,
                                'debAttMinMax': 2,
                                'margeBruitActu': 4,
                                'SES': 6,
                                'CRC': 7,
                                'FEC': 8,
                                'attenu': 9,
                                'desync': false
                            },
                            'condition': 'Disjoncteur EDF OFF',
                            'point': 'RE',
                            'date': 16565165165,
                            'decision': 'danger',
                            'strDecision': 'Il y a encore quelque chose qui ne va pas',
                            'actions': [{
                                    'ordre': 3,
                                    'message': 'Si devis accepté, réaliser mesure à la PM',
                                    'etat': 'mesure-new({typeMesure: \'PM\', groupIndex: null, mesureIndex: null})'
                                }, {
                                    'ordre': 2,
                                    'message': 'Si devis refusé, tester la Livebox et ses accessoires au PT',
                                    'etat': 'mesure-new({typeMesure: \'PT\', groupIndex: null, mesureIndex: null})'
                                }
                            ],
                            'duree': 40
                        }
                    ]
                }
            ]
        }];
    }
})();
