/* jshint -W117, -W030 */
describe('nmihd', function () {
    describe('nmihd.filter', function () {

        beforeEach(function () {
            module('app.helios.nmihd');
            bard.inject(this, '$filter');
        });

        describe('nmihd.filter.First', function () {
            var inter = mockedDataNMIHD.interPM8;

            it('should find the first mesure', function () {

                var param = {
                    status: 'success',
                    type: 'SR'
                };
                var first = $filter('nmihdFirst')(inter, param);
                var match = first.date === 1451602800000
                    && first.point === param.type
                    && first.decision === param.status;
                expect(match).to.equal(true);
            });

            it('should find none mesure with type XX', function () {
                var param = {
                    status: 'default',
                    type: 'XX'
                };
                expect($filter('nmihdFirst')(inter, param)).to.equal(null);
            });

            it('should find none mesure with status XX', function () {
                var param = {
                    status: 'XX',
                    type: 'SR'
                };
                expect($filter('nmihdFirst')(inter, param)).to.equal(null);
            });
        });

        describe('nmihd.filter.Last', function () {
            var inter = mockedDataNMIHD.interPM8;

            it('should find the Last mesure SR', function () {
                var param = {
                    status: 'success',
                    type: 'SR'
                };
                var first = $filter('nmihdLast')(inter, param);
                var match = first.date === 1459461600002 && first.point === 'SR' && first.decision === 'success';
                expect(match).to.equal(true);
            });

            it('should find none mesure with type XX', function () {
                var param = {
                    status: 'default',
                    type: 'XX'
                };
                expect($filter('nmihdLast')(inter, param)).to.equal(null);
            });

            it('should find none mesure with status XX', function () {
                var param = {
                    status: 'XX',
                    type: 'SR'
                };
                expect($filter('nmihdLast')(inter, param)).to.equal(null);
            });

            it('Dernière SR rouge', function () {
                var inter = mockedDataNMIHD.nmihdAllCorrected_1;
                var param = {
                    type: 'SR'
                };
                expect($filter('nmihdLast')(inter, param).decision).to.equal('success');
            });
        });

        describe('nmihd.filter.nmihdCorrected', function () {
            it('should find mesure SR corrected', function () {
                var inter = mockedDataNMIHD.interPM8;
                var param = {
                    from: 'danger',
                    to: 'success',
                    types: ['SR', 'RE']
                };
                expect($filter('nmihdCorrected')(inter, param)).to.equal(true);
            });

            it('should not find mesure RE corrected', function () {
                var inter = mockedDataNMIHD.interPM8_3;
                var param = {
                    from: 'danger',
                    to: 'success',
                    types: ['RE']
                };
                expect($filter('nmihdCorrected')(inter, param)).to.equal(false);
            });

            it('should not find mesure SR corrected (KO/OK/KO', function () {
                var inter = mockedDataNMIHD.interPM8_2;
                var param = {
                    from: 'danger',
                    to: 'success',
                    types: ['SR', 'RE']
                };
                expect($filter('nmihdCorrected')(inter, param)).to.equal(false);
            });

            it('should not find mesure RE corrected (KO/OK/KO', function () {
                var inter = mockedDataNMIHD.interPM8_3;
                var param = {
                    from: 'danger',
                    to: 'success',
                    types: ['SR', 'RE']
                };
                expect($filter('nmihdCorrected')(inter, param)).to.equal(false);
            });
        });

        describe('nmihd.filter.nmihdAllCorrected', function () {
            it('Pas de mesure rouge en SR RE', function () {
                var inter = mockedDataNMIHD.nmihdAllCorrected_1;
                var param = {
                    status: 'danger',
                    types: ['SR', 'RE']
                };
                expect($filter('nmihdAllCorrected')(inter, param)).to.equal(true);
            });

            it('Pas de mesure rouge en SR PT', function () {
                var inter = mockedDataNMIHD.nmihdAllCorrected_2;
                var param = {
                    status: 'danger',
                    types: ['SR', 'PT']
                };
                expect($filter('nmihdAllCorrected')(inter, param)).to.equal(true);
            });

            it('Mesure rouge en RE', function () {
                var inter = mockedDataNMIHD.nmihdAllCorrected_2;
                var param = {
                    status: 'danger',
                    types: ['RE']
                };
                expect($filter('nmihdAllCorrected')(inter, param)).to.equal(false);
            });

            it('Pas de PT verte', function () {
                var inter = mockedDataNMIHD.nmihdAllCorrected_1;
                var param = {
                    status: 'success',
                    types: ['PT']
                };
                expect($filter('nmihdAllCorrected')(inter, param)).to.equal(true);
            });

            it('Pas de mesure rouge ailleurs RE, SR, PC, PT, PM', function () {
                var inter = mockedDataNMIHD.nmihdAllCorrected_3;
                var param = {
                    status: 'danger',
                    types: ['RE', 'SR', 'PC', 'PT', 'PM']
                };
                expect($filter('nmihdAllCorrected')(inter, param)).to.equal(true);
            });

        });

    });
});
