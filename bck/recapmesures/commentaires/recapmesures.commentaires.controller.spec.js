/* jshint -W117, -W030 */
describe('recapmesures', function() {
    describe('modal: commentaire', function() {

        var controller;

        beforeEach(function() {
            module('app.recapmesures');
            bard.inject(this, '$controller');

            controller = $controller('RecapMesuresCommentairesCtrl', {
                $uibModalInstance: {close: function(){}, dismiss: function () {}},
                commentaire: 'test'
            });
        });

        it('should fully instantiate constructor\'s fields and functions', function() {
            expect(controller.title).to.equal('Mesures');
            expect(controller.data).to.have.property('commentaire');
            expect(controller.data.commentaire).to.equal('test');
            expect(controller.ok).to.be.a('function');
            expect(controller.cancel).to.be.a('function');
        });

    });
});
