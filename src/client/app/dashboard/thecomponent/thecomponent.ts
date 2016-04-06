/**
 * Created by sebastienmouret on 31/03/2016.
 */
module app.dashboard.thecomponent {

    export class TheComponent implements ng.IComponentOptions {

        public binding:{
            test: '<'
        };
        public transclude:boolean = false;
        public controller:Function = TheComponentCtrl;
        public controllerAs:string = 'vm';
        public template:string = '<a style="font-size: large">coucou</a>';
    }

    angular
        .module('app.dashboard.thecomponent')
        .component('theComponent', new TheComponent());
}
