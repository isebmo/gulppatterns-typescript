/* jshint -W117, -W030 */
describe('intervention', function() {
    describe('interventionExist.service', function () {

        beforeEach(function () {
            bard.appModule('app.intervention');
            bard.inject(this, 'interventionExistService', '$resource', '$q', '$httpBackend', '$rootScope');
        });

        bard.verifyNoOutstandingHttpRequests();

        //todo
        xit('should be registered', function () {
            expect(interventionExistService).not.to.equal(null);
        });

        //todo
        xdescribe('service interface ', function () {
            it('should exist existIntervention', function () {
                expect(interventionExistService.existIntervention).to.be.a('function');
            });
        });

        describe('existIntervention', function () {
            it('should return true', function(done) {
                var testedND = '0474345827';
                $httpBackend.when('GET', 'api/private/existIntervention/' + testedND)
                    .respond(200, {exist: true});
                interventionExistService.existIntervention(testedND).then(function (result) {
                    expect(result.exist).to.be.equal(true);
                }).then(done,done);
                $rootScope.$apply();
                $httpBackend.flush();
            });
        });
    });
});
