/* jshint -W079 */
var mockData = (function() {
    return {
        getMockCustomers: getMockCustomers,
        getMockStates: getMockStates,
        thierryLebel: getMockCustomers()[0],
        getInterventions: getInterventions,
        getCurrentIntervention: getInterventions()[0]
    };

    function getMockStates() {
        return [
            {
                state: 'dashboard',
                config: {
                    url: '/',
                    templateUrl: 'app/dashboard/dashboard.html',
                    title: 'dashboard',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-dashboard"></i> Dashboard'
                    }
                }
            }
        ];
    }

    function getInterventions() {
        return [{
            'nd': null,
            'commentaire': null,
            'profilcourant': null,
            'dysfonctionnements': {
                'koJamais': false,
                'koDeja': false,
                'okAutre': false,
                'strAutre': null
            },
            'groupmesures': [
                {
                    'profil': {
                        'libelle': 'profil 8db'
                    },
                    'point': 'PT',
                    'mesures': [
                        {
                            'mont': {
                                'debReel': 0,
                                'debAttActu': 1,
                                'debAttMinMax': 2,
                                'margeBruitActu': 4,
                                'SES': 6,
                                'CRC': 7,
                                'FEC': 8,
                                'attenu': 9,
                                'date': 16565165165,
                                'decision': 1,
                                'desync': 1,
                                'duree': 40
                            },
                            'desc': {
                                'debReel': 100,
                                'debAttActu': 71,
                                'debAttMinMax': 28,
                                'margeBruitActu': 47,
                                'SES': 68,
                                'CRC': 78,
                                'FEC': 87,
                                'attenu': 98,
                                'date': 16565165165,
                                'decision': 0,
                                'desync': 1,
                                'duree': 40
                            },
                            'condition': 'Disjoncteur EDF ON'
                        },
                        {
                            'mont': {
                                'debReel': 0,
                                'debAttActu': 1,
                                'debAttMinMax': 2,
                                'margeBruitActu': 4,
                                'SES': 6,
                                'CRC': 7,
                                'FEC': 8,
                                'attenu': 9,
                                'date': 16565165165,
                                'decision': 0,
                                'desync': 1,
                                'duree': 40
                            },
                            'desc': {
                                'debReel': 0,
                                'debAttActu': 1,
                                'debAttMinMax': 2,
                                'margeBruitActu': 4,
                                'SES': 6,
                                'CRC': 7,
                                'FEC': 8,
                                'attenu': 9,
                                'date': 16565165165,
                                'decision': 0,
                                'desync': 1,
                                'duree': 40
                            },
                            'condition': 'Disjoncteur EDF OFF'
                        }
                    ]
                },
                {
                    'profil': {
                        'libelle': 'profil 8db'
                    },
                    'point': 'PT',
                    'mesures': [
                        {
                            'mont': {
                                'debReel': 0,
                                'debAttActu': 1,
                                'debAttMinMax': 2,
                                'margeBruitActu': 4,
                                'SES': 6,
                                'CRC': 7,
                                'FEC': 8,
                                'attenu': 9,
                                'date': 16565165165,
                                'decision': 0,
                                'desync': 1,
                                'duree': 40
                            },
                            'desc': {
                                'debReel': 0,
                                'debAttActu': 1,
                                'debAttMinMax': 2,
                                'margeBruitActu': 4,
                                'SES': 6,
                                'CRC': 7,
                                'FEC': 8,
                                'attenu': 9,
                                'date': 16565165165,
                                'decision': 0,
                                'desync': 1,
                                'duree': 40
                            }
                        }
                    ]
                }
            ]
        }];
    }

    function getMockCustomers() {
        return [
            {
                id: 1017109,
                firstName: 'Sabrina',
                lastName: 'Lebel',
                city: 'Lyon',
                thumbnail: 'sabrina_lebel.jpg'
            },
            {
                id: 1017105,
                firstName: 'Nicolas',
                lastName: 'Barrier',
                city: 'Nantes',
                thumbnail: 'nicolas_barrier.jpg'
            },
            {
                id: 1017108,
                firstName: 'Benjamin',
                lastName: 'Maisonneuve',
                city: 'Bordeaux',
                thumbnail: 'benjamin_maisonneuve.jpg'
            },
            {
                id: 1017104,
                firstName: 'Jean-François',
                lastName: 'Gambier',
                city: 'Lille',
                thumbnail: 'jean-francois_gambier.jpg'
            },
            {
                id: 1017106,
                firstName: 'Yves',
                lastName: 'Rousselot',
                city: 'Reims',
                thumbnail: 'yves_rousselot.jpg'
            }
        ];
    }
})();
