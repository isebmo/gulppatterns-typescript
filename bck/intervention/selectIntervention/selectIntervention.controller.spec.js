/* jshint -W117, -W030 */
describe('intervention', function() {
    describe('modal: selectIntervention', function() {

        var controller;

        beforeEach(function() {
            module('app.intervention');
            bard.inject(this, '$controller');

            controller = $controller('SelectInterventionCtrl', {
                interventions: {nd: '0', interventions: ['1', '2']},
                $uibModalInstance: {close: function(){}}
            });
        });

        it('should instantiate 2 fields and 2 functions', function() {
            expect(controller.nd).to.equal('0');
            expect(controller.interventions.length).to.equal(2);
            expect(controller.createIntervention).to.be.a('function');
            expect(controller.loadIntervention).to.be.a('function');
        });

    });
});
