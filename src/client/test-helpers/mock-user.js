/**
 * Created by smouret on 24/12/2015.
 */
var mockedUser = (function () {

    var userETR = {
        login: 'pierre paul',
        nd: '0123456789',
        pidiRoles: ['saisi_fact_gdp', 'ptools', 'mutpc_ptools', 'carto_ptools', 'vqse_ptools', 'helios_ptools'],
        siuId: '1117889767819996',
        idETL: '207',
        codeETL: 'ETL207',
        type: 'SIU',
        userId: 'yves',
        connectionId: '1117889767819996',
        baseEcoleUser: false,
        isLocal: false
    };

    return {
        getUserOrange: getUserOrange,
        getUserETR: getUserETR
    };

    function getUserOrange () {
        return null;
    }

    function getUserETR () {
        return userETR;
    }
})();
