var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var app;
(function (app) {
    var dashboard;
    (function (dashboard) {
        var Inject = app.core.Inject;
        'use strict';
        var DashboardController = (function () {
            function DashboardController($q, dataservice, logger) {
                this.$q = $q;
                this.dataservice = dataservice;
                this.logger = logger;
                this.news = {
                    title: 'helloworld',
                    description: 'Hot Towel Angular is a SPA template for Angular developers.'
                };
                this.messageCount = 0;
                this.people = [];
                this.title = 'Dashboard';
                var promises = [this.getMessageCount(), this.getPeople()];
                this.$q.all(promises).then(function () {
                    logger.info('Activated Dashboard View');
                });
            }
            DashboardController.prototype.getMessageCount = function () {
                var _this = this;
                return this.dataservice.getMessageCount().then(function (data) {
                    _this.messageCount = data;
                    return _this.messageCount;
                });
            };
            DashboardController.prototype.getPeople = function () {
                var _this = this;
                return this.dataservice.getPeople().then(function (data) {
                    _this.people = data;
                    return _this.people;
                });
            };
            DashboardController = __decorate([
                __param(0, Inject('$q')),
                __param(1, Inject('dataservice')),
                __param(2, Inject('logger'))
            ], DashboardController);
            return DashboardController;
        }());
        dashboard.DashboardController = DashboardController;
        angular
            .module('app.dashboard')
            .controller('DashboardController', DashboardController);
    })(dashboard = app.dashboard || (app.dashboard = {}));
})(app || (app = {}));

//# sourceMappingURL=dashboard.controller.js.map
