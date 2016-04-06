(function () {
    'use strict';

    angular
        .module('app.mesure')
        .factory('mamboService', mamboService);

    /* @ngInject */
    function mamboService($resource, $q, params,  $rootScope) {

        var API = {
            PARAMLINES: {url: 'paramLines', args: null},
            GRAPHIC: {url: 'graphic/:graphicType', args: {graphicType: '@graphicType'}},
            STATUS: {url: 'status', args: null}
        };

        return {
            getParamLines: getParamLines,
            getGraphic: getGraphic,
            getStatus: getStatus,
            isSync: isSync
        };

        function getParamLines() {
            function _buildParamLines(data) {
                var mesure = {};
                mesure.mont = {
                    debReel: data.realFlowUp,
                    debAttActu: data.maxFlowUp,
                    debAttMinMax: {},
                    margeBruitActu: data.noiseMarginUp,
                    margeBruitMinMax: {},
                    SES: data.sesUp,
                    CRC: data.crcUp,
                    FEC: data.fecUp,
                    attenu: data.attnUp
                };
                mesure.desc = {
                    debReel: data.realFlowDown,
                    debAttActu: data.maxFlowDown,
                    debAttMinMax: {},
                    margeBruitActu: data.noiseMarginDown,
                    margeBruitMinMax: {},
                    SES: data.sesDown,
                    CRC: data.crcDown,
                    FEC: data.fecDown,
                    attenu: data.attnDown
                };
                return mesure;
            }

            return _getResource(API.PARAMLINES).then(function (resource) {
                return resource.get().$promise.then(_buildParamLines);
            });
        }

        function getGraphic(graphicType) {
            function _buildGraphic(data) {
                return {
                    graphicType: data.graphicType,
                    points: data.points
                };
            }
            return _getResource(API.GRAPHIC).then(function (resource) {
                return resource.get({graphicType: graphicType}).$promise.then(_buildGraphic);
            });
        }

        function getStatus() {
            function _buildStatus(data) {
                var mamboStatus = {deviceType: data.deviceType,
                    wifiName: data.wifiName,
                    status: data.connectionStatus,
                    isConnected: data.isConnected
                };
                $rootScope.$broadcast('event:mambo:statusUpdated', mamboStatus);
                return mamboStatus;
            }
            return _getResource(API.STATUS).then(function (resource) {
                return resource.get().$promise.then(_buildStatus);
            });
        }

        //todo à virer ??
        function isSync(status) {
            var p = $q.when(false);
            if (status && status.status) {
                p = $q.when(true);
            }
            return p;
        }

        /**
         * Retourne une ressource correspondant à l'api passée en paramètre
         * @param {*} api à construire
         * @returns {IPromise<$resource>} une resource angular correspondant à l'api
         * @private
         */
        function _getResource(api) {
            var resource = null;

            function buildResource(apiServiceNatif, endURL) {
                if (api.args) {
                    resource = $resource(_buildAPIURL(apiServiceNatif, endURL), api.args);
                } else {
                    resource = $resource(_buildAPIURL(apiServiceNatif, endURL));
                }
                return resource;
            }

            return params.getParams().then(function (data) {
                return buildResource(data.apiServiceNatif, api.url);
            }).catch(function () {
                return buildResource('', api.url);
            });
        }

        /**
         * Construit l'url de l'API en concaténant 2 chaines
         * @param {String} apiServiceNatif url du service natif début d'url ex: http://localhost/
         * @param {String} endURL API ex: status
         * @returns {*} http://localhost/status
         * @private
         */
        function _buildAPIURL(apiServiceNatif, endURL) {
            var result = endURL;
            if (apiServiceNatif) {
                result = apiServiceNatif + endURL;
            }
            return result;
        }

    }
})();
