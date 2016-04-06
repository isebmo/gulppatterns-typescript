/* jshint -W117, -W030 */
describe('app.blocks.filter', function () {
    describe('filter.oui_non', function () {

        beforeEach(function () {
            module('app');
            bard.inject(this, '$filter');
        });

        it('should have a function "oui_non" in filters ', function () {
            expect($filter('oui_non')).to.be.a('function');
        });

        it('should return "Oui" for true', function () {
            expect($filter('oui_non')(true)).to.equal('Oui');
        });

        it('should return "Non" for false', function () {
            expect($filter('oui_non')(false)).to.equal('Non');
        });

        it('should return "" (nothing) for falsy and truthy values', function () {
            expect($filter('oui_non')(null)).to.equal('');
            expect($filter('oui_non')('')).to.equal('');
            expect($filter('oui_non')(0)).to.equal('');
            expect($filter('oui_non')('test')).to.equal('');
            expect($filter('oui_non')({})).to.equal('');
            expect($filter('oui_non')([])).to.equal('');

        });

    });
});
