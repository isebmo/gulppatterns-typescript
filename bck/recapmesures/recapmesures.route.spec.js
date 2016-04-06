/* jshint -W117, -W030 */
describe('Recapmesure', function() {
    describe('route', function() {

        beforeEach(function() {
            module('app.recapmesures', bard.fakeToastr);
            module('app.helios');
            module('app.layout');
            module('app.core');
            bard.inject(this, 'interventionCurrentService', '$state', '$q', '$rootScope', 'AuthService',
                'User');
        });

        beforeEach(function () {
            var u = new User();
            angular.extend(u, mockedUser.getUserETR());
            sinon.stub(AuthService, 'getUser').returns($q.when(u));
        });

        it('should map state home.helios.mesures.recapmesures to url #/helios/mesures', function() {
            expect($state.href('home.helios.mesures.recapmesures')).to.equal('#/helios/mesures');
        });

        it('should work with $state.go', function() {
            sinon.stub(interventionCurrentService, 'getCurrentIntervention').returns($q.when({}));
            $state.go('home.helios.mesures.recapmesures');
            $rootScope.$apply();
            expect($state.current.name).to.equal('home.helios.mesures.recapmesures');
        });

        it('should not work with $state.go if currentIntervention fails', function() {
            sinon.stub(interventionCurrentService, 'getCurrentIntervention').returns($q.reject('test of reject'));
            $state.go('home.helios.mesures.recapmesures');
            $rootScope.$apply();
            expect($state.current.name).not.to.equal('home.helios.intervention');
            expect($state.current.name).to.equal('404');
        });
    });
});
