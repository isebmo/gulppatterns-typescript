/**
 * Created by sebastienmouret on 31/03/2016.
 */
module app.dashboard.thecomponent {
    import Inject = app.core.Inject;

    export class TheComponentCtrl {

        test: string;

        /*  */
        constructor (@Inject('$timeout') private $timeout: ng.ITimeoutService) {
        }
    }

    angular
        .module('app.dashboard.thecomponent')
        .controller('TheComponentCtrl', TheComponentCtrl);
}
