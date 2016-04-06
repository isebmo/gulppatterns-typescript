(function () {
    'use strict';

    angular
        .module('app.intervention')
        .directive('constitutionNav', constitutionNav);

    /* @ngInject */
    function constitutionNav() {
        return {
            bindToController: true,
            controller: ConstitutionNavController,
            controllerAs: 'vm',
            restrict: 'EA',
            scope: {},
            templateUrl: 'app/intervention/constitution/constitution-nav.html'
        };

        ///////////////////////////

        /* @ngInject */
        function ConstitutionNavController(MODIFICATION_RIGHT, INTERVENTION_EVENT, $state, $stateParams, $rootScope,
                                           interventionUtilsService, MAMBO_EVENT, toastr, EVENT_SCRUTATION,
                                           ETATS_SCRUTATION) {

            var vm = this;
            vm.param = {
                state : $state,
                stateParams : $stateParams,
                intervention : null,
                hasRightToCreateMesure : false
            };
            vm.param.mambo = {};

            vm.etatCourant = {
                scrutation: {}
            };

            vm.errorMessageScrutation = '';

            vm.etats = {
                scrutation: ETATS_SCRUTATION
            };

            vm.fn = {
                isPointActivated: isPointActivated,
                isScrutation: isScrutation,
                demarrerScrutation: demarrerScrutation
            };

            activate();

            ////////////////////

            function activate() {
                $rootScope.$on(INTERVENTION_EVENT.CURRENT_UPDATED, function (event, inter) {
                    vm.param.intervention = inter;
                    interventionUtilsService.
                    hasRightToCreateMesure(inter, MODIFICATION_RIGHT.ANYTHING_EXCEPT_ND).then(function (bool) {
                        vm.param.hasRightToCreateMesure = bool;
                    });
                });
                $rootScope.$on(MAMBO_EVENT.STATUS.UPDATED, function (event, status) {
                    vm.param.mambo = status;
                });
                $rootScope.$on(INTERVENTION_EVENT.SYNCING.SERVER.SUCCESS, function () {
                    toastr.success('les interventions ont été sauvegardées');
                });
                $rootScope.$on(INTERVENTION_EVENT.SYNCING.SERVER.ERROR, function () {
                    toastr.error('toutes les interventions n’ont pas été sauvegardées');
                });
                $rootScope.$on(EVENT_SCRUTATION.STATE, function (event, state) {
                    vm.etatCourant.scrutation = state;
                });
                $rootScope.$on(EVENT_SCRUTATION.ERROR_MSG, function (event, message) {
                    vm.errorMessageScrutation = message;
                });
            }

            function isScrutation(etat) {
                return vm.etatCourant.scrutation === etat;
            }

            function demarrerScrutation() {
                $rootScope.$broadcast(EVENT_SCRUTATION.LAUNCH);
            }

            function isPointActivated(point) {
                var newMesure = vm.param.state.includes('home.helios.mesures.mesure-new');
                var detailMesure = vm.param.state.includes('home.helios.mesures.mesure-detail');
                var sameType = vm.param.stateParams.typeMesure === point;
                return (newMesure || detailMesure) && sameType;
            }
        }
    }
})();
