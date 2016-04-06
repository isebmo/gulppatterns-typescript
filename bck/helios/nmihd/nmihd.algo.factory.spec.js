/* jshint -W117, -W030 */
describe('nmihd', function () {
    describe('nmihd.algo.service', function () {
        var prop = {
            SR: [
                {
                    code: 'SR2',
                    priorite: 10,
                    actions: [
                        {
                            type: 'LINK',
                            mesureSuivante: 'PC',
                            libelle: 'Vérifier à la SR, côté distribution, jarretières, état des contacts, problèmes d\'oxydation, mauvaises connectiques et revenir au PC ',
                            decision: {
                                code: 'SR_act1'
                            }
                        },
                        {
                            type: 'LINK',
                            mesureSuivante: 'SR',
                            libelle: 'Vérifier les points intermédiaires'
                        },
                        {
                            type: 'LINK',
                            mesureSuivante: 'PC',
                            libelle: 'Muter la paire de distribution (atténuation similaire) et revenir au PC',
                            decision: {
                                code: 'SR_act2'
                            }
                        }
                    ]
                },
                {
                    code: 'SR3',
                    priorite: 20,
                    actions: [
                        {
                            type: 'LINK',
                            mesureSuivante: 'SR',
                            libelle: 'Vérifier les points intermédiaires'
                        },
                        {
                            type: 'LINK',
                            mesureSuivante: 'PC',
                            libelle: 'Muter la paire de distribution (atténuation similaire) et revenir au PC',
                            decision: {
                                code: 'SR_act2'
                            }
                        }
                    ]
                },
                {
                    code: 'SR4',
                    priorite: 30,
                    actions: [
                        {
                            type: 'TEXT',
                            libelle: 'Suspicion de fort perturbateur EM, appeler STGP pour tests paires voisines'
                        }
                    ]
                },
                {
                    code: 'SR5',
                    priorite: 40,
                    actions: [
                        {
                            type: 'LINK',
                            libelle: 'Vérifier à la SR, côté distribution, jarretières, état des contacts, problèmes d\'oxydation, mauvaises connectiques et revenir au PT ',
                            mesureSuivante: 'PT'
                        },
                        {
                            type: 'LINK',
                            mesureSuivante: 'SR',
                            libelle: 'Vérifier les points intermédiaires'
                        }
                    ]
                },
                {
                    code: 'SR6',
                    priorite: 40,
                    actions: [
                        {
                            type: 'LINK',
                            libelle: 'Vérifier à la SR, côté distribution, jarretières, état des contacts, problèmes d\'oxydation, mauvaises connectiques ',
                            mesureSuivante: 'SR'
                        },
                        {
                            type: 'LINK',
                            mesureSuivante: 'PC',
                            libelle: 'Réaliser mesure au PC'
                        }
                    ]
                },
                {
                    code: 'SR7',
                    priorite: 50,
                    actions: [
                        {
                            type: 'LINK',
                            libelle: 'Vérifier à la SR, côté transport, jarretières, état des contacts, problèmes d\'oxydation, mauvaises connectiques',
                            mesureSuivante: 'SR'
                        },
                        {
                            type: 'LINK',
                            mesureSuivante: 'RE',
                            libelle: 'Réaliser mesure au RE'
                        }
                    ]
                },
                {
                    code: 'SR8',
                    priorite: 60,
                    actions: [
                        {
                            type: 'LINK',
                            libelle: 'Vérifier à la SR, côté transport, jarretières, état des contacts, problèmes d\'oxydation, mauvaises connectiques  ',
                            mesureSuivante: 'SR'
                        },
                        {
                            type: 'LINK',
                            mesureSuivante: 'SR',
                            libelle: 'Muter la paire de transport  (atténuation similaire) et revenir à la SR',
                            decision: {
                                code: 'SR_act6'
                            }
                        }
                    ]
                },
                {
                    code: 'SR9',
                    priorite: 70,
                    actions: [
                        {
                            type: 'LINKMESURES',
                            libelle: 'Suspicion de fort perturbateur EM : appeler STGP pour tests sur paires voisines  '
                        }
                    ]
                },
                {
                    code: 'SR10',
                    priorite: 80,
                    actions: [
                        {
                            type: 'TEXT',
                            libelle: 'Réaliser mesure au PT'
                        }
                    ]
                },
                {
                    code: 'SR11',
                    priorite: 90,
                    actions: [
                        {
                            type: 'TEXT',
                            libelle: 'Réaliser mesure au PT'
                        }
                    ]
                },
                {
                    code: 'SR12',
                    priorite: 100,
                    actions: [
                        {
                            type: 'LINK',
                            mesureSuivante: 'SR',
                            libelle: 'Vérifier à la SR, côté transport, jarretières, état des contacts, problèmes d\'oxydation, mauvaises connectiques '
                        },
                        {
                            type: 'LINK',
                            mesureSuivante: 'SR',
                            libelle: 'Muter la paire de transport (atténuation similaire) et revenir à la SR',
                            decision: {
                                code: 'SR_act5'
                            }
                        }
                    ]
                },
                {
                    code: 'SR13',
                    priorite: 110,
                    actions: [
                        {
                            type: 'LINKMESURES',
                            libelle: 'Suspicion de fort perturbateur EM : appeler STGP pour tests sur paires voisines '
                        }
                    ]
                },
                {
                    code: 'SR14',
                    priorite: 120,
                    actions: [
                        {
                            type: 'LINKMESURES',
                            libelle: 'Suspicion de fort perturbateur EM : appeler STGP pour tests sur paires voisines '
                        }
                    ]
                },
                {
                    code: 'SR15',
                    priorite: 130,
                    actions: [
                        {
                            type: 'TEXT',
                            libelle: 'Réaliser mesure au RE'
                        }
                    ]
                },
                {
                    code: 'SR16',
                    priorite: 140,
                    actions: [
                        {
                            type: 'TEXT',
                            libelle: 'Réaliser mesure au RE'
                        }
                    ]
                }
            ],
            RE: [
                {
                    code: 'RE3',
                    priorite: 5,
                    actions: [
                        {
                            type: 'TEXT',
                            libelle: 'Commencer par vérifier jarretières et qualifier plots'
                        },
                        {
                            type: 'LINK',
                            mesureSuivante: 'SR',
                            libelle: 'Si les problèmes ont été corrigés sur plot/jarretières, revenir à la SR ',
                            decision: {
                                code: 'RE_act4'
                            }
                        },
                        {
                            type: 'LINK',
                            mesureSuivante: 'SR',
                            libelle: 'Si aucun problème sur plot/jarretières, muter la paire de transport (atténuation similaire) et revenir à la SR',
                            decision: {
                                code: 'RE_act3'
                            }
                        }


                    ]
                },
                {
                    code: 'RE5',
                    priorite: 10,
                    actions: [
                        {
                            type: 'LINK',
                            mesureSuivante: 'PM',
                            libelle: 'Réaliser mesure à la PM'
                        }
                    ]
                },
                {
                    code: 'RE6',
                    priorite: 20,
                    actions: [
                        {
                            type: 'LINK',
                            mesureSuivante: 'RE',
                            libelle: 'Vérifier plot et jarretières'
                        }
                    ]
                },
                {
                    code: 'RE7',
                    priorite: 30,
                    actions: [
                        {
                            type: 'LINK',
                            mesureSuivante: 'PM',
                            libelle: 'Réaliser mesure à la PM'
                        }
                    ]
                },
                {
                    code: 'RE8',
                    priorite: 40,
                    actions: [
                        {
                            type: 'LINK',
                            mesureSuivante: 'SR',
                            libelle: 'Réaliser mesure à la SR',
                            decision: {
                                code: 'RE_act4'
                            }
                        }
                    ]
                }
            ],
            PM: [
                {
                    code: 'PM7',
                    priorite: 10,
                    actions: [
                        {
                            type: 'TEXT',
                            libelle: 'En attente de décision'
                        },
                        {
                            type: 'LINK',
                            mesureSuivante: 'PT',
                            libelle: 'Réaliser mesures au PT pour comparatif'
                        }
                    ]
                },
                {
                    code: 'PM8',
                    priorite: 20,
                    actions: [
                        {
                            type: 'TEXT',
                            libelle: 'Tester les services, si services NOK, tester la Livebox'
                        },
                        {
                            type: 'LINKMESURES',
                            libelle: 'Fin intervention'
                        }
                    ]
                },
                {
                    code: 'PM10',
                    priorite: 30,
                    actions: [
                        {
                            type: 'TEXT',
                            libelle: 'Tester les services, si services NOK, tester la Livebox'
                        },
                        {
                            type: 'LINKMESURES',
                            libelle: 'Fin intervention'
                        }
                    ]
                },
                {
                    code: 'PM11',
                    priorite: 40,
                    actions: [
                        {
                            type: 'LINK',
                            mesureSuivante: 'PT',
                            libelle: 'Réaliser mesure au PT'
                        }
                    ]
                },
                {
                    code: 'PM12',
                    priorite: 50,
                    actions: [
                        {
                            type: 'LINK',
                            mesureSuivante: 'PT',
                            libelle: 'Vérifier l\'état des contacts au PT, problèmes d\'oxydation, mauvaises connectiques',
                            decision: {
                                code: 'PT_act1'
                            }
                        },
                        {
                            type: 'LINK',
                            mesureSuivante: 'PT',
                            libelle: 'Vérifier qu\'un fort perturbateur EM chez le client n\'est pas responsable des dysfonctionnements au PT. Utiliser Easydetect ou un poste de radio ',
                            decision: {
                                code: 'PT_act2'
                            }
                        },
                        {
                            type: 'LINK',
                            mesureSuivante: 'PC',
                            libelle: 'Réaliser mesures au PC'
                        }
                    ]
                },
                {
                    code: 'PM6',
                    priorite: 60,
                    actions: [
                        {
                            type: 'LINK',
                            mesureSuivante: 'PT',
                            libelle: 'Vérifier qu\'un fort perturbateur EM chez le client n\'est pas responsable des dysfonctionnements au PT. Utiliser Easydetect ou un poste de radio ',
                            decision: {
                                code: 'PT_act2'
                            }
                        },
                        {
                            type: 'LINK',
                            mesureSuivante: 'PC',
                            libelle: 'Réaliser mesure au PC'
                        }
                    ]
                },
                {
                    code: 'PM13',
                    priorite: 70,
                    actions: [
                        {
                            type: 'LINK',
                            mesureSuivante: 'PC',
                            libelle: 'Réaliser mesure au PC'
                        }
                    ]
                },
                {
                    code: 'PM14',
                    priorite: 80,
                    actions: [
                        {
                            type: 'LINK',
                            mesureSuivante: 'PM',
                            libelle: 'Agir dans la desserte interne, obtenir le même état à la PM qu’au PT'
                        }
                    ]
                },
                {
                    code: 'PM15',
                    priorite: 90,
                    actions: [
                        {
                            type: 'LINK',
                            mesureSuivante: 'PM',
                            libelle: 'Actionner les interrupteurs pour mettre en évidence une sensibilité de la desserte interne'
                        },
                        {
                            type: 'LINK',
                            mesureSuivante: 'PT',
                            libelle: 'Dans le cas d\'un immeuble, en complément, réaliser mesures au PT en actionnant interrupteurs/ascenseurs pour mettre en évidence une sensibilité des parties communes'
                        }
                    ]
                }
            ],
            PT: [
                {
                    code: 'PT6',
                    priorite: 10,
                    actions: [
                        {
                            type: 'LINK',
                            mesureSuivante: 'PM',
                            libelle: 'Réaliser mesure à la PM'
                        }
                    ]
                },
                {
                    code: 'PT7',
                    priorite: 20,
                    actions: [
                        {
                            type: 'TEXT',
                            libelle: 'Tester les services, si services NOK, tester la Livebox'
                        },
                        {
                            type: 'LINKMESURES',
                            libelle: 'Fin intervention'
                        }
                    ]
                },
                {
                    code: 'PT8',
                    priorite: 30,
                    actions: [
                        {
                            type: 'LINK',
                            mesureSuivante: 'PM',
                            libelle: 'Retourner à la PM, et actionner les interrupteurs pour mettre en évidence une sensibilité de la desserte interne'
                        },
                        {
                            type: 'LINK',
                            mesureSuivante: 'PT',
                            libelle: 'Dans le cas d\'un immeuble, en complément, réaliser mesures au PT en actionnant interrupteurs/ascenseurs pour mettre en évidence une sensibilité des parties communes'
                        }
                    ]
                },
                {
                    code: 'PT4',
                    priorite: 40,
                    actions: [
                        {
                            type: 'TEXT',
                            libelle: 'Tester les services, si services NOK, tester la Livebox'
                        },
                        {
                            type: 'LINKMESURES',
                            libelle: 'Fin intervention'
                        }
                    ]
                },
                {
                    code: 'PT9',
                    priorite: 50,
                    actions: [
                        {
                            type: 'TEXT',
                            libelle: 'Vérifier au PT, côté installation client, l\'état des contacts, problèmes d\'oxydation, mauvaises connectiques'
                        },
                        {
                            type: 'LINK',
                            mesureSuivante: 'PM',
                            libelle: 'Agir dans la desserte interne, obtenir le même état à la PM qu’au PT (+ long texte)'
                        }
                    ]
                },
                {
                    code: 'PT10',
                    priorite: 60,
                    actions: [
                        {
                            type: 'LINK',
                            mesureSuivante: 'PT',
                            libelle: 'Vérifier au PT, côté branchement, l\'état des contacts, problèmes d\'oxydation, mauvaises connectiques'
                        },
                        {
                            type: 'LINK',
                            mesureSuivante: 'PT',
                            libelle: 'Vérifier qu\'un fort perturbateur EM chez le client n\'est pas responsable des dysfonctionnements au PT. Utiliser Easydetect ou un poste de radio'
                        },
                        {
                            type: 'LINK',
                            mesureSuivante: 'PT',
                            libelle: 'Vérifier au PC, côté branchement, l\'état des contacts, problèmes d\'oxydation, mauvaises connectiques  et revenir au PT'
                        },
                        {
                            type: 'LINK',
                            mesureSuivante: 'PC',
                            libelle: 'Vérifier les points intermédiaires'
                        },
                        {
                            type: 'LINK',
                            mesureSuivante: 'PT',
                            libelle: 'Changer le câble de branchement et revenir au PT'
                        }
                    ]
                },
                {
                    code: 'PT11',
                    priorite: 70,
                    actions: [
                        {
                            type: 'LINK',
                            mesureSuivante: 'PT',
                            libelle: 'Vérifier au PT, côté branchement, l\'état des contacts, problèmes d\'oxydation, mauvaises connectiques'
                        },
                        {
                            type: 'LINK',
                            mesureSuivante: 'PT',
                            libelle: 'Vérifier qu\'un fort perturbateur EM chez le client n\'est pas responsable des dysfonctionnements au PT. Utiliser Easydetect ou un poste de radio'
                        },
                        {
                            type: 'LINK',
                            mesureSuivante: 'PC',
                            libelle: 'Réaliser mesures au PC'
                        }
                    ]
                },
                {
                    code: 'PT12',
                    priorite: 80,
                    actions: [
                        {
                            type: 'LINK',
                            mesureSuivante: 'PT',
                            libelle: 'Vérifier au PT, côté branchement, l\'état des contacts, problèmes d\'oxydation, mauvaises connectiques'
                        },
                        {
                            type: 'LINK',
                            mesureSuivante: 'PT',
                            libelle: 'Vérifier qu\'un fort perturbateur EM chez le client n\'est pas responsable des dysfonctionnements au PT. Utiliser Easydetect ou un poste de radio'
                        },
                        {
                            type: 'LINK',
                            mesureSuivante: 'SR',
                            libelle: 'Réaliser mesures au SR'
                        }
                    ]
                }
            ],
            PC: [
                {
                    code: 'PC3',
                    priorite: 10,
                    actions: [
                        {
                            type: 'LINK',
                            mesureSuivante: 'PT',
                            libelle: 'Réaliser mesure au PT'
                        }
                    ]
                },
                {
                    code: 'PC4',
                    priorite: 20,
                    actions: [
                        {
                            type: 'LINK',
                            mesureSuivante: 'PT',
                            libelle: 'Réaliser mesure au PT'
                        }
                    ]
                },
                {
                    code: 'PC5',
                    priorite: 30,
                    actions: [
                        {
                            type: 'LINK',
                            mesureSuivante: 'PM',
                            libelle: 'Réaliser mesure à la PM'
                        }
                    ]
                },
                {
                    code: 'PC6',
                    priorite: 40,
                    actions: [
                        {
                            type: 'TEXT',
                            libelle: 'Vérifier au PC, côté branchement, \'état des contacts, problèmes d\'oxydation, mauvaises connectiques '
                        },
                        {
                            type: 'TEXT',
                            libelle: 'Vérifier les points intermédiaires'
                        },
                        {
                            type: 'LINKMESURES',
                            libelle: 'Fin intervention'
                        }
                    ]
                },
                {
                    code: 'PC7',
                    priorite: 50,
                    actions: [
                        {
                            type: 'LINK',
                            mesureSuivante: 'PC',
                            libelle: 'Vérifier au PC, côté distribution, l\'état des contacts, problèmes d\'oxydation, mauvaises connectiques'
                        },
                        {
                            type: 'TEXT',
                            libelle: 'Réaliser mesure à la SR'
                        }
                    ]
                },
                {
                    code: 'PC8',
                    priorite: 60,
                    actions: [
                        {
                            type: 'LINK',
                            mesureSuivante: 'PT',
                            libelle: 'Vérifier au PC, côté branchement, l\'état des contacts, problèmes d\'oxydation, mauvaises connectiques et revenir au PT'
                        },
                        {
                            type: 'LINK',
                            mesureSuivante: 'PC',
                            libelle: 'Vérifier les points intermédiaires'
                        },
                        {
                            type: 'LINK',
                            mesureSuivante: 'PT',
                            libelle: 'Changer le câble de branchement et revenir au PT'
                        }
                    ]
                },
                {
                    code: 'PC9',
                    priorite: 70,
                    actions: [
                        {
                            type: 'LINKMESURES',
                            libelle: 'Suspicion de fort perturbateur EM : appel STGP pour tests sur paires voisines'
                        }
                    ]
                },
                {
                    code: 'PC10',
                    priorite: 80,
                    actions: [
                        {
                            type: 'TEXT',
                            libelle: 'Réaliser mesure au PT'
                        }
                    ]
                },
                {
                    code: 'PC11',
                    priorite: 90,
                    actions: [
                        {
                            type: 'LINK',
                            mesureSuivante: 'PT',
                            libelle: 'Réaliser mesure au PT'
                        }
                    ]
                },
                {
                    code: 'PC12',
                    priorite: 100,
                    actions: [
                        {
                            type: 'LINK',
                            mesureSuivante: 'SR',
                            libelle: 'Vérifier les points intermédiaires'
                        },
                        {
                            type: 'LINK',
                            mesureSuivante: 'PC',
                            libelle: 'Muter la paire de distribution et revenir au PC',
                            decision: {
                                code: 'SR_act2'
                            }
                        }
                    ]
                },
                {
                    code: 'PC13',
                    priorite: 110,
                    actions: [
                        {
                            type: 'LINK',
                            mesureSuivante: 'PC',
                            libelle: 'Vérifier au PC, côté distribution, l\'état des contacts, problèmes d\'oxydation, mauvaises connectiques'
                        },
                        {
                            type: 'LINK',
                            mesureSuivante: 'SR',
                            libelle: 'Vérifier les points intermédiaires'
                        },
                        {
                            type: 'LINK',
                            mesureSuivante: 'SR',
                            libelle: 'Vérifier à la SR, côté distribution, jarretières, état des contacts, problèmes d\'oxydation, mauvaises connectiques',
                            decision: {
                                code: 'SR_act1'
                            }
                        },
                        {
                            type: 'LINK',
                            mesureSuivante: 'PC',
                            libelle: 'Muter la paire de distribution (atténuation similaire) et revenir au PC',
                            decision: {
                                code: 'SR_act2'
                            }
                        }
                    ]
                },
                {
                    code: 'PC14',
                    priorite: 120,
                    actions: [
                        {
                            type: 'TEXT',
                            libelle: 'Réaliser mesure au RE'
                        }
                    ]
                }
            ]
        };

        beforeEach(function () {
            module('app.helios.nmihd');
            module('app.intervention');
            bard.inject(this, 'NmihdAlgo', '$filter', 'INTER_DYSFONCTIONNEMENTS');
        });

        describe('algo', function () {
            var intervention = {
                "groupmesures": [
                    {
                        "profil": {"code": "0", "libelle": "8dB", "description": "offre TV 1/8/18MMax"},
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
                                "duree": 40
                            },
                            {
                                "mont": {},
                                "desc": {},
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
                        "profil": {"code": "1", "libelle": "10dB", "description": "offre Internet 8MMax"},
                        "mesures": [
                            {
                                "mont": {
                                    "debReel": 0,
                                    "debAttActu": 1,
                                    "debAttMinMax": 2,
                                    "margeBruitActu": 4,
                                    "SES": 6,
                                    "CRC": 7,
                                    "FEC": 8,
                                    "attenu": 9
                                },
                                "desc": {
                                    "debReel": 0,
                                    "debAttActu": 1,
                                    "debAttMinMax": 2,
                                    "margeBruitActu": 4,
                                    "SES": 6,
                                    "CRC": 7,
                                    "FEC": 8,
                                    "attenu": 9
                                },
                                "condition": "Disjoncteur EDF OFF",
                                "point": "RE",
                                "date": 16565165165,
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

            it('erreur si type de mesure inconnue', function () {
                var nmihd = new NmihdAlgo(prop, intervention);
                var mesure = {
                    decision: 'success',
                    point: 'XX'
                };
                try {
                    nmihd.getNextActions(mesure);
                } catch (e) {
                    expect(e).to.not.equal(null);
                }
            });

            describe('RE', function () {
                it('RE3: [dernier SR rouge && not(dernière mesure au RE rouge)] & mesure courante RE verte', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.RE.RE3.intervention);
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'success',
                        point: 'RE'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.RE, {code: 'RE3'})[0].code);
                });

                it('RE5: 1ère RE et pas de mesure rouge', function () {
                    var intervention = {
                        "groupmesures": [
                            {
                                "profil": {"code": "0", "libelle": "8dB", "description": "offre TV 1/8/18MMax"},
                                "mesures": [
                                    {
                                        "date": 956516516511,
                                        "point": "PT",
                                        "condition": "Disjoncteur EDF ON",
                                        "decision": "success",
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
                                        "duree": 40
                                    },
                                    {
                                        "mont": {},
                                        "desc": {},
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
                                "profil": {"code": "1", "libelle": "10dB", "description": "offre Internet 8MMax"},
                                "mesures": [
                                    {
                                        "mont": {
                                            "debReel": 0,
                                            "debAttActu": 1,
                                            "debAttMinMax": 2,
                                            "margeBruitActu": 4,
                                            "SES": 6,
                                            "CRC": 7,
                                            "FEC": 8,
                                            "attenu": 9
                                        },
                                        "desc": {
                                            "debReel": 0,
                                            "debAttActu": 1,
                                            "debAttMinMax": 2,
                                            "margeBruitActu": 4,
                                            "SES": 6,
                                            "CRC": 7,
                                            "FEC": 8,
                                            "attenu": 9
                                        },
                                        "condition": "Disjoncteur EDF OFF",
                                        "point": "RE",
                                        "date": 16565165165,
                                        "decision": "success",
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
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'success',
                        point: 'RE'
                    };
                    expect(nmihd.getNextActions(mesure).actions).to.equal($filter('filter')(prop.RE, {code: 'RE5'})[0].actions);
                });

                it('RE6: mesure courante RE rouge', function () {
                    var intervention = {
                        "groupmesures": [
                            {
                                "profil": {"code": "0", "libelle": "8dB", "description": "offre TV 1/8/18MMax"},
                                "mesures": [
                                    {
                                        "date": 956516516511,
                                        "point": "PT",
                                        "condition": "Disjoncteur EDF ON",
                                        "decision": "success",
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
                                        "duree": 40
                                    },
                                    {
                                        "mont": {},
                                        "desc": {},
                                        "point": "PT",
                                        "date": 16565165165,
                                        "decision": "danger",
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
                                "profil": {"code": "1", "libelle": "10dB", "description": "offre Internet 8MMax"},
                                "mesures": [
                                    {
                                        "mont": {
                                            "debReel": 0,
                                            "debAttActu": 1,
                                            "debAttMinMax": 2,
                                            "margeBruitActu": 4,
                                            "SES": 6,
                                            "CRC": 7,
                                            "FEC": 8,
                                            "attenu": 9,
                                            "desync": false
                                        },
                                        "desc": {
                                            "debReel": 0,
                                            "debAttActu": 1,
                                            "debAttMinMax": 2,
                                            "margeBruitActu": 4,
                                            "SES": 6,
                                            "CRC": 7,
                                            "FEC": 8,
                                            "attenu": 9,
                                            "desync": false
                                        },
                                        "condition": "Disjoncteur EDF OFF",
                                        "point": "RE",
                                        "date": 16565165165,
                                        "decision": "success",
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
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'danger',
                        point: 'RE'
                    };
                    expect(nmihd.getNextActions(mesure).actions).to.equal($filter('filter')(prop.RE, {code: 'RE6'})[0].actions);
                });

                it('RE7: dernière mesure au RE rouge ET not(dernière mesure au SR rouge)', function () {
                    var intervention = {
                        "groupmesures": [
                            {
                                "profil": {"code": "0", "libelle": "8dB", "description": "offre TV 1/8/18MMax"},
                                "mesures": [
                                    {
                                        "date": 956516516511,
                                        "point": "PT",
                                        "condition": "Disjoncteur EDF ON",
                                        "decision": "success",
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
                                        "duree": 40
                                    },
                                    {
                                        "mont": {},
                                        "desc": {},
                                        "point": "PT",
                                        "date": 16565165165,
                                        "decision": "danger",
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
                                "profil": {"code": "1", "libelle": "10dB", "description": "offre Internet 8MMax"},
                                "mesures": [
                                    {
                                        "mont": {
                                            "debReel": 0,
                                            "debAttActu": 1,
                                            "debAttMinMax": 2,
                                            "margeBruitActu": 4,
                                            "SES": 6,
                                            "CRC": 7,
                                            "FEC": 8,
                                            "attenu": 9,
                                            "desync": false
                                        },
                                        "desc": {
                                            "debReel": 0,
                                            "debAttActu": 1,
                                            "debAttMinMax": 2,
                                            "margeBruitActu": 4,
                                            "SES": 6,
                                            "CRC": 7,
                                            "FEC": 8,
                                            "attenu": 9,
                                            "desync": false
                                        },
                                        "condition": "Disjoncteur EDF OFF",
                                        "point": "RE",
                                        "date": 16565165165,
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
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'success',
                        point: 'RE'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.RE, {code: 'RE7'})[0].code);
                });

                it('RE8: dernière mesure au RE rouge ET dernière mesure au SR rouge', function () {
                    var intervention = {
                        "groupmesures": [
                            {
                                "profil": {"code": "0", "libelle": "8dB", "description": "offre TV 1/8/18MMax"},
                                "mesures": [
                                    {
                                        "date": 956516516511,
                                        "point": "SR",
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
                                        "duree": 40
                                    },
                                    {
                                        "mont": {},
                                        "desc": {},
                                        "point": "PT",
                                        "date": 16565165165,
                                        "decision": "danger",
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
                                "profil": {"code": "1", "libelle": "10dB", "description": "offre Internet 8MMax"},
                                "mesures": [
                                    {
                                        "mont": {
                                            "debReel": 0,
                                            "debAttActu": 1,
                                            "debAttMinMax": 2,
                                            "margeBruitActu": 4,
                                            "SES": 6,
                                            "CRC": 7,
                                            "FEC": 8,
                                            "attenu": 9,
                                            "desync": false
                                        },
                                        "desc": {
                                            "debReel": 0,
                                            "debAttActu": 1,
                                            "debAttMinMax": 2,
                                            "margeBruitActu": 4,
                                            "SES": 6,
                                            "CRC": 7,
                                            "FEC": 8,
                                            "attenu": 9,
                                            "desync": false
                                        },
                                        "condition": "Disjoncteur EDF OFF",
                                        "point": "RE",
                                        "date": 16565165165,
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
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'success',
                        point: 'RE'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.RE, {code: 'RE8'})[0].code);
                });
            });

            describe('SR', function () {
                it('SR2: dernier PC rouge & not(SR_act1) & not(SR_act2) & Pas de SR rouge', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.SR.SR2.intervention);
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'success',
                        point: 'SR'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.SR, {code: 'SR2'})[0].code);
                });

                it('SR3: dernier PC rouge & SR_act1 & not(SR_act2) & Pas de SR rouge ' +
                    '& mesure courante SR verte', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.SR.SR3.intervention);
                    intervention.choix = [{code: 'SR_act1'}];

                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'success',
                        point: 'SR'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.SR, {code: 'SR3'})[0].code);
                });

                it('SR4: dernier PC rouge & SR_act2 & Pas de SR rouge', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.SR.SR4.intervention);
                    intervention.choix = [{code: 'SR_act2'}];
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'success',
                        point: 'SR'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.SR, {code: 'SR4'})[0].code);
                });

                it('SR5: dernier PT rouge & Pas de mesure au PC & SR_act3 & Pas de SR rouge', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.SR.SR5.intervention);
                    intervention.choix = [{code: 'SR_act3'}];
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'success',
                        point: 'SR'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.SR, {code: 'SR5'})[0].code);
                });

                it('SR6: dernier PT rouge & Pas de mesure au PC & SR_act4 & Pas de SR rouge', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.SR.SR6.intervention);
                    intervention.choix = [{code: 'SR_act4'}];
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'success',
                        point: 'SR'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.SR, {code: 'SR6'})[0].code);
                });

                it('SR7: dernier PC rouge & Pas de mesure RE', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.SR.SR7.intervention);
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'danger',
                        point: 'SR'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.SR, {code: 'SR7'})[0].code);
                });

                it('SR8: RE_act4 & not(SR_act6)', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.SR.SR8.intervention);
                    intervention.choix = [{code: 'RE_act4'}];
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'danger',
                        point: 'SR'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.SR, {code: 'SR8'})[0].code);
                });

                it('SR9: RE_act3', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.SR.SR9.intervention);
                    intervention.choix = [{code: 'RE_act3'}];
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'danger',
                        point: 'SR'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.SR, {code: 'SR9'})[0].code);
                });

                it('SR10: dernier RE vert', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.SR.SR10.intervention);
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'success',
                        point: 'SR'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.SR, {code: 'SR10'})[0].code);
                });

                it('SR11: Pas de mesure rouge ailleurs', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.SR.SR11.intervention);
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'success',
                        point: 'SR'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.SR, {code: 'SR11'})[0].code);
                });

                it('SR12: dernier RE vert & not(RE_act3) & not(RE_act4) & not(SR_act5)', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.SR.SR12.intervention);
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'danger',
                        point: 'SR'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.SR, {code: 'SR12'})[0].code);
                });

                it('SR13: SR_act5 & not(RE_act3) & not(RE_act4)', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.SR.SR13.intervention);
                    intervention.choix = [{code: 'SR_act5'}];
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'danger',
                        point: 'SR'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.SR, {code: 'SR13'})[0].code);
                });

                it('SR14: SR_act6', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.SR.SR14.intervention);
                    intervention.choix = [{code: 'SR_act6'}];
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'danger',
                        point: 'SR'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.SR, {code: 'SR14'})[0].code);
                });

                it('SR15-1: dernier RE rouge', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.SR.SR151.intervention);
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'danger',
                        point: 'SR'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.SR, {code: 'SR15'})[0].code);
                });

                it('SR15-2: pas de mesure au RE', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.SR.SR152.intervention);
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'danger',
                        point: 'SR'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.SR, {code: 'SR15'})[0].code);
                });

                it('SR16: SR rouge corrigée', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.SR.SR16.intervention);
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'success',
                        point: 'SR'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.SR, {code: 'SR16'})[0].code);
                });
            });

            describe('PC', function () {
                it('PC3: [not(PC_act2) & Pas de mesure au PT] & mesure courante PC verte', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.PC.PC3.intervention);
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'success',
                        point: 'PC'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.PC, {code: 'PC3'})[0].code);
                });

                it('PC4: [not(PC_act2) & dernière mesure au PT rouge & dernière mesure au PC rouge] ' +
                    '& mesure courante verte ', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.PC.PC4.intervention);
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'success',
                        point: 'PC'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.PC, {code: 'PC4'})[0].code);
                });

                it('PC5: [not(PC_act2) & dernière mesure au PT verte ] ' +
                    '& mesure courante verte ', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.PC.PC5.intervention);
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'success',
                        point: 'PC'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.PC, {code: 'PC5'})[0].code);
                });

                it('PC6: [(PC_act2)] & mesure courante verte ', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.PC.PC6.intervention);
                    intervention.choix = [{code: 'PC_act2'}];
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'success',
                        point: 'PC'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.PC, {code: 'PC6'})[0].code);
                });

                it('PC7: [Pas de mesure à la SR & not(SR_act1) & not(SR_act2)] & mesure courante rouge ', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.PC.PC7.intervention);
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'danger',
                        point: 'PC'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.PC, {code: 'PC7'})[0].code);
                });

                it('PC8: [dernière mesure au PT rouge ' +
                    '& not(dernière mesure au PC rouge) (elle peut être verte, ou n\'existe pas)] ' +
                    '& mesure courante verte ', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.PC.PC8.intervention);
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'success',
                        point: 'PC'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.PC, {code: 'PC8'})[0].code);
                });

                it('PC9: [dernier SR verte & SR_act2] ' +
                    '& mesure courante rouge ', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.PC.PC9.intervention);
                    intervention.choix = [{code: 'SR_act2'}];
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'danger',
                        point: 'PC'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.PC, {code: 'PC9'})[0].code);
                });

                //todo pas possible de passer dans ce cas sinon collision avec PC3 et PC6
                xit('PC10: [dernier SR verte & pas de mesure au PT] ' +
                    '& mesure courante verte ', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.PC.PC10.intervention);
                    intervention.choix = [{code: 'PC_act2'}];
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'success',
                        point: 'PC'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.PC, {code: 'PC10'})[0].code);
                });

                xit('PC11: [dernier SR verte & dernière mesure au PT verte] ' +
                    '& mesure courante verte ', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.PC.PC11.intervention);

                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'success',
                        point: 'PC'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.PC, {code: 'PC11'})[0].code);
                });

                it('PC12: [SR_act1 & not(SR_act2)] ' +
                    '& mesure courante rouge ', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.PC.PC12.intervention);
                    intervention.choix = [{code: 'SR_act1'}];

                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'danger',
                        point: 'PC'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.PC, {code: 'PC12'})[0].code);
                });

                it('PC13: [dernier SR verte & not(SR_act1) & not(SR_act2)] ' +
                    '& mesure courante rouge ', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.PC.PC13.intervention);

                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'danger',
                        point: 'PC'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.PC, {code: 'PC13'})[0].code);
                });

                it('PC14: [dernier SR rouge & Pas de mesure au RE & not(SR_act1) & not(SR_act2)] ' +
                    '& mesure courante rouge ', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.PC.PC14.intervention);

                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'danger',
                        point: 'PC'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.PC, {code: 'PC14'})[0].code);
                });
            });

            describe('PT', function () {
                it('PT6: [Pas de mesure PM] & mesure courante PT verte', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.PT.PT6.intervention);
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'success',
                        point: 'PT'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.PT, {code: 'PT6'})[0].code);
                });
                it('PT7: [Une mesure rouge ailleurs (RE, SR, PC, PT) qui été corrigée ' +
                    '& dernier PM vert] & mesure courante PT verte', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.PT.PT7.intervention);
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'success',
                        point: 'PT'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.PT, {code: 'PT7'})[0].code);
                });
                it('PT8: [Pas de mesure rouge ailleurs (RE, SR, PC, PT, PM) & dernier PM vert ' +
                    '& not(absence de synchronisation: nouveau client qui n\'a jamais fonctionné)] ' +
                    '& mesure courante PT verte', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.PT.PT8.intervention);
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'success',
                        point: 'PT'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.PT, {code: 'PT8'})[0].code);
                });
                it('PT4: [Pas de mesure rouge ailleurs (RE, SR, PC, PT, PM) & dernier PM vert ' +
                    '& (absence de synchronisation: nouveau client qui n\'a jamais fonctionné)] ' +
                    '& mesure courante PT verte', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.PT.PT4.intervention);
                    intervention.dysfonctionnements = {
                        koJamais: true
                    };
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'success',
                        point: 'PT'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.PT, {code: 'PT4'})[0].code);
                });
                it('PT9: [dernière PM rouge] & mesure courante PT verte', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.PT.PT9.intervention);
                    intervention.dysfonctionnements = {
                        koJamais: true
                    };
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'success',
                        point: 'PT'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.PT, {code: 'PT9'})[0].code);
                });
                it('PT10: [dernière PC vert] & mesure courante PT rouge', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.PT.PT10.intervention);
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'danger',
                        point: 'PT'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.PT, {code: 'PT10'})[0].code);
                });
                it('PT11: [il n\'existe pas de mesure au PC] & mesure courante PT rouge', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.PT.PT11.intervention);
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'danger',
                        point: 'PT'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.PT, {code: 'PT11'})[0].code);
                });
                it('PT12: [dernier PC rouge] & mesure courante PT rouge', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.PT.PT12.intervention);
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'danger',
                        point: 'PT'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.PT, {code: 'PT12'})[0].code);
                });
            });

            describe('PM', function () {
                it('PM7: [] & mesure courante PM grise', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.PM.PM7.intervention);
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'gris',
                        point: 'PM'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.PM, {code: 'PM7'})[0].code);
                });
                it('PM8: [Une mesure rouge ailleurs (RE, SR, PC, PT, PM) qui été corrigée' +
                    '& not(PM_act1)] & mesure courante PM verte', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.PM.PM8.intervention);
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'success',
                        point: 'PM'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.PM, {code: 'PM8'})[0].code);
                });
                it('PM10: [Pas de mesure rouge en RE, SR, PC, PT et PM & ' +
                '(absence de synchronisation: nouveau client qui n\'a jamais fonctionné)] ' +
                '& mesure courante PM verte', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.PM.PM10.intervention);
                    intervention.dysfonctionnements = {
                        koJamais: true
                    };
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'success',
                        point: 'PM'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.PM, {code: 'PM10'})[0].code);
                });

                it('PM11: [Pas de PM verte & Pas de mesure au PT] ' +
                    '& mesure courante PM rouge', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.PM.PM11.intervention);
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'danger',
                        point: 'PM'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.PM, {code: 'PM11'})[0].code);
                });

                it('PM12: [dernière PT rouge & not(PT_act1) & not(PT_act2)] ' +
                    '& mesure courante PM rouge', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.PM.PM12.intervention);
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'danger',
                        point: 'PM'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.PM, {code: 'PM12'})[0].code);
                });

                it('PM6: [dernière PT rouge & PT_act1 & not(PT_act2)] ' +
                    '& mesure courante PM rouge', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.PM.PM6.intervention);
                    intervention.choix = [{code: 'PT_act1'}];
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'danger',
                        point: 'PM'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.PM, {code: 'PM6'})[0].code);
                });

                it('PM13: [dernière PT rouge & (PT_act1) & (PT_act2)] ' +
                    '& mesure courante PM rouge', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.PM.PM13.intervention);
                    intervention.choix = [{code: 'PT_act1'},{code: 'PT_act2'}];
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'danger',
                        point: 'PM'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.PM, {code: 'PM13'})[0].code);
                });

                it('PM14: [dernière PT verte] ' +
                    '& mesure courante PM rouge', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.PM.PM14.intervention);
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'danger',
                        point: 'PM'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.PM, {code: 'PM14'})[0].code);
                });

                it('PM15: [PT verte & Pas de mesure rouge ailleurs (RE, SR, PC, PT, PM) ' +
                    '& not(absence de synchronisation: nouveau client qui n\'a jamais fonctionné)] ' +
                    '& mesure courante PM verte', function () {
                    var intervention = angular.copy(mockedDataAlgoNMIHD.PM.PM15.intervention);
                    var nmihd = new NmihdAlgo(prop, intervention);
                    var mesure = {
                        decision: 'success',
                        point: 'PM'
                    };
                    expect(nmihd.getNextActions(mesure).code).to.equal($filter('filter')(prop.PM, {code: 'PM15'})[0].code);
                });
            });
        });
    });
});
