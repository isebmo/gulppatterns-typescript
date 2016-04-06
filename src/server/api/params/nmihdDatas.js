/**
 * Created by smouret on 16/02/2016.
 */
'use strict';

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

exports.propositions = prop;