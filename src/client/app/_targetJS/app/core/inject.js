/**
 * Created by sebastienmouret on 31/03/2016.
 */
var app;
(function (app) {
    var core;
    (function (core) {
        'use strict';
        function Inject(injectable) {
            return function (prototype, method, argumentPosition) {
                prototype.$inject = prototype.$inject || [];
                prototype.$inject[argumentPosition] = injectable;
            };
        }
        core.Inject = Inject;
    })(core = app.core || (app.core = {}));
})(app || (app = {}));

//# sourceMappingURL=inject.js.map
