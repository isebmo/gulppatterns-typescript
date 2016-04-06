/* jshint -W117, -W030 */
describe('intervention', function() {
    describe('route', function() {

        beforeEach(function() {
            module('app.intervention', bard.fakeToastr);
            module('app.helios');
            module('app.layout');
            module('app.core');
            module('blocks.auth');

            bard.inject(this, 'interventionStorageService', 'params',
                '$location', '$rootScope', '$state', '$stateParams', '$templateCache', '$httpBackend', '$q', 'AuthService', 'User');
        });

        beforeEach(function () {
            var u = new User();
            angular.extend(u, mockedUser.getUserETR());
            sinon.stub(AuthService, 'getUser').returns($q.when(u));
        });

        it('should map state home.helios.intervention to url #/helios/intervention/ ', function() {
            expect($state.href('home.helios.intervention')).to.equal('#/helios/intervention/');
        });

        it('should work with $state.go', function() {
            var deferred = $q.defer();
            deferred.resolve();
            sinon.stub(params, 'getParams').returns(deferred.promise);
            sinon.stub(interventionStorageService, 'getInterventions').returns(deferred.promise);
            $rootScope.$apply();
            $state.go('home.helios.intervention');
            $rootScope.$apply();
            expect($state.current.name).to.equal('home.helios.intervention');
        });

        it('should not work with $state.go if getParams fails', function() {
            var deferredSuccess = $q.defer(),
                deferredError = $q.defer();
            deferredSuccess.resolve();
            deferredError.reject('test of reject');
            sinon.stub(params, 'getParams').returns(deferredError.promise);
            sinon.stub(interventionStorageService, 'getInterventions').returns(deferredSuccess.promise);
            $state.go('home.helios.intervention');
            $rootScope.$apply();
            expect($state.current.name).not.to.equal('home.helios.intervention');
        });

        it('should map state home.helios.intervention to url #/intervention/0123456789 ', function() {
            expect($state.href('home.helios.intervention', {nd: '0123456789'}))
                .to.equal('#/helios/intervention/0123456789');
        });

        it('should work with $state.go', function() {
            var deferred = $q.defer();
            deferred.resolve();
            sinon.stub(params, 'getParams').returns(deferred.promise);
            sinon.stub(interventionStorageService, 'getInterventions').returns(deferred.promise);
            $state.go('home.helios.intervention', {nd: '0123456789'});
            $rootScope.$apply();
            expect($state.current.name).to.equal('home.helios.intervention');
            expect($stateParams.nd).to.equal('0123456789');
        });

        it('should not work with $state.go if getInterventionsByND fails', function() {
            var deferredSuccess = $q.defer(),
                deferredError = $q.defer();
            deferredSuccess.resolve();
            deferredError.reject('test of reject');
            sinon.stub(params, 'getParams').returns(deferredSuccess.promise);
            sinon.stub(interventionStorageService, 'getInterventions').returns(deferredError.promise);
            $state.go('home.helios.intervention', {nd: '0123456789'});
            $rootScope.$apply();

            expect($state.current.name).not.to.equal('home.helios.intervention');
        });
    });
});
