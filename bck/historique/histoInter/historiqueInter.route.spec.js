/* jshint -W117, -W030 */
describe('historiqueInter', function() {
    describe('state', function() {

        beforeEach(function() {
            module('app.historique');
            module('app.historique.interventions');
            module('app.helios');
            module('app.layout');
            module('app.core');
            module('blocks.auth');
            bard.inject(this, '$state', '$rootScope', '$q', 'AuthService', 'User');
        });

        it('should map state historique to url #/helios/historique', function() {
            expect($state.href('home.helios.historique.interventions')).to.equal('#/helios/historique/interventions');
        });

        //todo Problème avec injection historiqueInterService
        xit('should work with $state.go', function() {
            var u = new User();
            angular.extend(u, mockedUser.getUserETR());
            sinon.stub(AuthService, 'getUser').returns($q.when(u));
            sinon.stub(historiqueInterService, 'loadInterventions').returns($q.when([]));
            $state.go('home.helios.historique.interventions');
            $rootScope.$apply();
            expect($state.current.name).to.equal('home.helios.historique.interventions');
        });

    });
});
