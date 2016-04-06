/* jshint -W117, -W030 */
describe('intervention', function () {
    describe('intervention.filter', function () {

        beforeEach(function () {
            module('app.intervention');
            bard.inject(this, '$filter', 'STATUT_HISTORIQUE');
        });

        it('should have an "indexOfIntervention" filter', function () {
            expect($filter('indexOfIntervention')).to.be.a('function');
        });

        it('should have an "suppressDuplicateIntervention" filter', function () {
            expect($filter('suppressDuplicateIntervention')).to.be.a('function');
        });

        it('should have an "modifiedIntervention" filter', function () {
            expect($filter('modifiedIntervention')).to.be.a('function');
        });

        it('should find the index of the Intervention', function () {
            var listInter = [
                {nd: '1', date: 123456},
                {nd: '1', date: 123457},
                {nd: '2', date: 123458},
                {nd: '3', date: 123459}
            ];

            expect($filter('indexOfIntervention')(listInter, {nd: '1', date: 123456})).to.equal(0);
            expect($filter('indexOfIntervention')(listInter, {nd: '1', date: 123457})).to.equal(1);
            expect($filter('indexOfIntervention')(listInter, {nd: '2', date: 123458})).to.equal(2);
            expect($filter('indexOfIntervention')(listInter, {nd: '3', date: 123459})).to.equal(3);
        });

        it('should return -1 for any non-contained element', function () {
            expect($filter('indexOfIntervention')(null, {nd: '1', date: 123456})).to.equal(-1);
            expect($filter('indexOfIntervention')([], {nd: '1', date: 123456})).to.equal(-1);

            var listInter = [
                {nd: '1', date: 123456},
                {nd: '1', date: 123457},
                {nd: '2', date: 123458},
                {nd: '3', date: 123459}
            ];
            expect($filter('indexOfIntervention')(listInter, {nd: '4', date: 123456})).to.equal(-1);
            expect($filter('indexOfIntervention')(listInter, {nd: '1', date: 123455})).to.equal(-1);
        });

        it('should return only intervention that was modified', function () {
            var listInter = [
                {nd: '1', lastUpdate: 123457, syncDate: 123456},
                {nd: '1', lastUpdate: 123457, syncDate: 123457},
                {nd: '2', lastUpdate: 123456, syncDate: 123457},
                {nd: '3', lastUpdate: 123456, syncDate: 123457},
                {nd: '1', date: 1234567, syncDate: 123458}
            ];
            expect($filter('modifiedIntervention')(listInter).length).to.equal(1);
        });

        it('should return only intervention that need to be synchronised', function () {
            var listInter = [
                {nd: '1', lastUpdate: 123457, syncDate: 123456},
                {nd: '1', lastUpdate: 123457, syncDate: 123457},
                {nd: '2', lastUpdate: 123456, syncDate: 123457},
                {nd: '3', lastUpdate: 123456, syncDate: 123457},
                {nd: '1', date: 1234567, syncDate: 123458},
                {nd: '1', date: 1234567, syncDate: 123458, groupmesures: []},
                {nd: '1', date: 1234567, syncDate: 123458, groupmesures: null},
                {nd: '1', lastUpdate: 1234567, syncDate: 123458, groupmesures: [{}]}
            ];
            expect($filter('interventionToBeSync')(listInter).length).to.equal(1);
            listInter = [
                {nd: '1', lastUpdate: 123458, syncDate: 123458, groupmesures: [{}]}
            ];
            expect($filter('interventionToBeSync')(listInter).length).to.equal(0);
        });

        it('should return only intervention that not need to purge', function () {
            var listInter = [
                {nd: '1', date: new Date(), syncDate: 123458},
                {nd: '1', date: new Date(), syncDate: 123458, statut: STATUT_HISTORIQUE.INVALID},
                {nd: '1', date: 1234567, syncDate: 123458, groupmesures: null},
                {
                    nd: '1', date: new Date(), statut: STATUT_HISTORIQUE.LOCAL, groupmesures: [{
                    'profil': {'code': '0', 'libelle': '8dB', 'description': 'offre TV 1/8/18MMax'},
                    'mesures': [
                        {
                            'mont': {
                                'debReel': 0,
                                'debAttActu': 1,
                                'debAttMinMax': 2,
                                'margeBruitActu': 4,
                                'margeBruitMinMax': 5,
                                'SES': 6,
                                'CRC': 7,
                                'FEC': 8,
                                'attenu': 9
                            },
                            'date': new Date(2015, 1, 2),
                            'point': 'PT',
                            'condition': 'Disjoncteur EDF ON',
                            'decision': 'danger',
                            'strResultsDiagXDSL': 'Il y a quelque chose qui ne va pas',
                            'actions': [{
                                'ordre': 1,
                                'message': 'Si devis accepté, réaliser mesure à la PM',
                                'etat': 'mesure-new({typeMesure: \'PM\', groupIndex: null, mesureIndex: null})'
                            }, {
                                'ordre': 2,
                                'message': 'Si devis refusé, tester la Livebox et ses accessoires au PT',
                                'etat': 'mesure-new({typeMesure: \'PT\', groupIndex: null, mesureIndex: null})'
                            }
                            ],
                            'duree': 40
                        }
                    ]
                }]
                },
                {nd: '1', date: 1234567, syncDate: 123458, statut: STATUT_HISTORIQUE.SYNC},
                {
                    nd: '1', date: 1234567, statut: STATUT_HISTORIQUE.PARTIAL, groupmesures: [{
                    'profil': {'code': '0', 'libelle': '8dB', 'description': 'offre TV 1/8/18MMax'},
                    'mesures': [
                        {
                            'mont': {
                                'debReel': 0,
                                'debAttActu': 1,
                                'debAttMinMax': 2,
                                'margeBruitActu': 4,
                                'margeBruitMinMax': 5,
                                'SES': 6,
                                'CRC': 7,
                                'FEC': 8,
                                'attenu': 9
                            },
                            'date': new Date(2015, 1, 2),
                            'point': 'PT',
                            'condition': 'Disjoncteur EDF ON',
                            'decision': 'danger',
                            'strResultsDiagXDSL': 'Il y a quelque chose qui ne va pas',
                            'actions': [{
                                'ordre': 1,
                                'message': 'Si devis accepté, réaliser mesure à la PM',
                                'etat': 'mesure-new({typeMesure: \'PM\', groupIndex: null, mesureIndex: null})'
                            }, {
                                'ordre': 2,
                                'message': 'Si devis refusé, tester la Livebox et ses accessoires au PT',
                                'etat': 'mesure-new({typeMesure: \'PT\', groupIndex: null, mesureIndex: null})'
                            }
                            ],
                            'duree': 40
                        }
                    ]
                }]
                }
            ];
            expect($filter('purgedIntervention')(listInter).length).to.equal(4);
            expect($filter('purgedIntervention')(listInter)[0]).to.equal(listInter[0]);
            expect($filter('purgedIntervention')(listInter)[1]).to.equal(listInter[1]);
            expect($filter('purgedIntervention')(listInter)[2]).to.equal(listInter[3]);
            expect($filter('purgedIntervention')(listInter)[3]).to.equal(listInter[5]);
        });

    });
});
