/* jshint -W117, -W030 */
describe('historiqueNd', function () {
    xdescribe('controller', function () {

        var controller,
            stateToGo = null,
            settedInter = null;

        beforeEach(function () {
            module('app.historique');
            module('app.historique.nd');

            bard.inject(this, '$controller', '$q', '$rootScope');

            controller = $controller('HistoriqueNd', {
                interventionCurrentService: {setCurrentIntervention: setCurrentInterventionTest},
                historiqueservice: {
                    loadInterventions: function () {
                        return $q.when(['1', '2']);
                    }
                },
                $state: {
                    go: function (strState) {
                        stateToGo = strState;
                    }
                },
                $stateParams: {title: 'test'},
                toastr: '',
                interventions: []
            });

            function setCurrentInterventionTest(inter) {
                settedInter = inter;
                return $q.when(inter);
            }
        });

        it('should be Historique du ND', function () {
            expect(controller.fn.getTitle()).to.equal('Historique du ND');

        });

        it('should be Historique du ND : 1', function () {
            controller.param.interventions.push({nd: '1'});
            expect(controller.fn.getTitle()).to.equal('Historique du ND : ' + 1);
        });

        xit('should redirect to \'home.helios.intervention\' after having selected the intervention', function () {
            controller.fn.selectIntervention('fakeIntervention');
            expect(stateToGo).to.equal('home.helios.intervention');
            expect(settedInter).to.equal('fakeIntervention');
            $rootScope.$apply();
        });

    });
});
