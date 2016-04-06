/* jshint -W117, -W030 */
describe('intervention', function() {
    describe('interventionStorage.service', function () {

        beforeEach(function () {
            bard.appModule('app.intervention');
            bard.inject(this, 'interventionStorageService', '$httpBackend', '$localForage', '$q', '$rootScope',
            '$interval');
        });

        bard.verifyNoOutstandingHttpRequests();

        it('should be registered', function () {
            expect(interventionStorageService).not.to.equal(null);
        });

        describe('service interface ', function () {
            it('should exist getInterventions', function () {
                expect(interventionStorageService.getInterventions).to.be.a('function');
            });

            it('should exist getIntervention', function () {
                expect(interventionStorageService.getIntervention).to.be.a('function');
            });

            it('should exist getInterventionsFromLocal', function () {
                expect(interventionStorageService.getInterventionsFromLocal).to.be.a('function');
            });
        });

        describe('autosave intervention', function () {
            beforeEach(function () {
                /*sinon.stub(interventionStorageService, 'getInterventionsFromLocal')
                    .returns($q.when({}));
                sinon.stub(interventionStorageService, '_getAutoSaveTimer')
                    .returns($q.when({}));*/
                $httpBackend.when('GET', 'api/public/params')
                    .respond(200, {});
            });

            it('should start autosave interval', function () {
                interventionStorageService.startAutoSave();
                $interval.flush(60001);
                $rootScope.$apply();
                $httpBackend.flush();
            });
        });

        describe('getInterventions', function () {
            it('should return an array of interventions of unmerged dataset', function(done) {
                $httpBackend.when('GET', 'api/private/interventions')
                    .respond(200, mockedDataInterventions.getInterventions(2015, 2016));
                sinon.stub($localForage, 'getItem')
                    .returns($q.when(mockedDataInterventions.getInterventions(2017, 2018)));

                interventionStorageService.getInterventions({}).then(function (listInter) {
                    expect(listInter).to.be.a('array');
                    expect(listInter.length).to.equal(6);
                }).then(done, done);
                $httpBackend.flush();
                $rootScope.$apply();
            });

            it('should merge duplicate entries', function(done) {
                $httpBackend.when('GET', 'api/private/interventions')
                    .respond(200, mockedDataInterventions.getInterventions(2015, 2016));
                sinon.stub($localForage, 'getItem')
                    .returns($q.when(mockedDataInterventions.getInterventions(2015, 2018)));

                interventionStorageService.getInterventions({}).then(function (listInter) {
                    expect(listInter).to.be.a('array');
                    expect(listInter.length).to.equal(3);
                }).then(done, done);
                $httpBackend.flush();
                $rootScope.$apply();
            });

            it('should filter by ND', function(done) {
                $httpBackend.when('GET', 'api/private/interventions/0123456789')
                    .respond(200, mockedDataInterventions.getInterventions(2015, 2016));
                sinon.stub($localForage, 'getItem')
                    .returns($q.when(mockedDataInterventions.getInterventions(2015, 2018)));

                interventionStorageService.getInterventions({nd:'0123456789'}).then(function (listInter) {
                    expect(listInter).to.be.a('array');
                    expect(listInter.length).to.equal(2);
                }).then(done, done);
                $httpBackend.flush();
                $rootScope.$apply();
            });

            it('should filter by date', function(done) {
                var lnDate = new Date(2015, 1, 1).getTime();
                var testedND = '0123456789';
                $httpBackend.when('GET', 'api/private/interventions/' + testedND + '/' + lnDate)
                    .respond(200, mockedDataInterventions.getInterventions(2015, 2016));
                sinon.stub($localForage, 'getItem')
                    .returns($q.when(mockedDataInterventions.getInterventions(2015, 2018)));

                interventionStorageService.getInterventions({nd: testedND, date: lnDate}).then(function (listInter) {
                    expect(listInter).to.be.a('array');
                    expect(listInter.length).to.equal(1);
                }).then(done, done);
                $httpBackend.flush();
                $rootScope.$apply();
            });

            it('should filter by periode', function(done) {
                var lnDateDebut = new Date(2015, 1, 25).getTime();
                var lnDateFin = new Date(2015, 3, 12).getTime();
                $httpBackend
                    .when('GET', 'api/private/interventions?dateDebut=' + lnDateDebut + '&dateFin=' + lnDateFin)
                    .respond(200, mockedDataInterventions.getInterventions(2015, 2016));
                sinon.stub($localForage, 'getItem')
                    .returns($q.when(mockedDataInterventions.getInterventions(2015, 2018)));

                var filter = {
                    periode: {dateDebut: lnDateDebut, dateFin: lnDateFin}
                };
                interventionStorageService.getInterventions(filter).then(function (listInter) {
                    expect(listInter).to.be.a('array');
                    expect(listInter.length).to.equal(2);
                }).then(done, done);
                $httpBackend.flush();
                $rootScope.$apply();
            });
        });
    });
});
