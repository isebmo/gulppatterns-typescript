/* jshint -W117, -W030 */
describe('mesure route', function() {
    beforeEach(function() {
        module('app.mesure');
        module('app.core');
        module('app.layout');
        module('app.recapmesures');
        module('app.helios');
        bard.inject(this, 'interventionStorageService', 'MODIFICATION_RIGHT', 'interventionCurrentService',
            '$q', '$location', '$rootScope', '$state', '$templateCache', '$stateParams', '$httpBackend', 'AuthService',
            'User', 'interventionUtilsService');
    });

    beforeEach(function () {
        var u = new User();
        angular.extend(u, mockedUser.getUserETR());
        sinon.stub(AuthService, 'getUser').returns($q.when(u));
        $httpBackend.when('GET', 'api/public/params').respond(200, {});
    });

    describe('state', function() {
        var views = {
            mesure: 'app/recapmesures/mesure/mesure.html'
        };

        beforeEach(function() {
            sinon.stub(interventionCurrentService, 'getCurrentIntervention').returns($q.when({
                rights: [MODIFICATION_RIGHT.ANYTHING_EXCEPT_ND]
            }));
            $rootScope.$apply();
        });

        it('should map state mesure-new with typeMesure RE to url /mesure/RE ', function() {
            expect($state.href('home.helios.mesures.mesure-new', {typeMesure: 'RE'})).to.equal('#/helios/mesure/RE');
        });
        it('should work with $state.go (mesure-new + RE)', function() {
            $state.go('home.helios.mesures.mesure-new', {typeMesure: 'RE'});
            $rootScope.$apply();
            $httpBackend.flush();
            expect($state.current.name).to.equal('home.helios.mesures.mesure-new');
            expect($stateParams.typeMesure).to.equal('RE');
        });

        it('should map state mesure-detail {typeMesure: PM, dateMesure: 35435436}' +
            ' to url /mesure/35435436 ', function() {
            expect($state.href('home.helios.mesures.mesure-detail', {
                typeMesure: 'PM',
                dateMesure: 35435436
            })).to.equal('#/helios/mesure/PM/35435436');
        });
        it('should work with $state.go (home.helios.mesures.mesure-detail + PM + 35435436)', function() {
            $state.go('home.helios.mesures.mesure-detail', {typeMesure: 'PM', dateMesure: 35435436});
            $rootScope.$apply();
            $httpBackend.flush();
            expect($state.current.name).to.equal('home.helios.mesures.mesure-detail');
            expect($stateParams.typeMesure).to.equal('PM');
            expect($stateParams.dateMesure).to.equal('35435436');
        });
    });

    describe('access rights', function () {
        it('should not go to \'mesure-new\' state without the appropriate right', function () {
            // mocker la currentIntervention pour qu'elle contienne les droits ('rights')
            sinon.stub(interventionCurrentService, 'getCurrentIntervention').returns($q.when({
                rights: []
            }));
            $rootScope.$apply();

            $state.go('home.helios.mesures.mesure-new', {typeMesure: 'RE'});
            $rootScope.$apply();
            $httpBackend.flush();

            expect($state.current.name).not.to.equal('home.helios.mesure-new');
            expect($state.current.name).to.equal('error');
        });

        it('should go to \'mesure-new\' state with the appropriate right ' +
            '(MODIFICATION_RIGHT.ANYTHING_EXCEPT_ND)', function () {

            // mocker la currentIntervention pour qu'elle contienne les droits ('rights')
            sinon.stub(interventionUtilsService, 'hasRightToCreateMesure').returns($q.when(true));
            sinon.stub(interventionCurrentService, 'getCurrentIntervention').returns($q.when({
                rights: [MODIFICATION_RIGHT.ANYTHING_EXCEPT_ND]
            }));

            $rootScope.$apply();

            $state.go('home.helios.mesures.mesure-new', {typeMesure: 'RE'});
            $rootScope.$apply();

            $httpBackend.flush();

            expect($state.current.name).to.equal('home.helios.mesures.mesure-new');
        });
    });
});
