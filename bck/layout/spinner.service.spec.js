/**
 * Created by pharriet on 19/02/2016.
 */
describe('app.layout', function () {
    describe('spinnerService', function () {

        beforeEach(function () {
            bard.appModule('app.layout');
            bard.inject(this, 'spinnerService', '$httpBackend', '$rootScope', '$q');
        });

        bard.verifyNoOutstandingHttpRequests();

        it('should be registered', function () {
            expect(spinnerService).not.to.equal(null);
        });

        describe('service interface ', function () {
            it('should exist makeMeSprin', function () {
                expect(spinnerService.makeMeSpin).to.be.a('function');
            });
            it('should exist getPromise', function () {
                expect(spinnerService.onPromiseUpdated).to.be.a('function');
            });
        });

        describe('params', function () {
            it('should return params with description in html', function (done) {
                var result = {result: true};
                var p = $q.when(result);
                spinnerService.makeMeSpin(p)
                    .then(function (data) {
                        expect(data).to.equal(result);
                    })
                    .then(done, done);
                $rootScope.$apply();
            });
        });
    });
});
