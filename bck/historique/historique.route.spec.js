/* jshint -W117, -W030 */
describe('historique', function () {
    describe('state', function () {

        beforeEach(function () {
            module('app.historique', bard.fakeToastr);
            module('app.helios');
            module('app.layout');
            module('app.core');
            module('blocks.auth');
            bard.inject(this, '$state', '$rootScope', '$q', 'AuthService', 'User');
        });

        it('should map state historique to url #/helios/historique', function () {
            expect($state.href('home.helios.historique')).to.equal('#/helios/historique');
        });

        it('should not work because is abstract', function () {
            var u = new User();
            angular.extend(u, mockedUser.getUserETR());
            var error = null;
            sinon.stub(AuthService, 'getUser').returns($q.when(u));
            try {
                $state.go('home.helios.historique');
            } catch (e) {
                error = e;
            }
            $rootScope.$apply();
            expect(error).to.not.equal(null);
        });

    });
});
