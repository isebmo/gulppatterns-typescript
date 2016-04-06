(function () {
    'use strict';

    angular
        .module('app.graph')
        .directive('graph', graph);

    /* @ngInject */
    function graph() {
        var directive = {
            bindToController: true,
            controller: GraphCtrl,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {
                graphicType: '=',
                updateTime: '=',
                title: '=',
                subtitle: '='
            },
            template: '<div><div style="width:100%; height:350px;" id="graph"></div></div>'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

    /* @ngInject */
    function GraphCtrl(mamboService, $interval, $scope, Graph, $log) {
        var vm = this;
        var g;
        var liveUpdateInterval;
        var updateTime = vm.updateTime || 10000;
        var currentGraph;

        _activate();

        function _activate() {
            $scope.$watch('vm.graphicType', function () {
                currentGraph = new Graph(vm.graphicType);
                _startGraph();
            });

            $scope.$on('$destroy', function () {
                _cancelIntervals();
            });
        }

        function _cancelIntervals() {
            if (liveUpdateInterval) {
                $interval.cancel(liveUpdateInterval);
            }
        }

        function _startGraph() {
            _redraw();
            mamboService.getGraphic(currentGraph.type)
                .then(_initGraph)
                .then(_updateTitle);
            if (currentGraph.realTime) {
                liveUpdateInterval = $interval(_updateData, updateTime);
            } else {
                $interval.cancel(liveUpdateInterval);
            }
        }

        function _redraw() {
            if (g) {
                currentGraph.datas = [];
                g.updateOptions({});
            }
        }

        function _updateTitle() {
            vm.title = currentGraph.getTitle();
            vm.subtitle = currentGraph.getDescription();
        }

        /* global Dygraph:false */
        function _initGraph(data) {
            g = new Dygraph(document.getElementById('graph'),
                // For possible data formats, see http://dygraphs.com/data.html
                // The x-values could also be dates, e.g. "2012/03/15"
                _transformData(data, currentGraph.datas),
                {
                    // options go here. See http://dygraphs.com/options.html
                    legend: 'always',
                    //animatedZooms: true,
                    strokeWidth: 1,  // default stroke width
                    series: {
                        Y1: {
                            strokeWidth: 1  // Y1 gets a special value.
                        },
                        Y3: {
                            strokeWidth: 1  // so does Y3.
                        }
                    },
                    axes: {
                        x: {
                            axisLabelFormatter: function (x) {
                                return '' + x;
                            }
                        },
                        y: {
                            axisLabelFormatter: function (y) {
                                return '' + y;
                            }
                        }
                    },
                    ylabel: currentGraph.ylabel,
                    xlabel: currentGraph.xlabel,
                    labels: currentGraph.legend
                });
        }

        function _updateData() {
            mamboService.getGraphic(currentGraph.type).then(function (data) {
                for (var i = 0; i < data.points.length; i++) {
                    var p = data.points[i].y;
                    if (p < currentGraph.datas[i][2]) {
                        currentGraph.datas[i][2] = p;
                    } else if (p > currentGraph.datas[i][3]) {
                        currentGraph.datas[i][3] = p;
                    }
                    currentGraph.datas[i][1] = p;
                }
                _updateTitle();
                g.updateOptions({'file': currentGraph.datas});
            });
        }

        function _transformData(dataMambo, data) {
            for (var i = 0; i < dataMambo.points.length; i++) {
                if (currentGraph.realTime) {
                    data.push([dataMambo.points[i].x, dataMambo.points[i].y,
                        dataMambo.points[i].y, dataMambo.points[i].y]);
                } else {
                    data.push([dataMambo.points[i].x, dataMambo.points[i].y]);
                }
            }
            return data;
        }

    }

})();

