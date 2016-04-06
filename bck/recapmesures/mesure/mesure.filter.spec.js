/* jshint -W117, -W030 */
describe('mesure', function () {
    describe('mesure.filter', function () {

        beforeEach(function () {
            module('app.mesure');
            bard.inject(this, '$filter');
        });

        it('should have an "getMesureFromInter" filter', function () {
            expect($filter('getMesureFromInter')).to.be.a('function');
        });

        it('should find the mesure matching', function () {
            var mesure = {
                date: 123456,
                point: 'SR'
            };
            var inter = {
                groupmesures: [
                    {
                        mesures: [
                            mesure
                        ]
                    }
                ]
            };
            var filter = {dateMesure: moment(mesure.date), typeMesure: 'SR'};

            expect($filter('getMesureFromInter')(inter, filter)).to.equal(mesure);
            filter.typeMesure = 'RE';
            expect($filter('getMesureFromInter')(inter, filter)).to.equal(null);
        });

    });
});
