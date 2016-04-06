/* jshint -W117, -W030 */
describe('interview', function () {
    describe('interview.service', function () {

        beforeEach(function () {
            bard.appModule('app.mesure');
            bard.inject(this, '$rootScope', 'interviewService', '$httpBackend');

        });

        bard.verifyNoOutstandingHttpRequests();

        var interview = {
            "interview": {
                "questions": [
                    {
                        "type": "PC",
                        "intitule": "Le client est pr&eacute;sent, je peux intervenir &agrave; son domicile",
                        "choix": [
                            {
                                "code": "PC_act1",
                                "libelle": "Oui"
                            },
                            {
                                "code": "PC_act2",
                                "libelle": "Non"
                            },
                            {
                                "code": "PC_act4",
                                "libelle": "Je ne sais pas"
                            }
                        ]
                    },
                    {
                        "type": "SR",
                        "intitule": "",
                        "choix": [
                            {
                                "code": "SR_act3",
                                "libelle": "PC inaccessible"
                            },
                            {
                                "code": "SR_act4",
                                "libelle": "PC accessible"
                            }
                        ]
                    }
                ]
            }
        };
        var interviewPC = interview.interview.questions[0];
        var interviewSR = interview.interview.questions[1];

        it('should be registered', function () {
            expect(interviewService).to.not.equal(null);
        });

        it('should exist function', function () {
            expect(interviewService.getInterview).to.be.a('function');
            expect(interviewService.addInterviewType).to.be.a('function');
            expect(interviewService.deleteInterviewType).to.be.a('function');
        });

        var interventionAvecReponseSR = {
            nd: '0123456789',
            choix: [
                {
                    code: 'SR_act3',
                    interview: {
                        type: 'SR',
                        question: '',
                        reponse: 'PC inaccessible'
                    }
                }
            ]
        };
        var interventionAvecReponsePCetMesurePT = {
            nd: "2222222222",
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
                            "date": 956516516511,
                            "point": "PC",
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
        };
        var interventionAvecReponseSRetMesurePT = {
            nd: "2222222222",
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
                        }
                    ]
                }
            ]
        };
        var interventionSansSRAvecPT = {
            nd: "2222222222",
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
                        }
                    ]
                }
            ]
        };

        describe('interview RG1.1 Une popin à la première mesure PC et lorsqu’aucune mesure n’a été réalisée au PT',
            function () {

                beforeEach(function () {
                    $httpBackend.when('GET', 'api/public/params').respond(200, interview);
                });

                it('Return InterviewPC : Premiere interview PC', function (done) {
                    interviewService.getInterview('PC', interventionAvecReponseSR).then(function (result) {
                        expect(JSON.stringify(result)).to.equal(JSON.stringify(interviewPC));
                    }).then(done, done);
                    $rootScope.$apply();
                    $httpBackend.flush();
                });

                it('Return null : seconde interview PC', function (done) {
                    interviewService.getInterview('PC', interventionAvecReponsePCetMesurePT).then(function (result) {
                        expect(result).to.equal(null);
                    }).then(done, done);
                    $rootScope.$apply();
                });

                it('Return null : seconde interview SR', function (done) {
                    interviewService.getInterview('SR', interventionAvecReponseSRetMesurePT).then(function (result) {
                        expect(result).to.equal(null);
                    }).then(done, done);
                    $rootScope.$apply();
                });

                ////////////////////////////////////////////////////////////

                var interPremiereMesurePCSansPT = {
                    "nd": "2222222222",
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
                var interPremiereMesurePCAvecPT = {
                    "nd": "2222222222",
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
                        }
                    ]
                };

                it('Return interviewPC : Premiere mesure PC et aucune mesure au PT', function (done) {
                    interviewService.getInterview('PC', interPremiereMesurePCSansPT).then(function (result) {
                        expect(JSON.stringify(result)).to.be.equal(JSON.stringify(interviewPC));
                    }).then(done, done);
                    $rootScope.$apply();
                    $httpBackend.flush();
                });

                it('Return null : Premiere mesure PC AVEC mesure au PT', function (done) {
                    interviewService.getInterview('PC', interPremiereMesurePCAvecPT).then(function (result) {
                        expect(result).to.equal(null);
                    }).then(done, done);
                    $rootScope.$apply();
                });

            });
        describe('interview RG2.1 Une popin apparait à la première mesure à la SR et lorsqu’aucune mesure n’a été' +
            ' réalisée au PC et qu’au moins une mesure a été réalisée au PT', function () {

            beforeEach(function () {
                $httpBackend.when('GET', 'api/public/params').respond(200, interview);
            });

            it('Return InterviewSR : Premiere interview SR et Une PT', function (done) {
                interviewService.getInterview('SR', interventionSansSRAvecPT).then(function (result) {
                    expect(JSON.stringify(result)).to.equal(JSON.stringify(interviewSR));
                }).then(done, done);
                $rootScope.$apply();
                $httpBackend.flush();
            });

            it('Return null : seconde interview SR', function (done) {
                interviewService.getInterview('SR', interventionAvecReponseSR).then(function (result) {
                    expect(result).to.equal(null);
                }).then(done, done);
                $rootScope.$apply();
            });

            ////////////////////////////////////////////////////////////

            var interPremiereMesureSRSansPCAvecPT = {
                "nd": "2222222222",
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
                    }
                ]
            };
            var interPremiereMesureSRSansPCSansPT = {
                "nd": "2222222222",
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
                    }
                ]
            };

            it('Return interviewSR : Premiere mesure SR et aucune mesure au PC et au moins une PT', function (done) {
                interviewService.getInterview('SR', interPremiereMesureSRSansPCAvecPT).then(function (result) {
                    expect(JSON.stringify(result)).to.be.equal(JSON.stringify(interviewSR));
                }).then(done, done);
                $rootScope.$apply();
                $httpBackend.flush();
            });

            it('Return null : Premiere mesure SR aucune mesure au PC aucune PT', function (done) {
                interviewService.getInterview('SR', interPremiereMesureSRSansPCSansPT).then(function (result) {
                    expect(result).to.equal(null);
                }).then(done, done);
                $rootScope.$apply();
            });

        });

        /////////////////////////////////////////////////////////////////////////////////////

        var interSansInterview = {
            nd: "2222222222"
        };
        var interAvecInterviewPCEtSR = {
            nd: "2222222222",
            choix: [
                {
                    code: 'PC_act1',
                    interview: {
                        type: 'PC',
                        question: 'Le client est pr&eacute;sent, je peux intervenir &agrave; son domicile',
                        reponse: 'Oui'
                    }
                },
                {
                    code: 'SR_act3',
                    interview: {
                        type: 'SR',
                        question: '',
                        reponse: 'PC inaccessible'
                    }
                }
            ]
        };

        describe('Add interview', function () {

            var interTest = {
                nd: "2222222222"
            };
            var interAvecInterviewPC = {
                nd: "2222222222",
                choix: [
                    {
                        code: 'PC_act1',
                        interview: {
                            type: 'PC',
                            question: 'Le client est pr&eacute;sent, je peux intervenir &agrave; son domicile',
                            reponse: 'Oui'
                        }
                    }
                ]
            };

            it('Add interview PC with No interview : intervention avec interview PC', function (done) {
                interviewService.addInterviewType('PC', interTest, interviewPC, interviewPC.choix[0])
                    .then(function (result) {
                        expect(JSON.stringify(result)).to.equal(JSON.stringify(interAvecInterviewPC));
                    }).then(done, done);
                $rootScope.$apply();
            });

            it('Add interview PC with PC Interview ; pas de changement', function (done) {
                interviewService.addInterviewType('PC', interTest, interviewPC, interviewPC.choix[0])
                    .then(function (result) {
                        expect(JSON.stringify(result)).to.equal(JSON.stringify(interAvecInterviewPC));
                    }).then(done, done);
                $rootScope.$apply();
            });

            it('Add interview SR with PC Interview ; Intervention with PC and SR interview', function (done) {
                interviewService.addInterviewType('SR', interAvecInterviewPC, interviewSR, interviewSR.choix[0])
                    .then(function (result) {
                        expect(JSON.stringify(result)).to.equal(JSON.stringify(interAvecInterviewPCEtSR));
                    }).then(done, done);
                $rootScope.$apply();
            });

        });

        describe('Delete interview', function () {

            var interAvecInterviewPC = {
                nd: "2222222222",
                choix: [
                    {
                        code: 'PC_act1',
                        interview: {
                            type: 'PC',
                            question: 'Le client est pr&eacute;sent, je peux intervenir &agrave; son domicile',
                            reponse: 'Oui'
                        }
                    }
                ]
            };
            var interNoInterviewPC = {
                nd: "2222222222",
                choix: []
            };

            it('Delete interview PC with No interview : pas de consequence', function (done) {
                interviewService.deleteInterviewType('PC', interSansInterview).then(function (result) {
                    expect(JSON.stringify(result)).to.equal(JSON.stringify(interSansInterview));
                }).then(done, done);
                $rootScope.$apply();
            });

            it('Delete interview PC with PC interview : suppression interview PC dans intervention', function (done) {
                interviewService.deleteInterviewType('PC', interAvecInterviewPC).then(function (result) {
                    expect(JSON.stringify(result)).to.equal(JSON.stringify(interNoInterviewPC));
                }).then(done, done);
                $rootScope.$apply();
            });

            it('Delete interview PC with PC and SR interview : suppression interview PC, reste interview SR dans' +
                ' intervention',
                function (done) {
                    var interAvecInterviewPCNullEtSR = {
                        nd: "2222222222",
                        choix: [
                            {
                                code: 'SR_act3',
                                interview: {
                                    type: 'SR',
                                    question: '',
                                    reponse: 'PC inaccessible'
                                }
                            }
                        ]
                    };

                    interviewService.deleteInterviewType('PC', interAvecInterviewPCEtSR).then(function (result) {
                        expect(JSON.stringify(result)).to.equal(JSON.stringify(interAvecInterviewPCNullEtSR));
                    }).then(done, done);
                    $rootScope.$apply();
                });

        });

    });
});
