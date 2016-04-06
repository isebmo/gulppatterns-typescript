'use strict';
exports.getParamLines = getParamLines;
exports.getGraphic = getGraphic;
exports.getStatus = getStatus;

var paramLinesCallCount = 0;

function getParamLines(req, res, next) {
    var data = {
        "inpDown": (Math.random() * 20).toFixed(2),
        "maxFlowDown": Math.floor((Math.random() * 20) + 1),
        "sesUp": Math.floor((Math.random() * 20) + 1),
        "realFlowUp": Math.floor((Math.random() * 20) + 1),
        "crcUp": Math.floor((Math.random() * 20) + 1),
        "noiseMarginDown": Math.floor((Math.random() * 20) + 1),
        "isSynchronized": true,
        "fecDown": Math.floor((Math.random() * 20) + 1),
        "crcDown": Math.floor((Math.random() * 20) + 1),
        "fecUp": Math.floor((Math.random() * 20) + 1),
        "maxFlowUp": Math.floor((Math.random() * 20) + 1),
        "attnUp": Math.floor((Math.random() * 20) + 1),
        "attnDown": Math.floor((Math.random() * 20) + 1),
        "noiseMarginUp": Math.floor((Math.random() * 20) + 1),
        "realFlowDown": Math.floor((Math.random() * 20) + 1),
        "inpUp": Math.floor((Math.random() * 20) + 1),
        "sesDown": Math.floor((Math.random() * 20) + 1)
    };
    //_simulateDesyncParamLines(data, res);
    res.send(data);
}

function _simulateDesyncParamLines(data, res) {
    paramLinesCallCount++;
    if (paramLinesCallCount === 10 ) {
        data.isSynchronized = false;
        paramLinesCallCount = 0;
        console.log('simulation désynchronisation');
        _return410(res)
    }
}

function getGraphic(req, res, next) {
    var types = ["SNR", "HLOG", "QLN", "BITS"];
    var type = req.params.type;
    var data = {
        "graphicType": types[Math.floor((Math.random() * 4))],
        "points": []
    };

    if (types.indexOf(type) === -1) {
        _return501(res, type);
    } else {
        _generateDumbData();
        res.send(data);
    }

    function _generateDumbData() {
        for (var i = 0; i < 512; i++) {
            data.points.push({
                "x": i,
                "y": i === 0 ? 0 : Math.log(i) + Math.floor((Math.random() * 10) + 1)
            });
        }
    }
}

function getStatus(req, res, next) {
    var data = {
        "deviceType": "MAMBO",
        "wifiName": "ZTE_H168N6FFD02",
        "connectionStatus": "SHOWTIME",
        "sessionID": 5,
        "isConnected": true
    };

    //_return410(res);

    res.send(data);
}

function _return410(res) {
    var e = {
        status: 410,
        code: 'CODE',
        description: 'No Device'
    };
    res.status(410)
        .send(e)
        .end();
}

function _return501(res, param) {
    var e = {
        status: 501,
        code: 'CODE',
        description: 'Not implemented parameter : ' + param
    };
    res.status(501)
        .send(e)
        .end();
}
