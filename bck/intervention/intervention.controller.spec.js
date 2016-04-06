/* jshint -W117, -W030 */
describe('intervention', function() {
    xdescribe('controller', function() {

        var controller;

        beforeEach(function() {
            module('app');
            bard.inject(this, '$controller', 'interventionStorageService', 'interventionCurrentService',
                'toastr', '$uibModal', '$q', '$rootScope', 'interventionExistService', 'INTERVENTION_EVENT',
            '$state');

            controller = $controller('Intervention', {
                interventionStorageService: interventionStorageService,
                interventionCurrentService: interventionCurrentService,
                interventionExistService: interventionExistService,
                INTERVENTION_EVENT: INTERVENTION_EVENT,
                MODIFICATION_RIGHT: {},
                loadParam: {},
                checkQueryParam: {nd: '0123456789', interventions: []},
                toastr: toastr,
                $uibModal: $uibModal,
                $stateParams: {title: 'test intervention'},
                $q: $q
            });
        });

        it('should lock the form on "validate"', function(done) {
            sinon.stub(interventionCurrentService, 'getCurrentIntervention').returns($q.when({}));
            sinon.stub(interventionCurrentService, 'updateIntervention').returns($q.when());
            controller.param.actionEnregistrement = interventionCurrentService.updateIntervention;

            controller.fn.validateIntervention();
            controller.promiseSpinner.then(function () {
                expect(controller.param.actionEnregistrement).to.equal(null);
            }).then(done, done);
            $rootScope.$apply();
        });

        xit('should unlock the form on "modifyIntervention"', function() {
            controller.param.actionEnregistrement = null;
            controller.fn.modifyIntervention();
            expect(controller.param.actionEnregistrement).to.equal(interventionCurrentService.updateIntervention);
        });

        xit('should load service Intervention and lock the form on "cancelModification"', function(done) {
            sinon.stub(interventionCurrentService, 'getCurrentIntervention').returns($q.when({nd:'0123456789'}));
            controller.param.currentIntervention = {nd: '0123456788'};

            controller.fn.cancelModification();
            controller.promiseSpinner.then(function () {
                expect(controller.param.currentIntervention.nd).to.equal('0123456789');
                expect(controller.param.actionEnregistrement).to.equal(null);
            }).then(done, done);
            $rootScope.$apply();
        });

        xit('should unlock the form on "createIntervention"', function() {
            controller.fn.createIntervention('0123456789');
            expect(controller.param.actionEnregistrement).to.equal(interventionCurrentService.createIntervention);
            expect(controller.param.currentIntervention.nd).to.equal('0123456789');
        });

    });
});
