/* jshint -W117, -W030 */
describe('Authentification', function () {
    describe('auth.service', function () {
        var userETR = {
            login: 'pierre paul',
            nd: '0123456789',
            pidiRoles: ['saisi_fact_gdp', 'ptools', 'mutpc_ptools', 'carto_ptools', 'vqse_ptools', 'helios_ptools'],
            siuId: '1117889767819996',
            idETL: '207',
            codeETL: 'ETL207',
            type: 'SIU',
            userId: 'yves',
            connectionId: '1117889767819996',
            baseEcoleUser: false,
            isLocal: false
        };
        var userOrange = {
            login: 'pierre paul',
            nd: '0123456789',
            pidiRoles: ['saisi_fact_gdp', 'ptools', 'mutpc_ptools', 'carto_ptools'],
            type: 'GASSI',
            userId: 'yves',
            connectionId: '1117889767819996',
            baseEcoleUser: false,
            cuid: 'ABBA7335',
            isLocal: false
        };
        var $httpFlush;

        beforeEach(function () {
            bard.appModule('blocks.auth');
            bard.appModule('app.core');
            bard.inject(this, 'AuthService', 'User', '$httpBackend', '$rootScope', 'accessRight', '$q');
        });

        bard.verifyNoOutstandingHttpRequests();

        it('should be registered', function () {
            expect(AuthService).not.to.equal(null);
        });

        describe('service interface ', function () {
            it('should exist getUser', function () {
                expect(AuthService.getUser).to.be.a('function');
            });

            it('should exist getLastConnectedUser', function () {
                expect(AuthService.getLastConnectedUser).to.be.a('function');
            });
        });

        describe('service methods', function () {
            beforeEach(function () {
                $httpBackend.when('GET', 'api/connect').respond(200, userETR);
                $httpFlush = $httpBackend.flush;
            });

            it('should User exist', function () {
                expect(AuthService.getUser()).not.to.equal(null);
                $httpFlush();
            });

            it('should User to be equal to mock', function (done) {
                var p = AuthService.getUser();
                p.then(function (u) {
                    userETR.lastConnection = u.lastConnection;
                    expect(angular.equals(u, userETR)).to.be.true;
                }).then(done, done);
                $httpFlush();
            });
        });

        describe('specific ETR tests', function () {
            beforeEach(function () {
                $httpBackend.when('GET', 'api/connect').respond(200, userETR);
                $httpFlush = $httpBackend.flush;
            });

            it('should be an ETR user', function (done) {
                var p = AuthService.getUser();
                p.then(function (u) {
                    expect(u.isETR()).to.be.true;
                }).then(done, done);
                $httpFlush();
            });

            it('should have access module Helios', function (done) {
                var p = AuthService.getUser();
                p.then(function (u) {
                    expect(u.hasRightToModule(accessRight.module.HELIOS)).to.be.true;
                }).then(done, done);
                $httpFlush();
            });
        });

        describe('specific Orange tests', function () {
            beforeEach(function () {
                $httpBackend.when('GET', 'api/connect').respond(200, userOrange);
                $httpFlush = $httpBackend.flush;
            });

            it('should be an Orange user', function (done) {
                var p = AuthService.getUser();
                p.then(function (u) {
                    expect(u.isETR()).to.be.false;
                }).then(done, done);
                $httpFlush();
            });

            it('should not have access module Helios', function (done) {
                var p = AuthService.getUser();
                p.then(function (u) {
                    expect(u.hasRightToModule(accessRight.module.HELIOS)).to.be.false;
                }).then(done, done);
                $httpFlush();
            });
        });

    });
});
