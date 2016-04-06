/* jshint -W117, -W030 */
describe('Utilitaires', function() {
    describe('directives', function() {
        describe('SmileyController', function() {


            beforeEach(function() {
                module('app');
                module('app.core');
                bard.inject(this, 'typesSmiley', '$rootScope', '$compile');
            });

            it('should set class with the smile for success and the right size', function () {
                var $scope = $rootScope.$new();
                $scope.type = 'success';
                var card = angular.element('<smiley size="3x" type="type"></smiley>');
                $compile(card)($scope);
                $scope.$digest(); // ré-évalue les variables bindé
                controller = card.controller('smiley');

                expect(controller.class).to.contains('fa-smile-o');
                expect(controller.class).to.contains('fa-3x');
            });

            it('should set class with the smile for success and the right size', function () {
                var $scope = $rootScope.$new();
                $scope.type = 'danger';
                var card = angular.element('<smiley size="4x" type="type"></smiley>');
                $compile(card)($scope);
                $scope.$digest();
                controller = card.controller('smiley');

                expect(controller.class).to.contains('fa-frown-o');
                expect(controller.class).to.contains('fa-4x');
            });

            it('should set class with the smile for success and the right size', function () {
                var $scope = $rootScope.$new();
                var card = angular.element('<smiley></smiley>');
                $compile(card)($scope);
                $scope.$digest();
                controller = card.controller('smiley');

                expect(controller.class).to.contains('fa-meh-o');
                expect(controller.class).to.contains('fa-2x');
            });

        });
    });
});
