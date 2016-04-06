module app.dashboard {
    import Inject = app.core.Inject;
    import IPromise = angular.IPromise;
    'use strict';

    interface IDashboardVm {
        news: { title: string, description: string };
        messageCount: number;
        people: Array<any>;
        title: string;
        getMessageCount: () => ng.IPromise<number>;
        getPeople: () => ng.IPromise<Array<any>>;
    }

    export class DashboardController implements IDashboardVm {

        constructor(@Inject('$q') private $q:ng.IQService,
                    @Inject('dataservice') private dataservice:app.core.IDataService,
                    @Inject('logger') private logger:blocks.logger.Logger) {
            var promises:Array<IPromise<any>> = [this.getMessageCount(), this.getPeople()];
            this.$q.all(promises).then(function () {
                logger.info('Activated Dashboard View');
            });
        }

        news = {
            title: 'helloworld',
            description: 'Hot Towel Angular is a SPA template for Angular developers.'
        };
        messageCount:number = 0;
        people:Array<any> = [];
        title:string = 'Dashboard';

        getMessageCount() {
            return this.dataservice.getMessageCount().then((data) => {
                this.messageCount = data;
                return this.messageCount;
            });
        }

        getPeople() {
            return this.dataservice.getPeople().then((data) => {
                this.people = data;
                return this.people;
            });
        }
    }

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);
}
