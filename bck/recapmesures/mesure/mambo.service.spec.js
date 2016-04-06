/* jshint -W117, -W030 */
describe('mambo service', function () {

    beforeEach(function () {
        bard.appModule('app.mesure');
        bard.inject(this, '$q', 'mamboService', '$httpBackend', '$rootScope');
    });

    beforeEach(function () {
        $httpBackend.when('GET', 'api/public/params').respond(200, {});
    });

    bard.verifyNoOutstandingHttpRequests();

    it('should be registered', function () {
        expect(mamboService).not.to.equal(null);
    });

    describe('service interface ', function () {

        it('should possess a getParamLines method', function () {
            expect(mamboService.getParamLines).to.be.a('function');
        });

        it('should possess a getGraphic method', function () {
            expect(mamboService.getGraphic).to.be.a('function');
        });

        it('should possess a getStatus method', function () {
            expect(mamboService.getStatus).to.be.a('function');
        });

        it('should possess a isSync method', function () {
            expect(mamboService.isSync).to.be.a('function');
        });

    });

    describe('the paramLines API', function () {
        beforeEach(function () {
            var data = {
                realFlowUp: 4,
                maxFlowUp: 4,
                noiseMarginUp: 4,
                esUp: 5,
                crcUp: 4,
                fecUp: 5,
                attnUp: 4,
                realFlowDown: 5,
                maxFlowDown: 4,
                noiseMarginDown: 5,
                esDown: 4,
                crcDown: 5,
                fecDown: 4,
                isSynchronized: true
            };

            $httpBackend.when('GET', 'paramLines')
                .respond(200, data);
        });

        it('should get param', function (done) {
            mamboService.getParamLines().then(function (data) {
                expect(data.mont).not.to.equal.null;
                expect(data.desc).not.to.equal.null;
            }).then(done, done);
            $httpBackend.flush();
        });
    });

    describe('the graphic API', function () {
        beforeEach(function () {
            var data = {
                graphicType: 'mj',
                points: []
            };

            $httpBackend.when('GET', 'graphic')
                .respond(200, data);
        });

        it('should get graphic', function (done) {
            mamboService.getGraphic().then(function (data) {
                expect(data.graphicType).not.to.equal.null;
                expect(data.points).not.to.equal.null;
            }).then(done, done);
            $httpBackend.flush();
        });
    });

    describe('the getStatus API', function () {
        beforeEach(function () {
            var data = {
                deviceType: ':khn',
                wifiName: '!lj',
                status: 'mklj'
            };

            $httpBackend.when('GET', 'status')
                .respond(200, data);
        });

        it('should get Status', function (done) {
            mamboService.getStatus().then(function (data) {
                expect(data.deviceType).not.to.equal.null;
                expect(data.wifiName).not.to.equal.null;
                expect(data.status).not.to.equal.null;
            }).then(done, done);
            $httpBackend.flush();
        });
    });

    describe('the isSync function', function () {
        beforeEach(function () {
            var data = {
            };

        });

        it('should be synced', function (done) {
            mamboService.isSync({status: 'IDLE'}).then(function (bool) {
                expect(bool).not.to.equal.null;
            }).then(done, done);
            $rootScope.$apply();
        });

        it('should not be synced', function (done) {
            mamboService.isSync().then(function (bool) {
                expect(bool).to.equal.null;
            }).then(done, done);
            $rootScope.$apply();
        });
    });

});
