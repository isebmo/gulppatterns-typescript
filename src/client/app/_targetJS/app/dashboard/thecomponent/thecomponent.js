/**
 * Created by sebastienmouret on 31/03/2016.
 */
var app;
(function (app) {
    var dashboard;
    (function (dashboard) {
        var thecomponent;
        (function (thecomponent) {
            var TheComponent = (function () {
                function TheComponent() {
                    this.transclude = false;
                    this.controller = thecomponent.TheComponentCtrl;
                    this.controllerAs = 'vm';
                    this.template = '<a style="font-size: large">coucou</a>';
                }
                return TheComponent;
            }());
            thecomponent.TheComponent = TheComponent;
            angular
                .module('app.dashboard.thecomponent')
                .component('theComponent', new TheComponent());
        })(thecomponent = dashboard.thecomponent || (dashboard.thecomponent = {}));
    })(dashboard = app.dashboard || (app.dashboard = {}));
})(app || (app = {}));

//# sourceMappingURL=thecomponent.js.map
