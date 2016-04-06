/* jshint -W117, -W030 */
describe('recapmesures', function() {
    describe('controller', function() {

        var controller;

        beforeEach(function() {
            module('app.recapmesures');
            bard.inject(this, '$controller', '$q', '$rootScope');

            controller = $controller('RecapMesures', {
                $uibModal: {
                    open: function () {
                        return {
                            result: $q.when({commentaire: 'un commentaire'})
                        };
                    }
                },
                interventionCurrentService: {
                    getCurrentIntervention: function () {
                        return $q.when({nd: 'une intervention'});
                    },
                    updateIntervention: function () {}
                }
            });
        });

        it('should fully instantiate constructor\'s fields and functions', function(done) {
            controller.promiseSpinner.then(function () {
                expect(controller.title).to.equal('Mesures');
                expect(controller.intervention.nd).to.equal('une intervention');
                expect(controller.areMesuresEmpty).to.be.a('function');
                expect(controller.ajouterCommentaire).to.be.a('function');
            }).then(done, done);
            $rootScope.$apply();
        });

        it('should return true if there is at least 1 mesure in the intervention', function(done) {
            controller.promiseSpinner.then(function () {
                expect(controller.areMesuresEmpty()).to.equal(true);
                controller.intervention = {groupmesures: [{mesures: ['1']}]};
                expect(controller.areMesuresEmpty()).to.equal(false);
            }).then(done, done);
            $rootScope.$apply();
        });

        it('should add a comment', function(done) {
            controller.ajouterCommentaire();
            controller.promiseSpinner.then(function () {
                expect(controller.intervention.commentaire).to.equal('un commentaire');
            }).then(done, done);
            $rootScope.$apply();
        });

    });
});
