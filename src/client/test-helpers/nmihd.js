var mockedDataNMIHD = (function () {
    var interPM8_2 = {
        groupmesures: [
            {
                mesures: [
                    {
                        date: 1451602800000,
                        point: 'SR',
                        decision: 'danger'
                    }
                ]
            },
            {
                mesures: [
                    {
                        date: 1456786800003,
                        point: 'SR',
                        decision: 'default'
                    },
                    {
                        date: 1459461600000,
                        point: 'PT',
                        decision: 'success'
                    },
                    {
                        date: 1459461600002,
                        point: 'SR',
                        decision: 'success'
                    },
                    {
                        date: 1459461600003,
                        point: 'SR',
                        decision: 'danger'
                    }
                ]
            }
        ]
    };

    var interPM8_3 = {
        groupmesures: [
            {
                mesures: [
                    {
                        date: 1451602800000,
                        point: 'SR',
                        decision: 'success'
                    }
                ]
            },
            {
                mesures: [
                    {
                        date: 1456786800003,
                        point: 'SR',
                        decision: 'danger'
                    },
                    {
                        date: 1459461600000,
                        point: 'RE',
                        decision: 'danger'
                    },
                    {
                        date: 1459461600002,
                        point: 'RE',
                        decision: 'success'
                    },
                    {
                        date: 1459461600003,
                        point: 'RE',
                        decision: 'danger'
                    }
                ]
            }
        ]
    };

    var interPM8 = {
        groupmesures: [
            {
                mesures: [
                    {
                        date: 1451602800000,
                        point: 'SR',
                        decision: 'success'
                    },
                    {
                        date: 1454281200000,
                        point: 'SR',
                        decision: 'danger'
                    },
                    {
                        date: 1454281200001,
                        point: 'RE',
                        decision: 'danger'
                    },
                    {
                        date: 1454281200002,
                        point: 'RE',
                        decision: 'danger'
                    }
                ]
            },
            {
                mesures: [
                    {
                        date: 1456786800003,
                        point: 'SR',
                        decision: 'default'
                    },
                    {
                        date: 1459461600000,
                        point: 'PT',
                        decision: 'success'
                    },
                    {
                        date: 1459461600001,
                        point: 'RE',
                        decision: 'default'
                    },
                    {
                        date: 1459461600002,
                        point: 'SR',
                        decision: 'success'
                    },
                    {
                        date: 1459461600003,
                        point: 'RE',
                        decision: 'success'
                    }
                ]
            }
        ]
    };

    var nmihdAllCorrected_1 = {
        groupmesures: [
            {
                mesures: [
                    {
                        date: 1451602800000,
                        point: 'SR',
                        decision: 'success'
                    },
                    {
                        date: 1454281200000,
                        point: 'SR',
                        decision: 'success'
                    },
                    {
                        date: 1454281200001,
                        point: 'RE',
                        decision: 'success'
                    },
                    {
                        date: 1454281200002,
                        point: 'RE',
                        decision: 'success'
                    }
                ]
            },
            {
                mesures: [
                    {
                        date: 1456786800003,
                        point: 'SR',
                        decision: 'default'
                    },
                    {
                        date: 1459461600000,
                        point: 'PT',
                        decision: 'danger'
                    },
                    {
                        date: 1459461600001,
                        point: 'RE',
                        decision: 'success'
                    },
                    {
                        date: 1459461600002,
                        point: 'SR',
                        decision: 'success'
                    },
                    {
                        date: 1459461600003,
                        point: 'RE',
                        decision: 'success'
                    }
                ]
            }
        ]
    };

    var nmihdAllCorrected_2 = {
        groupmesures: [
            {
                mesures: [
                    {
                        date: 1451602800000,
                        point: 'SR',
                        decision: 'success'
                    },
                    {
                        date: 1454281200001,
                        point: 'RE',
                        decision: 'danger'
                    },
                    {
                        date: 1454281200002,
                        point: 'RE',
                        decision: 'danger'
                    }
                ]
            },
            {
                mesures: [
                    {
                        date: 1456786800003,
                        point: 'SR',
                        decision: 'default'
                    },
                    {
                        date: 1459461600000,
                        point: 'PT',
                        decision: 'success'
                    },
                    {
                        date: 1459461600001,
                        point: 'RE',
                        decision: 'default'
                    },
                    {
                        date: 1459461600002,
                        point: 'SR',
                        decision: 'success'
                    },
                    {
                        date: 1459461600003,
                        point: 'RE',
                        decision: 'success'
                    }
                ]
            }
        ]
    };

    var nmihdAllCorrected_3 = {
        groupmesures: [
            {
                mesures: [
                    {
                        date: 1451602800000,
                        point: 'RE',
                        decision: 'success'
                    },
                    {
                        date: 1454281200001,
                        point: 'SR',
                        decision: 'success'
                    },
                    {
                        date: 1454281200002,
                        point: 'PC',
                        decision: 'success'
                    }
                ]
            },
            {
                mesures: [
                    {
                        date: 1456786800003,
                        point: 'SR',
                        decision: 'default'
                    },
                    {
                        date: 1459461600000,
                        point: 'PT',
                        decision: 'success'
                    },
                    {
                        date: 1459461600001,
                        point: 'RE',
                        decision: 'default'
                    },
                    {
                        date: 1459461600002,
                        point: 'SR',
                        decision: 'success'
                    },
                    {
                        date: 1459461600003,
                        point: 'RE',
                        decision: 'success'
                    }
                ]
            }
        ]
    };

    return {
        interPM8: interPM8,
        interPM8_2: interPM8_2,
        interPM8_3: interPM8_3,
        nmihdAllCorrected_1: nmihdAllCorrected_1,
        nmihdAllCorrected_2: nmihdAllCorrected_2,
        nmihdAllCorrected_3: nmihdAllCorrected_3
    };

})();
