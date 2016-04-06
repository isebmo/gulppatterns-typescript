describe('priseDeMesure', function () {
    describe('priseDeMesure.factory', function () {

        beforeEach(function () {
            bard.appModule('app.mesure');
            bard.inject(this, 'PriseDeMesure', 'interventionCurrentService', 'DiagnosticXDSL',
                '$log', '$timeout', '$q', '$rootScope', '$httpBackend',
                '$interval', 'ETATS_MESURE', 'ETATS_SCRUTATION', 'EVENT_SCRUTATION', 'NmihdAlgo', 'mamboService',
                'mesuresUtilsService', 'moment');
        });

        var statusMamboSynchronized = {
            "deviceType": "MAMBO",
            "wifiName": "ZTE_H168N6FFD02",
            "connectionStatus": "SHOWTIME",
            "sessionID": 5,
            "isConnected": true
        };

        var statusMamboNotSynchronized = {
            "deviceType": "MAMBO",
            "wifiName": "ZTE_H168N6FFD02",
            "connectionStatus": "IDLE",
            "sessionID": 5,
            "isConnected": false
        };

        var typeMesure = 'RE';
        var timeOutScrutation = 15000;

        var view = {};
        view.notifySuccess = function (message) {
        };
        view.notifyError = function (message) {
        };
        view.notifyWarn = function (message) {
        };

        var loadParam = {
            param: {
                scrutationTimer: timeOutScrutation
            }
        };

        describe('Scrutation state machine', function () {
            it('Should start to not yet synchronized', function () {
                sinon.stub(mamboService, 'getStatus').returns($q.when(statusMamboSynchronized));
                var priseDeMesure = new PriseDeMesure(typeMesure, loadParam, view);
                priseDeMesure.demarrerScrutation();
                expect(priseDeMesure.isScrutation(ETATS_SCRUTATION.NOT_YET_SYNCHRONIZED)).to.equal(true);
                $rootScope.$apply();
            });
            it('With unsynchronized device, after getStatus from device realized should stay to not yet synchronized ',
                function () {
                sinon.stub(mamboService, 'getStatus').returns($q.when(statusMamboNotSynchronized));
                var priseDeMesure = new PriseDeMesure(typeMesure, loadParam, view);
                priseDeMesure.demarrerScrutation();
                $interval.flush(1001);
                expect(priseDeMesure.isScrutation(ETATS_SCRUTATION.NOT_YET_SYNCHRONIZED)).to.equal(true);
                $rootScope.$apply();
            });
            it('With synchronized device, after getStatus from device realized should pass to synchronized ', function () {
                sinon.stub(mamboService, 'getStatus').returns($q.when(statusMamboSynchronized));
                var priseDeMesure = new PriseDeMesure(typeMesure, loadParam, view);
                priseDeMesure.demarrerScrutation();
                $interval.flush(1001);
                expect(priseDeMesure.isScrutation(ETATS_SCRUTATION.SYNCHRONIZED)).to.equal(true);
                $rootScope.$apply();
            });
            it('With unsynchronized device, after scrutation\'s timeout should pass to not synchronized timeout', function () {
                sinon.stub(mamboService, 'getStatus').returns($q.when(statusMamboNotSynchronized));
                var priseDeMesure = new PriseDeMesure(typeMesure, loadParam, view);
                priseDeMesure.demarrerScrutation();
                $timeout.flush(timeOutScrutation + 1);
                expect(priseDeMesure.isScrutation(ETATS_SCRUTATION.NOT_SYNCHRONIZED_TIMEOUT)).to.equal(true);
                $rootScope.$apply();
            });
        });
    });
});
