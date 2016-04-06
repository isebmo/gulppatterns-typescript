(function () {
    'use strict';

    angular
        .module('app.mesure')
        .controller('Mesure', ActionMesure);

    /* jshint -W072 */
    /* This function has too many parameters. */
    /* @ngInject */
    function ActionMesure($state, $stateParams, $scope, $rootScope, mesuresUtilsService, toastr, $log, ETATS_MESURE,
                          ETATS_SCRUTATION, EVENT_SCRUTATION, PriseDeMesure, loadParam, interventionCurrentService,
                          interventionUtilsService) {
        var vm = this;
        var priseDeMesure;

        // Données
        vm.title = $stateParams.title + ' ' + $stateParams.typeMesure;

        vm.mesure = {};
        vm.param = {
            //nécessaire pour l'interview
            typeMesure: $stateParams.typeMesure,
            priseDeMesureParam: {}
        };

        vm.etats = {
            mesure: ETATS_MESURE,
            scrutation: ETATS_SCRUTATION
        };

        activate();

        vm.fn = {
            reinit: reinit,
            makeChoice: makeChoice
        };

        // méthode
        vm.arreter = arreter;
        vm.demarrer = demarrer;
        vm.courbe = courbe;
        vm.nouvelleMesure = nouvelleMesure;
        vm.deleteMesure = deleteMesure;
        vm.isMesure = isMesure;
        vm.isScrutation = isScrutation;
        vm.isDeletable = isDeletable;
        vm.canStartMesure = canStartMesure;
        vm.canStartGraph = canStartGraph;

        ///////////////////////

        function activate() {
            var view = {
                notifySuccess: _notifySuccess,
                notifyError: _notifyError,
                notifyWarn: _notifyWarn
            };

            priseDeMesure = new PriseDeMesure($stateParams.typeMesure, loadParam, view);

            priseDeMesure.initPriseDeMesure().then(function (priseDeMesureContext) {
                vm.mesure = priseDeMesureContext.getMesure();
                vm.param.priseDeMesureParam = priseDeMesureContext.getParam();
                vm.param.priseDeMesureParam.infoMessage =
                    priseDeMesure.getInformatifMessageToDisplay($stateParams.typeMesure);
                vm.param.showMsg = !!vm.param.priseDeMesureParam.infoMessage;
            });

            $scope.$on('$destroy', function () {
                priseDeMesure._cancelIntervalsAndTimeouts();
            });
            $rootScope.$on(EVENT_SCRUTATION.LAUNCH, function () {
                priseDeMesure.demarrerScrutation();
            });
        }

        /**
         *
         * @param {*} action
         * @param {string} action.type
         * @param {string} action.mesureSuivante
         * @param {string} action.libelle
         * @param {*} action.decision
         * @param {string} action.url
         * @param {string} action.decision
         * @param {string} action.decision.code
         *
         */
        function makeChoice(action) {
            if (action && action.decision && action.decision.code) {
                interventionCurrentService.getCurrentIntervention()
                    .then(interventionUtilsService.addChoice({code: action.decision.code}))
                    .then(interventionCurrentService.updateIntervention)
                    .catch(function (e) {
                        $log.error(e);
                        toastr.error('impossible de mettre à jour le choix');
                    });
            }
            $state.go(action.link.state, action.link.params, action.link.options);
        }

        // Actions des boutons :
        function arreter() {
            priseDeMesure.arreterMesure();
        }

        function demarrer() {
            priseDeMesure.demarrerMesure();
        }

        function courbe() {
            mesuresUtilsService.setCurrentMesure({mesure: vm.mesure, etats: vm.etats, mambo: vm.param.mambo});
            $state.go('home.helios.graph');
        }

        function isMesure(etat) {
            return priseDeMesure.isMesure(etat);
        }

        function isScrutation(etat) {
            return priseDeMesure.isScrutation(etat);
        }

        function isDeletable() {
            return priseDeMesure.isDeletable();
        }

        function nouvelleMesure() {
            priseDeMesure.nouvelleMesure();
            if ($state.current.name === 'home.helios.mesures.mesure-detail') {
                $state.go('home.helios.mesures.mesure-new', {typeMesure: $stateParams.typeMesure});
            }
        }

        function reinit() {
            priseDeMesure.RAZ();
            toastr.success('Remise à zéro des valeurs prises');
        }

        function canStartMesure() {
            return isScrutation(ETATS_SCRUTATION.SYNCHRONIZED) &&
                isMesure(ETATS_MESURE.MESURE_NON_DEMARRE);
        }

        function canStartGraph() {
            return isScrutation(ETATS_SCRUTATION.SYNCHRONIZED) &&
                (isMesure(ETATS_MESURE.MESURE_NON_DEMARRE) || isMesure(ETATS_MESURE.MESURE_FINI));
        }

        function deleteMesure() {
            vm.promiseSpinner = mesuresUtilsService.deleteMesure(vm.mesure).then(function () {
                toastr.success('La mesure a bien été supprimée');
                $state.go('home.helios.mesures.recapmesures');
            }).catch(function (e) {
                toastr.error('Impossible de supprimer la mesure');
                $log.error(e);
            });
        }

        function _notifySuccess(message) {
            toastr.success(message);
        }

        function _notifyError(message) {
            toastr.error(message);
        }

        function _notifyWarn(message) {
            toastr.warning(message);
        }

    }
})();
