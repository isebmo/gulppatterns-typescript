/* jshint -W117, -W030 */
describe('historiqueNd', function() {
    describe('state', function() {

        beforeEach(function() {
            module('app.historique.nd', bard.fakeToastr);
            module('app.helios');
            module('app.layout');
            module('app.core');
            module('blocks.auth');
            bard.inject(this, '$state', '$rootScope', '$q', 'AuthService', 'User');
        });

        it('should map state historique to url #/helios/historique', function() {
            expect($state.href('home.helios.historique')).to.equal('#/helios/historique');
        });

        //todo pb inject interventionCurrentService
        xit('should work with $state.go', function() {
            var u = new User();
            angular.extend(u, mockedUser.getUserETR());
            sinon.stub(AuthService, 'getUser').returns($q.when(u));
            $state.go('home.helios.historique.nd');
            $rootScope.$apply();
            expect($state.current.name).to.equal('home.helios.historique.nd');
        });

    });
});
