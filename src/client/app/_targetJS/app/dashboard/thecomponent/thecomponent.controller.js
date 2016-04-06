var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Created by sebastienmouret on 31/03/2016.
 */
var app;
(function (app) {
    var dashboard;
    (function (dashboard) {
        var thecomponent;
        (function (thecomponent) {
            var Inject = app.core.Inject;
            var TheComponentCtrl = (function () {
                /*  */
                function TheComponentCtrl($timeout) {
                    this.$timeout = $timeout;
                }
                TheComponentCtrl = __decorate([
                    __param(0, Inject('$timeout'))
                ], TheComponentCtrl);
                return TheComponentCtrl;
            }());
            thecomponent.TheComponentCtrl = TheComponentCtrl;
            angular
                .module('app.dashboard.thecomponent')
                .controller('TheComponentCtrl', TheComponentCtrl);
        })(thecomponent = dashboard.thecomponent || (dashboard.thecomponent = {}));
    })(dashboard = app.dashboard || (app.dashboard = {}));
})(app || (app = {}));

//# sourceMappingURL=thecomponent.controller.js.map
