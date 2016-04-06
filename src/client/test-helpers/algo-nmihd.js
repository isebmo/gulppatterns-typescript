var mockedDataAlgoNMIHD = (function () {

    var RE = {
        RE3: {
            intervention: {
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
                                "point": "SR",
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
                                "point": "PC",
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
            },
        }
    };

    var SR = {
        SR2: {
            intervention: {
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
                                "point": "PC",
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
            },
        },
        SR3: {
            intervention: {
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
                                "point": "PC",
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
            }
        },
        SR4: {
            intervention: {
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
                                "point": "PC",
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
                ],
            }
        },
        SR5: {
            intervention: {
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
                                "date": 956516516511,
                                "point": "SR",
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
                        "mesures": []
                    }
                ],
            }
        },
        SR6: {
            intervention: {
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
                                "date": 956516516511,
                                "point": "SR",
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
                        "mesures": []
                    }
                ],
            }
        },
        SR7: {
            intervention: {
                "groupmesures": [
                    {
                        "profil": {"code": "0", "libelle": "8dB", "description": "offre TV 1/8/18MMax"},
                        "mesures": [
                            {
                                "date": 956516516511,
                                "point": "PC",
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
                                "date": 956516516511,
                                "point": "SR",
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
                                "point": "PC",
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
                        "mesures": []
                    }
                ]
            }
        },
        SR8: {
            intervention: {
            }
        },
        SR9: {
            intervention: {
            }
        },
        SR10: {
            intervention: {
                "groupmesures": [
                    {
                        "profil": {"code": "0", "libelle": "8dB", "description": "offre TV 1/8/18MMax"},
                        "mesures": [
                            {
                                "date": 956516516511,
                                "point": "RE",
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
                            }
                        ]
                    }
                ]
            }
        },
        SR11: {
            intervention: {}
        },
        SR12: {
            intervention: {
                "groupmesures": [
                    {
                        "profil": {"code": "0", "libelle": "8dB", "description": "offre TV 1/8/18MMax"},
                        "mesures": [
                            {
                                "date": 956516516511,
                                "point": "RE",
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
                            }
                        ]
                    }
                ]
            }
        },
        SR13: {
            intervention: {
            }
        },
        SR14: {
            intervention: {
            }
        },
        SR151: {
            intervention: {
                "groupmesures": [
                    {
                        "profil": {"code": "0", "libelle": "8dB", "description": "offre TV 1/8/18MMax"},
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
                                "duree": 40
                            }
                        ]
                    }
                ]
            }
        },
        SR152: {
            intervention: {
                "groupmesures": []
            }
        },
        SR16: {
            intervention: {
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
                                "date": 956516516511,
                                "point": "RE",
                                "condition": "Disjoncteur EDF ON",
                                "decision": "default",
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
                            }
                        ]
                    }
                ]
            }
        }

    };

    var PC = {
        PC3: {
            intervention: {
                "groupmesures": [
                    {
                        "profil": {"code": "0", "libelle": "8dB", "description": "offre TV 1/8/18MMax"},
                        "mesures": [
                            {
                                "date": 956516516511,
                                "point": "RE",
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
                                "point": "RE",
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
                                "point": "PC",
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
            },
        },
        PC4: {
            intervention: {
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
                                "point": "PC",
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
            },
            interview_PC_act2: {
                PC: {
                    question: 'Le client est pr&eacute;sent, je peux intervenir &agrave; son domicile',
                    reponse: {
                        code: 'PC_act2',
                        libelle: 'Oui'
                    }
                }

            }
        },
        PC5: {
            intervention: {
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
                                "point": "PC",
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
            },
            interview_PC_act2: {
                PC: {
                    question: 'Le client est pr&eacute;sent, je peux intervenir &agrave; son domicile',
                    reponse: {
                        code: 'PC_act2',
                        libelle: 'Oui'
                    }
                }

            }
        },
        PC6: {
            intervention: {
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
                                "point": "PC",
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
            },
            interview_PC_act2: {
                PC: {
                    question: 'Le client est pr&eacute;sent, je peux intervenir &agrave; son domicile',
                    reponse: {
                        code: 'PC_act2',
                        libelle: 'Oui'
                    }
                }

            }
        },
        PC7: {
            intervention: {
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
                                "point": "PC",
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
            },
            interview_PC_act2: {
                PC: {
                    question: 'Le client est pr&eacute;sent, je peux intervenir &agrave; son domicile',
                    reponse: {
                        code: 'PC_act2',
                        libelle: 'Oui'
                    }
                }

            }
        },
        PC8: {
            intervention: {
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
                                "point": "RE",
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
            },
            interview_PC_act2: {
                PC: {
                    question: 'Le client est pr&eacute;sent, je peux intervenir &agrave; son domicile',
                    reponse: {
                        code: 'PC_act2',
                        libelle: 'Oui'
                    }
                }

            }
        },
        PC9: {
            intervention: {
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
                                "point": "RE",
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
                                "point": "SR",
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
            },
            interview_SR_act2: {
                SR: {
                    question: 'Le client est pr&eacute;sent, je peux intervenir &agrave; son domicile',
                    reponse: {
                        code: 'SR_act2',
                        libelle: 'Oui'
                    }
                }

            }
        },
        PC10: {
            intervention: {
                "groupmesures": [
                    {
                        "profil": {"code": "0", "libelle": "8dB", "description": "offre TV 1/8/18MMax"},
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
                                "duree": 40
                            },
                            {
                                "mont": {},
                                "desc": {},
                                "point": "RE",
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
                                "point": "SR",
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
            },
            interview_PC_act2: {
                PC: {
                    question: 'Le client est pr&eacute;sent, je peux intervenir &agrave; son domicile',
                    reponse: {
                        code: 'PC_act2',
                        libelle: 'Oui'
                    }
                }

            }
        },
        PC11: {
            intervention: {
                "groupmesures": [
                    {
                        "profil": {"code": "0", "libelle": "8dB", "description": "offre TV 1/8/18MMax"},
                        "mesures": [
                            {
                                "date": 956516516511,
                                "point": "SR",
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
                                "point": "RE",
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
                                "point": "PT",
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
            },
            interview_PC_act2: {
                PC: {
                    question: 'Le client est pr&eacute;sent, je peux intervenir &agrave; son domicile',
                    reponse: {
                        code: 'PC_act2',
                        libelle: 'Oui'
                    }
                }

            }
        },
        PC12: {
            intervention: {
                "groupmesures": [
                    {
                        "profil": {"code": "0", "libelle": "8dB", "description": "offre TV 1/8/18MMax"},
                        "mesures": [
                            {
                                "date": 956516516511,
                                "point": "SR",
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
                                "point": "PC",
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
                                "point": "PT",
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
            },
            interview_SR_act1: {
                SR: {
                    question: 'Le client est pr&eacute;sent, je peux intervenir &agrave; son domicile',
                    reponse: {
                        code: 'SR_act1',
                        libelle: 'Oui'
                    }
                }

            }
        },
        PC13: {
            intervention: {
                "groupmesures": [
                    {
                        "profil": {"code": "0", "libelle": "8dB", "description": "offre TV 1/8/18MMax"},
                        "mesures": [
                            {
                                "date": 956516516511,
                                "point": "SR",
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
                                "point": "PC",
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
                                "point": "PT",
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
            },
            interview_SR_act1: {
                SR: {
                    question: 'Le client est pr&eacute;sent, je peux intervenir &agrave; son domicile',
                    reponse: {
                        code: 'SR_act1',
                        libelle: 'Oui'
                    }
                }

            }
        },
        PC14: {
            intervention: {
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
                                "point": "PC",
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
                                "point": "PT",
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
            },
            interview_SR_act1: {
                SR: {
                    question: 'Le client est pr&eacute;sent, je peux intervenir &agrave; son domicile',
                    reponse: {
                        code: 'SR_act1',
                        libelle: 'Oui'
                    }
                }

            }
        }
    };

    var PT = {
        PT4: {
            intervention: {
                "groupmesures": [
                    {
                        "profil": {"code": "0", "libelle": "8dB", "description": "offre TV 1/8/18MMax"},
                        "mesures": [
                            {
                                "date": 956516516511,
                                "point": "RE",
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
                                "point": "RE",
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
                                "point": "PM",
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
            },
        },
        PT6: {
            intervention: {
                "groupmesures": [
                    {
                        "profil": {"code": "0", "libelle": "8dB", "description": "offre TV 1/8/18MMax"},
                        "mesures": [
                            {
                                "date": 956516516511,
                                "point": "RE",
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
                                "point": "RE",
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
                                "point": "PC",
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
            },
        },
        PT7: {
            intervention: {
                "groupmesures": [
                    {
                        "profil": {"code": "0", "libelle": "8dB", "description": "offre TV 1/8/18MMax"},
                        "mesures": [
                            {
                                "date": 12345,
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
                                "duree": 40
                            },
                            {
                                "mont": {},
                                "desc": {},
                                "point": "RE",
                                "date": 123456,
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
                                "point": "PM",
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
            },
        },
        PT8: {
            intervention: {
                "groupmesures": [
                    {
                        "profil": {"code": "0", "libelle": "8dB", "description": "offre TV 1/8/18MMax"},
                        "mesures": [
                            {
                                "date": 956516516511,
                                "point": "RE",
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
                                "point": "RE",
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
                                "point": "PM",
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
            },
        },
        PT9: {
            intervention: {
                "groupmesures": [
                    {
                        "profil": {"code": "0", "libelle": "8dB", "description": "offre TV 1/8/18MMax"},
                        "mesures": [
                            {
                                "date": 956516516511,
                                "point": "PM",
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
                                "point": "RE",
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
                                "point": "PC",
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
            },
        },
        PT10: {
            intervention: {
                "groupmesures": [
                    {
                        "profil": {"code": "0", "libelle": "8dB", "description": "offre TV 1/8/18MMax"},
                        "mesures": [
                            {
                                "date": 956516516511,
                                "point": "RE",
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
                                "point": "RE",
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
                                "point": "PC",
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
            },
        },
        PT11: {
            intervention: {
                "groupmesures": [
                    {
                        "profil": {"code": "0", "libelle": "8dB", "description": "offre TV 1/8/18MMax"},
                        "mesures": [
                            {
                                "date": 956516516511,
                                "point": "RE",
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
                                "point": "RE",
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
                                "point": "PT",
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
            },
        },
        PT12: {
            intervention: {
                "groupmesures": [
                    {
                        "profil": {"code": "0", "libelle": "8dB", "description": "offre TV 1/8/18MMax"},
                        "mesures": [
                            {
                                "date": 956516516511,
                                "point": "RE",
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
                                "point": "RE",
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
                                "point": "PC",
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
            },
        }
    };

    var PM = {
        PM6: {
            intervention: {
                "groupmesures": [
                    {
                        "profil": {"code": "0", "libelle": "8dB", "description": "offre TV 1/8/18MMax"},
                        "mesures": [
                            {
                                "date": 123456789,
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
                                "date": 1234567890,
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
                                "point": "PC",
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
            },
            interview_PT_act1: {
                PT: {
                    question: 'Le client est pr&eacute;sent, je peux intervenir &agrave; son domicile',
                    reponse: {
                        code: 'PT_act1',
                        libelle: 'Oui'
                    }
                }
            },
            interview_PT_act2: {
                PT: {
                    question: 'Le client est pr&eacute;sent, je peux intervenir &agrave; son domicile',
                    reponse: {
                        code: 'PT_act2',
                        libelle: 'Oui'
                    }
                }
            }
        },
        PM7: {
            intervention: {
                "groupmesures": [
                    {
                        "profil": {"code": "0", "libelle": "8dB", "description": "offre TV 1/8/18MMax"},
                        "mesures": [
                            {
                                "date": 956516516511,
                                "point": "RE",
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
                                "point": "RE",
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
                                "point": "PC",
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
            },
        },
        PM8: {
            intervention: {
                "groupmesures": [
                    {
                        "profil": {"code": "0", "libelle": "8dB", "description": "offre TV 1/8/18MMax"},
                        "mesures": [
                            {
                                "date": 123456789,
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
                                "duree": 40
                            },
                            {
                                "mont": {},
                                "desc": {},
                                "point": "RE",
                                "date": 1234567890,
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
                                "point": "PC",
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
            },
        },
        PM10: {
            intervention: {
                "groupmesures": [
                    {
                        "profil": {"code": "0", "libelle": "8dB", "description": "offre TV 1/8/18MMax"},
                        "mesures": [
                            {
                                "date": 123456789,
                                "point": "RE",
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
                                "point": "RE",
                                "date": 1234567890,
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
                                "point": "PC",
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
            },
        },
        PM11: {
            intervention: {
                "groupmesures": [
                    {
                        "profil": {"code": "0", "libelle": "8dB", "description": "offre TV 1/8/18MMax"},
                        "mesures": [
                            {
                                "date": 123456789,
                                "point": "RE",
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
                                "point": "RE",
                                "date": 1234567890,
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
                                "point": "PC",
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
            },
        },
        PM12: {
            intervention: {
                "groupmesures": [
                    {
                        "profil": {"code": "0", "libelle": "8dB", "description": "offre TV 1/8/18MMax"},
                        "mesures": [
                            {
                                "date": 123456789,
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
                                "date": 1234567890,
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
                                "point": "PC",
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
            },
        },
        PM13: {
            intervention: {
                "groupmesures": [
                    {
                        "profil": {"code": "0", "libelle": "8dB", "description": "offre TV 1/8/18MMax"},
                        "mesures": [
                            {
                                "date": 123456789,
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
                                "date": 1234567890,
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
                                "point": "PC",
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
            },
            interview_PT_act1: {
                PT: {
                    question: 'Le client est pr&eacute;sent, je peux intervenir &agrave; son domicile',
                    reponse: {
                        code: 'PT_act1',
                        libelle: 'Oui'
                    }
                }
            }
        },
        PM14: {
            intervention: {
                "groupmesures": [
                    {
                        "profil": {"code": "0", "libelle": "8dB", "description": "offre TV 1/8/18MMax"},
                        "mesures": [
                            {
                                "date": 123456789,
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
                                "date": 1234567890,
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
                                "point": "PC",
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
            },
        },
        PM15: {
            intervention: {
                "groupmesures": [
                    {
                        "profil": {"code": "0", "libelle": "8dB", "description": "offre TV 1/8/18MMax"},
                        "mesures": [
                            {
                                "date": 123456789,
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
                                "date": 1234567890,
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
                                "point": "PC",
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
            },
        }
    };

    return {
        RE: RE,
        SR: SR,
        PC: PC,
        PT: PT,
        PM: PM
    };

})();
