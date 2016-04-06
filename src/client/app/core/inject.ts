/**
 * Created by sebastienmouret on 31/03/2016.
 */
module app.core {
    'use strict';

    export function Inject(injectable) {
        return (prototype, method, argumentPosition) => {
            prototype.$inject = prototype.$inject || [];
            prototype.$inject[argumentPosition] = injectable;
        };
    }
}
