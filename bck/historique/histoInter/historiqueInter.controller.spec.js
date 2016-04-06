/* jshint -W117, -W030 */
/*describe('historiqueInter', function () {
    describe('controller', function () {

        var controller,
            stateToGo = null,
            settedInter = null;

        beforeEach(function () {
            module('app.historique');
            module('app.historique.interventions');

            bard.inject(this, '$controller', '$q', '$rootScope');

            controller = $controller('HistoriqueInter', {
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

        it('should redirect to \'home.helios.intervention\' after having selected the intervention', function () {
           /!* controller.fn.selectIntervention('fakeIntervention');
            expect(stateToGo).to.equal('home.helios.intervention');
            expect(settedInter).to.equal('fakeIntervention');
            $rootScope.$apply();*!/
        });

    });
});*/
