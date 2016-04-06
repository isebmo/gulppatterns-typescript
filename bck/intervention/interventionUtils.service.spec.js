/* jshint -W117, -W030 */
describe('intervention', function() {
    describe('interventionUtils.service', function() {

        beforeEach(function() {
            bard.appModule('app.intervention');
            bard.inject(this, 'interventionUtilsService', 'STATUT_HISTORIQUE', 'MODIFICATION_RIGHT', '$rootScope');
        });
        describe('service interface', function() {
            it('should possess a "setStatutAndRights" function', function () {
                expect(interventionUtilsService.setStatutAndRights).to.be.a('function');
            });
            it('should possess a "setAllStatutsAndRights" function', function () {
                expect(interventionUtilsService.setAllStatutsAndRights).to.be.a('function');
            });
            it('should possess a "hasRightToCreateMesure" function', function () {
                expect(interventionUtilsService.hasRightToCreateMesure).to.be.a('function');
            });
        });

        describe('setStatutAndRights', function () {
            var intervention = mockedDataInterventions.getInterventions(2015, 2015)[0];

            it('should return an intervention with the "sync" status and no right to modify', function (done) {
                interventionUtilsService.setStatutAndRights(intervention).then(function (inter) {
                    expect(inter.rights.length).to.equal(0);
                    expect(inter.statut).to.equal(STATUT_HISTORIQUE.SYNC);
                }).then(done, done);
                $rootScope.$apply();
            });
            it('should return an intervention with the "local" status and the right to modify the ND', function (done) {
                intervention.syncDate = null;
                interventionUtilsService.setStatutAndRights(intervention).then(function (inter) {
                    expect(inter.rights).to.include(MODIFICATION_RIGHT.ND);
                    expect(inter.rights).not.to.include(MODIFICATION_RIGHT.ANYTHING_EXCEPT_ND);
                    expect(inter.statut).to.equal(STATUT_HISTORIQUE.LOCAL);
                }).then(done, done);
                $rootScope.$apply();
            });
            it('should return an intervention with the "sync" status and the right to modify ANYTHING_EXCEPT_ND',
                function (done) {
                    intervention.date = new Date();
                    intervention.syncDate = new Date();
                    interventionUtilsService.setStatutAndRights(intervention).then(function (inter) {
                        expect(inter.statut).to.equal(STATUT_HISTORIQUE.SYNC);
                        expect(inter.rights).to.include(MODIFICATION_RIGHT.ANYTHING_EXCEPT_ND);
                        expect(inter.rights).not.to.include(MODIFICATION_RIGHT.ND);
                    }).then(done, done);
                    $rootScope.$apply();
                });
            it('should return an intervention with the "local" status and the both rights', function (done) {
                intervention.date = new Date();
                intervention.syncDate = null;
                interventionUtilsService.setStatutAndRights(intervention).then(function (inter) {
                    expect(inter.rights).to.include(MODIFICATION_RIGHT.ND);
                    expect(inter.rights).to.include(MODIFICATION_RIGHT.ANYTHING_EXCEPT_ND);
                    expect(inter.statut).to.equal(STATUT_HISTORIQUE.LOCAL);
                }).then(done, done);
                $rootScope.$apply();
            });
        });
    });
});
