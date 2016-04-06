/* jshint -W117, -W030 */
describe('historiqueInter', function() {
    describe('historiqueInter.service', function() {

        beforeEach(function() {
            bard.appModule('app.intervention');
            bard.appModule('app.historique');
            bard.appModule('app.historique.interventions');
            bard.inject(this, 'historiqueInterService', 'interventionStorageService', '$rootScope', '$q');
        });

        describe('service interface', function() {
            it('should possess a "loadInterventions" function', function () {
                expect(historiqueInterService.loadInterventions).to.be.a('function');
            });
        });

    });
});
