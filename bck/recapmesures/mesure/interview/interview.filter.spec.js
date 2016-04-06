/* jshint -W117, -W030 */
describe('interview', function () {
    describe('interview.filter', function () {

        beforeEach(function () {
            module('app.recapmesures.mesure.interview');
            bard.inject(this, '$filter');
        });

        it('should have an "interventionContainsChoice" filter', function () {
            expect($filter('interventionContainsChoice')).to.be.a('function');
        });
        it('should have an "interventionGetChoiceByType" filter', function () {
            expect($filter('interventionGetChoiceByType')).to.be.a('function');
        });
        it('should have an "interventionGetChoice" filter', function () {
            expect($filter('interventionGetChoice')).to.be.a('function');
        });

        it('should match code PC_act1 in interview', function () {
            var intervention = null;
            expect($filter('interventionContainsChoice')(intervention, 'PC_act1')).to.equal(false);
            intervention = {};
            expect($filter('interventionContainsChoice')(intervention, 'PC_act1')).to.equal(false);
            intervention = {
                choix: [{code: 'PC_act1'}]

            };
            expect($filter('interventionContainsChoice')(intervention, 'PC_act1')).to.equal(true);
        });

        it('should get choice in interview by code', function () {
            var intervention = null;
            expect($filter('interventionGetChoice')(intervention, 'PC_act1')).to.equal(null);
            intervention = {};
            expect($filter('interventionGetChoice')(intervention, 'PC_act1')).to.equal(null);
            intervention = {
                choix:[
                    {
                        code: 'SR_act2'
                    }
                ]
            };
            expect($filter('interventionGetChoice')(intervention, 'PC_act1')).to.equal(null);
            intervention = {
                choix: [
                    {
                        code: 'PC_act1',
                        interview: {
                            type: 'PC',
                            question: 'Le client est pr&eacute;sent, je peux intervenir &agrave; son domicile',
                            reponse: 'Oui'
                        }
                    },
                    {
                        code: 'SR_act3',
                        interview: {
                            type: 'SR',
                            question: '',
                            reponse: 'PC inaccessible'
                        }
                    }
                ]
            };
            expect($filter('interventionGetChoice')(intervention, 'PC_act1')).to.equal(intervention.choix[0]);
            expect($filter('interventionGetChoice')(intervention, 'SR_act3')).to.equal(intervention.choix[1]);
        });

        it('should get choice in interview by type', function () {
            var intervention = null;
            expect($filter('interventionGetChoiceByType')(intervention, 'PC')).to.equal(null);
            intervention = {};
            expect($filter('interventionGetChoiceByType')(intervention, 'PC')).to.equal(null);
            intervention = {
                choix:[
                    {
                        code: 'SR_act2'
                    }
                ]
            };
            expect($filter('interventionGetChoiceByType')(intervention, 'PC')).to.equal(null);
            intervention = {
                choix: [
                    {
                        code: 'PC_act1',
                        interview: {
                            type: 'PC',
                            question: 'Le client est pr&eacute;sent, je peux intervenir &agrave; son domicile',
                            reponse: 'Oui'
                        }
                    },
                    {
                        code: 'SR_act3',
                        interview: {
                            type: 'SR',
                            question: '',
                            reponse: 'PC inaccessible'
                        }
                    }
                ]
            };
            expect($filter('interventionGetChoiceByType')(intervention, 'PC')).to.equal(intervention.choix[0]);
            expect($filter('interventionGetChoiceByType')(intervention, 'SR')).to.equal(intervention.choix[1]);
        });

    });
})
;
