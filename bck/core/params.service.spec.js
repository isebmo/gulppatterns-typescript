/**
 * Created by pharriet on 19/02/2016.
 */
describe('core', function () {
    describe('params.service', function () {

        beforeEach(function () {
            bard.appModule('app.core');
            bard.inject(this, 'params', '$httpBackend', '$rootScope');
        });

        bard.verifyNoOutstandingHttpRequests();

        //todo
        it('should be registered', function () {
            expect(params).not.to.equal(null);
        });

        //todo
        describe('service interface ', function () {
            it('should exist params', function () {
                expect(params.getParams).to.be.a('function');
            });
        });

        describe('params', function () {
            it('should return params with description in html', function () {
                var descriptions = [
                    {
                        "libelle": "8dB",
                        "gras": true,
                        "orange": false
                    },
                    {
                        "libelle": " ADSL ",
                        "gras": true,
                        "orange": true
                    },
                    {
                        "libelle": " : Offre ",
                        "gras": false,
                        "orange": false
                    },
                    {
                        "libelle": "TV",
                        "gras": false,
                        "orange": true
                    },
                    {
                        "libelle": " 8/18MMax",
                        "gras": false,
                        "orange": false
                    }];
                var result = "<strong>8dB</strong><strong class='label-orange'> ADSL </strong> : Offre <span class='label-orange'>TV</span> 8/18MMax";
                expect(params.getDescInHTML(descriptions)).to.equal(result);
                $rootScope.$apply();
            });
        });
    });
})
;
