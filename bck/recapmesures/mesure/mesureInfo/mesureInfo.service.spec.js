/* jshint -W117, -W030 */
describe('app.recapmesures.mesure.info', function () {
    describe('mesureInfo.service', function () {

        beforeEach(function () {
            bard.appModule('app.mesure');
            bard.inject(this, '$rootScope', 'mesureInfo', '$q', 'interventionCurrentService');

        });

        bard.verifyNoOutstandingHttpRequests();

        it('should be registered', function () {
            expect(mesureInfo).to.not.equal(null);
        });

        it('should exist function', function () {
            expect(mesureInfo.showInfo).to.be.a('function');
        });

        var interventionWithRE = {
            "nd": "2222222222",
            "interview": {
                "PC": {
                    "question": "Le client est pr&eacute;sent, je peux intervenir &agrave; son domicile",
                    "reponse": {
                        "code": "PC_act1",
                    }
                }
            },
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
        };

        describe('mesureInfo: should show mesure',
            function () {

                it('shoud show info because there is no RE', function (done) {
                    sinon.stub(interventionCurrentService, 'getCurrentIntervention').returns($q.when({}));
                    mesureInfo.showInfo('RE').then(function (result) {
                        expect(result).to.equal(true);
                    }).then(done, done);
                    $rootScope.$apply();
                });

                it('shoud not show info because there is RE', function (done) {
                    sinon.stub(interventionCurrentService, 'getCurrentIntervention').returns($q.when(interventionWithRE));
                    mesureInfo.showInfo('RE').then(function (result) {
                        expect(result).to.equal(false);
                    }).then(done, done);
                    $rootScope.$apply();
                });


            });

    });
});
