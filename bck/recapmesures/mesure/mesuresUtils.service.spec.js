/* jshint -W117, -W030 */
describe('mesure service', function () {

    beforeEach(function () {
        bard.appModule('app.intervention');
        bard.appModule('app.mesure');
        bard.inject(this, 'interventionCurrentService', 'mesuresUtilsService', 'MODIFICATION_RIGHT', '$q', '$rootScope');
    });

    bard.verifyNoOutstandingHttpRequests();

    it('should be registered', function () {
        expect(mesuresUtilsService).not.to.equal(null);
    });

    describe('service interface ', function () {

        it('should possess a getGraphData method', function () {
            expect(mesuresUtilsService.getGraphData).to.be.a('function');
        });

        it('should possess a addMesureToCurrentIntervention method', function () {
            expect(mesuresUtilsService.addMesureToCurrentIntervention).to.be.a('function');
        });

        it('should possess a isMesureDeletable method', function () {
            expect(mesuresUtilsService.isMesureDeletable).to.be.a('function');
        });

        it('should possess a deleteMesure method', function () {
            expect(mesuresUtilsService.deleteMesure).to.be.a('function');
        });

    });

    describe('the manipulation of mesure', function () {
        beforeEach(function () {
            sinon.stub(interventionCurrentService, 'getCurrentIntervention').returns($q.when(_getMockedIntervention()));
            sinon.stub(interventionCurrentService, 'updateIntervention').returns($q.when());
            $rootScope.$apply();

            function _getMockedIntervention() {
                return {
                    profilcourant: {code: '1'},
                    rights: [MODIFICATION_RIGHT.ANYTHING_EXCEPT_ND],
                    groupmesures: [
                        {
                            profil: {code: '0'},
                            mesures: [
                                {date: new Date(2015, 0, 1), point: 'RE'},
                                {date: 3543544, point: 'RE'},
                                {date: new Date(2015, 0, 3), point: 'RE'}
                            ]
                        },
                        {
                            profil: {code: '2'},
                            mesures: [
                                {date: new Date(2015, 1, 1), point: 'PT'},
                                {date: new Date(2015, 1, 2), point: 'PC'}
                            ]
                        }
                    ]
                };
            }
        });

        it('should not delete mesure that is not the last of the intervention', function (done) {
            mesuresUtilsService.deleteMesure({date: new Date(2015, 0, 3)}).then(function () {
                interventionCurrentService.getCurrentIntervention().then(function (intervention) {
                    expect(intervention.groupmesures[0].mesures.length).to.equal(3);
                }).then(done, done);
            });
            $rootScope.$apply();
        });

        it('should allow to delete the last mesure of the intervention', function (done) {
            mesuresUtilsService.deleteMesure({date: new Date(2015, 1, 2)}).then(function () {
                interventionCurrentService.getCurrentIntervention().then(function (intervention) {
                    expect(intervention.groupmesures[1].mesures.length).to.equal(1);
                }).then(done, done);
            });
            $rootScope.$apply();
        });

        it('should add mesure to the intervention', function (done) {
            mesuresUtilsService.addMesureToCurrentIntervention({date: new Date(2015, 1, 3)}).then(function () {
                interventionCurrentService.getCurrentIntervention().then(function (intervention) {
                    expect(intervention.groupmesures.length).to.equal(3);
                }).then(done, done);
            });
            $rootScope.$apply();
        });

    });

    describe('the manipulation of interview', function () {

        it('One PC mesure : should delete the last mesure PC of the intervention AND delete interview PC',
            function (done) {
            sinon.stub(interventionCurrentService, 'getCurrentIntervention').returns(
                $q.when(_getMockedInterventionOnePC()));
            sinon.stub(interventionCurrentService, 'updateIntervention').returns($q.when());
            $rootScope.$apply();

            function _getMockedInterventionOnePC() {
                return {
                    profilcourant: {code: '1'},
                    rights: [MODIFICATION_RIGHT.ANYTHING_EXCEPT_ND],
                    groupmesures: [
                        {
                            profil: {code: '0'},
                            mesures: [
                                {date: new Date(2015, 0, 1), point: 'RE'},
                                {date: 3543544, point: 'RE'},
                                {date: new Date(2015, 0, 3), point: 'RE'}
                            ]
                        },
                        {
                            profil: {code: '2'},
                            mesures: [
                                {date: new Date(2015, 1, 1), point: 'PT'},
                                {date: new Date(2015, 1, 2), point: 'PC'}
                            ]
                        }
                    ],
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
            }

            mesuresUtilsService.deleteMesure({date: new Date(2015, 1, 2), point: 'PC'}).then(function () {
                interventionCurrentService.getCurrentIntervention().then(function (intervention) {
                    expect(intervention.groupmesures[1].mesures.length).to.equal(1);
                    expect(intervention.choix.length).to.equal(0);
                }).then(done, done);
            });
            $rootScope.$apply();
        });

        it('Two PC mesure : should delete the last mesure PC of the intervention AND NOT delete interview PC',
            function (done) {
            sinon.stub(interventionCurrentService, 'getCurrentIntervention').returns(
                $q.when(_getMockedInterventionTwoPC()));
            sinon.stub(interventionCurrentService, 'updateIntervention').returns($q.when());
            $rootScope.$apply();

            function _getMockedInterventionTwoPC() {
                return {
                    nd: "0123456789",
                    profilcourant: {code: '1'},
                    rights: [MODIFICATION_RIGHT.ANYTHING_EXCEPT_ND],
                    groupmesures: [
                        {
                            profil: {code: '0'},
                            mesures: [
                                {date: new Date(2015, 0, 1), point: 'RE'},
                                {date: 3543544, point: 'RE'},
                                {date: new Date(2015, 0, 3), point: 'RE'}
                            ]
                        },
                        {
                            profil: {code: '2'},
                            mesures: [
                                {date: new Date(2015, 1, 1), point: 'PC'},
                                {date: new Date(2015, 1, 2), point: 'PC'}
                            ]
                        }
                    ],
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
            }

            mesuresUtilsService.deleteMesure({date: new Date(2015, 1, 2), point: 'PC'}).then(function () {
                interventionCurrentService.getCurrentIntervention().then(function (intervention) {
                    expect(intervention.groupmesures[1].mesures.length).to.equal(1);
                    expect(intervention.choix).not.to.equal(null);
                    expect(intervention.choix.length).to.equal(1);
                }).then(done, done);
            });
            $rootScope.$apply();
        });

    });

    describe('behaviour of isMesureDeletable', function () {

        beforeEach(function () {
            sinon.stub(interventionCurrentService, 'getCurrentIntervention').returns($q.when(_getMockedIntervention()));
            $rootScope.$apply();

            function _getMockedIntervention() {
                return {
                    rights: [MODIFICATION_RIGHT.ANYTHING_EXCEPT_ND],
                    groupmesures: [
                        {
                            mesures: [
                                {date: new Date(2015, 0, 1)},
                                {date: new Date(2015, 0, 2)},
                                {date: new Date(2015, 0, 3)}
                            ]
                        },
                        {
                            mesures: [
                                {date: new Date(2015, 1, 1)},
                                {date: new Date(2015, 1, 2)},
                                {date: new Date(2015, 1, 3)}
                            ]
                        }
                    ]
                };
            }
        });

        it('should be true for the last mesure of the last groupemesure', function (done) {
            mesuresUtilsService.isMesureDeletable({date: new Date(2015, 1, 3)}).then(function (bool) {
                expect(bool).to.equal(true);
            }).then(done, done);
            $rootScope.$apply();
        });

        it('should be false for the last mesure of a non-last groupemesure', function () {
            mesuresUtilsService.isMesureDeletable({date: new Date(2015, 0, 3)}).then(function (bool) {
                expect(bool).to.equal(false);
            });
            $rootScope.$apply();
        });

        it('should be false for a non existing mesure', function () {
            mesuresUtilsService.isMesureDeletable({date: new Date(2014, 0, 3)}).then(function (bool) {
                expect(bool).to.equal(false);
            });
            $rootScope.$apply();
        });
    });

});
