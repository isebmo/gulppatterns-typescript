/* jshint -W117, -W030 */
describe('historique', function() {
    describe('controller', function() {

        var controller;

        beforeEach(function() {
            module('app.historique');
            bard.inject(this, '$controller', '$q', '$rootScope');

            controller = $controller('Historique', {
                $state: {go: function (strState) {
                    stateToGo = strState;
                }}
            });
        });


    });
});
