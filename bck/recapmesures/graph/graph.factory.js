(function () {
    'use strict';

    angular
        .module('blocks.auth')
        .factory('Graph', fGraph);

    /* @ngInject */
    function fGraph() {

        var GRAPH_CONF = {
            SNR: {
                type: 'SNR',
                legend: ['X', 'SNR', 'SNR Min', 'SNR Max'],
                ylabel: 'Valeur en dB',
                realTime: true
            },
            HLOG: {
                type: 'HLOG',
                legend: ['X', 'HLOG'],
                ylabel: 'Valeur en dB',
                realTime: false
            },
            QLN: {
                type: 'QLN',
                legend: ['X', 'QLN'],
                ylabel: 'Valeur en dBm/Hz',
                realTime: false
            },
            BITS: {
                type: 'BITS',
                legend: ['X', 'BITS'],
                ylabel: 'Nombre de bits',
                realTime: false
            }
        };

        function Graph(graphicType) {
            var conf = GRAPH_CONF[graphicType];
            if (conf) {
                this.title = 'Graphique de type ';
                this.type = conf.type;
                this.legend = conf.legend;
                this.ylabel = conf.ylabel;
                this.datas = [];
                this.xlabel = 'Porteuse';
                this.realTime = conf.realTime || false;
            } else {
                throw new Error('Graph unknown ' + graphicType);
            }
        }

        Graph.prototype.getTitle = function () {
            return this.title + this.type;
        };

        Graph.prototype.isADSL = function () {
            return this.datas.length < 513;
        };

        Graph.prototype.getDescription = function () {
            var porteuse;
            var description = '';
            if (this.type === 'SNR' && this.isADSL() && this.datas.length > 151) {
                porteuse = Math.floor(this.datas[150][1]) || '';
                description = 'Le SNR à la porteuse 150 est de ' + porteuse + ' dB';
            } else if (this.type === 'HLOG' && this.isADSL() && this.datas.length > 71) {
                porteuse = Math.floor(this.datas[70][1]) || '';
                description = 'L’atténuation à 300kHz est de ' + porteuse + ' dB';
            }
            return description;
        };

        return Graph;
    }

})();

