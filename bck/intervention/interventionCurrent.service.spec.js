/* jshint -W117, -W030 */
describe('intervention', function() {
    describe('interventionCurrent.service', function () {

        beforeEach(function () {
            bard.appModule('app.intervention');
            bard.inject(this, 'interventionCurrentService', 'interventionStorageService',
                'interventionUtilsService', '$rootScope', '$q', '$localForage', '$httpBackend');

        });

        bard.verifyNoOutstandingHttpRequests();

        it('should be registered', function () {
            expect(interventionCurrentService).not.to.equal(null);
        });

        describe('service interface', function () {
            it('should exist updateIntervention', function () {
                expect(interventionCurrentService.updateIntervention).to.be.a('function');
            });

            it('should exist setCurrentIntervention', function () {
                expect(interventionCurrentService.setCurrentIntervention).to.be.a('function');
            });

            it('should exist createIntervention', function () {
                expect(interventionCurrentService.createIntervention).to.be.a('function');
            });

            it('should exist getCurrentIntervention', function () {
                expect(interventionCurrentService.getCurrentIntervention).to.be.a('function');
            });
        });

        describe('service behaviour', function () {

            beforeEach(function () {
                interventionUtilsService.setStatutAndRights = function(inter) {
                    return $q.when(inter);
                };
                sinon.stub(interventionStorageService, 'getInterventionsFromLocal')
                    .returns($q.when([{nd:'0', date: new Date(2015, 1, 1)}]));
                sinon.stub($localForage, 'setItem').returns($q.when());
            });

            it('should set the rights current and emit event', function (done) {
                interventionCurrentService.setCurrentIntervention({nd:'0', date: new Date(2015, 1, 1)});
                $rootScope.$on('event:intervention:currentUpdated', function (event, inter) {
                    expect(inter.nd).to.equal('0');
                    done();
                });
                $rootScope.$apply();
            });

            it('should get the setted intevention', function (done) {
                interventionCurrentService.setCurrentIntervention({nd:'0', date: new Date(2015, 1, 1)})
                    .then(interventionCurrentService.getCurrentIntervention)
                    .then(function (inter) {
                        expect(inter.nd).to.equal('0');
                    }).then(done, done);
                $rootScope.$apply();
            });

            it('should updateCurrentIntervention', function (done) {
                $httpBackend.when('GET', 'api/public/params')
                    .respond(200, {});

                interventionCurrentService
                    .setCurrentIntervention({nd:'0', date: new Date(2015, 1, 1)})
                    .then(function () {
                        return interventionCurrentService
                            .updateIntervention({nd:'1', date: new Date(2015, 1, 1)});
                    }).then(interventionCurrentService.getCurrentIntervention)
                    .then(function (inter) {
                        expect(inter.nd).to.equal('1');
                    }).then(done, done);
                $rootScope.$apply();
                $httpBackend.flush();
            });
        });

    });
});
