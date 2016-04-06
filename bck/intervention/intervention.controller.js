(function () {
    'use strict';

    angular
        .module('app.intervention')
        .controller('Intervention', Intervention);

    /* @ngInject */
    /*jshint -W072 */
    function Intervention(interventionStorageService, interventionCurrentService, interventionExistService,
                          MODIFICATION_RIGHT, loadParam, checkQueryParam, INTERVENTION_EVENT,
                          toastr, $uibModal, $stateParams, $q, $log, params, $rootScope, $state,
                          $scope) {
        var vm = this;

        vm.promiseSpinner = null;
        vm.param = {
            title: $stateParams.title,
            param: loadParam,
            actionEnregistrement: null // porte la méthode du service des interventions pour enregistrer
        };
        vm.fn = {
            validateIntervention: validateIntervention,
            cancelModification: cancelModification,
            modifyIntervention: modifyIntervention,
            createIntervention: createIntervention,
            changeProfil: changeProfil,
            isNdAlterable: isNdAlterable,
            isFormExceptNdAlterable: isFormExceptNdAlterable,
            isFormAlterable: isFormAlterable,
            existIntervention: existIntervention,
            formatDescription: formatDescription
        };

        var onCurrentUpdated;

        activate();

        ///////////////////
        /**
         * Charge les données nécessaires dans la vue, 3 cas de figures :
         *  - on arrive sur la vue un ND spécifique qui correspond à une où plusieurs interventions
         *  - on arrive sur la vue un ND spécifique qui ne correspond à aucune interventions
         *  - On arrive sur la vu sans ND
         */
        function activate() {
            if (checkQueryParam.nd && checkQueryParam.interventions.length) {
                _loadInterventionSelection();
            } else if (checkQueryParam.nd) {
                createIntervention(checkQueryParam.nd);
            } else {
                _loadInterventionFromLocal();
            }
            onCurrentUpdated = $rootScope.$on(INTERVENTION_EVENT.CURRENT_UPDATED, function (event, intervention) {
                //en cas de synchronisation avec serveur on recharge l'intervention si changée
                if (vm.param.actionEnregistrement === vm.fn.modifyIntervention) {
                    $state.reload('home.helios.intervention');
                }
            });
            $scope.$on('$destroy', function () {
                //destroy listener
                onCurrentUpdated();
            });
        }

        /**
         * On essaye de charger l'intervention courrante stockée dans interventionStorageService
         * Si on y arrive pas, on crée une intervention vide
         * @private
         */
        function _loadInterventionFromLocal() {
            vm.promiseSpinner = interventionCurrentService.getCurrentIntervention().then(function (inter) {
                if (inter && inter.nd) {
                    vm.param.currentIntervention = _createModelWithDefaultValues(inter);
                } else {
                    createIntervention();
                }
                _setProfilFromExistingIntervention();
            });
        }

        /**
         * Attribut le code du profil courant enregistré
         * => le codeProfilCourant est un type primitif pour permettre de resélectionner le radio-bouton
         * @private
         */
        function _setProfilFromExistingIntervention() {
            if (vm.param.currentIntervention.profilcourant) {
                vm.param.currentIntervention.codeProfilCourant = vm.param.currentIntervention.profilcourant.code;
            }
        }

        /**
         * Initialise dans le model du controller une nouvelle intervention vierge
         * avec les paramètres passés dans l'url
         * @param {number} [defaultND] - attribut un ND à l'intervention créée
         */
        function createIntervention(defaultND) {
            vm.param.actionEnregistrement = interventionCurrentService.createIntervention;
            vm.param.currentIntervention = _createEmptyModel(defaultND);
        }

        /**
         * Gère la modal de bootstrap qui permet de charger une intervention
         * La modal propose la liste des interventions associé au ND concerné
         * L'utilisateur peut alors soit charger une intervention de la liste
         *                          soit créer une intervention avec par défaut le ND
         * @private
         */
        function _loadInterventionSelection() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/intervention/selectIntervention/selectIntervention.html',
                controller: 'SelectInterventionCtrl',
                controllerAs: 'vm',
                backdrop: 'static', // ne peut pas quitter la modal en cliquant en dehors
                keyboard: false, // ne peut pas quitter la modal en appuyant sur Echap
                size: 'lg',
                resolve: {
                    interventions: function () {
                        return checkQueryParam;
                    }
                }
            });

            modalInstance.result.then(function (intervention) {
                if (intervention) {
                    _load(intervention);
                } else {
                    createIntervention(checkQueryParam.nd);
                }
            });

            /////////////////

            function _load(intervention) {
                var filter = {nd: intervention.nd, date: intervention.date};
                vm.promiseSpinner = interventionStorageService.getIntervention(filter)
                    .then(_rejectIfNoIntervention)
                    .then(interventionCurrentService.setCurrentIntervention)
                    .then(_setInVm)
                    .catch(function (err) {
                        toastr.error(err);
                    });

                ///////////////////

                function _setInVm(inter) {
                    vm.param.currentIntervention = _createModelWithDefaultValues(inter);
                    _setProfilFromExistingIntervention();
                    return inter;
                }

                function _rejectIfNoIntervention(inter) {
                    if (!inter) {
                        return $q.reject('No such selected Intervention');
                    }
                    return inter;
                }
            }
        }

        /**
         * Si on update alors il faut ajouter les nouvelles valeurs à l'intervention courrante du service
         * Sinon on crée une intervention basée sur une référence différente de celle manipulée par le controller
         */
        function validateIntervention() {
            vm.promiseSpinner = interventionCurrentService.getCurrentIntervention()
                .then(_overwriteIfUpdate)
                .then(vm.param.actionEnregistrement)
                .then(_greetingAndLockForm)
                .catch(function () {
                    toastr.error('Échec de l\'enregistrement de l\'intervention');
                });

            ///////////////////

            function _overwriteIfUpdate(interStored) {
                var isAlreadyExisting = vm.param.actionEnregistrement === interventionCurrentService.updateIntervention;
                if (isAlreadyExisting) {
                    _overwriteIntervention(interStored, vm.param.currentIntervention);
                } else {
                    interStored = _createModelWithDefaultValues(vm.param.currentIntervention);
                    _setURLParameters(interStored);
                }
                return interStored;
            }

            function _greetingAndLockForm() {
                toastr.success('Enregistrement de l\'intervention réussi');
                vm.param.actionEnregistrement = null;
            }
        }

        function cancelModification() {
            _loadInterventionFromLocal();
            vm.param.actionEnregistrement = null;
        }

        function modifyIntervention() {
            vm.param.actionEnregistrement = interventionCurrentService.updateIntervention;
        }

        /** Lie le codeProfilCourant (du bouton radio) au profilcourant (stocké dans l'intervention) */
        function changeProfil(profil) {
            vm.param.currentIntervention.profilcourant = profil;
        }

        function isNdAlterable() {
            return vm.param.currentIntervention &&
                (!vm.param.currentIntervention.rights ||
                vm.param.currentIntervention.rights.indexOf(MODIFICATION_RIGHT.ND) !== -1);
        }

        function isFormExceptNdAlterable() {
            return vm.param.currentIntervention &&
                (!vm.param.currentIntervention.rights ||
                vm.param.currentIntervention.rights.indexOf(MODIFICATION_RIGHT.ANYTHING_EXCEPT_ND) !== -1);
        }

        function isFormAlterable() {
            return vm.param.currentIntervention &&
                (!vm.param.currentIntervention.rights ||
                vm.param.currentIntervention.rights.indexOf(MODIFICATION_RIGHT.ND) !== -1 ||
                vm.param.currentIntervention.rights.indexOf(MODIFICATION_RIGHT.ANYTHING_EXCEPT_ND) !== -1);
        }

        /**
         * Initialisation de la représentation locale des données d'une intervention
         * */
        function _createEmptyModel(defaultND) {
            return {
                nd: defaultND || null,
                profilcourant: null,
                dysfonctionnements: {
                    koJamais: false,
                    koDeja: false,
                    okAutre: false,
                    strAutre: null
                }
            };
        }

        function _createModelWithDefaultValues(defaultValue) {
            var inter = _createEmptyModel();
            _overwriteIntervention(inter, defaultValue);
            return inter;
        }

        function _overwriteIntervention(overwrited, dataSource) {
            overwrited.nd = dataSource.nd;
            overwrited.date = dataSource.date;
            overwrited.profilcourant = dataSource.profilcourant;
            overwrited.codeProfilCourant = dataSource.codeProfilCourant;

            overwrited.dysfonctionnements = overwrited.dysfonctionnements || {};
            dataSource.dysfonctionnements = dataSource.dysfonctionnements || {};
            overwrited.dysfonctionnements.koJamais = dataSource.dysfonctionnements.koJamais;
            overwrited.dysfonctionnements.koDeja = dataSource.dysfonctionnements.koDeja;
            overwrited.dysfonctionnements.okAutre = dataSource.dysfonctionnements.okAutre;
            overwrited.dysfonctionnements.strAutre = dataSource.dysfonctionnements.strAutre;

            overwrited.rights = dataSource.rights;
        }

        function _setURLParameters(inter) {
            inter.baseGPC = checkQueryParam.baseGPC;
            inter.numint = checkQueryParam.numint;
            inter.act = checkQueryParam.act;
            inter.prod = checkQueryParam.prod;
        }

        /**
         * Test PHA existIntervention
         */
        function existIntervention() {
            var promise = interventionExistService.existIntervention(vm.param.currentIntervention.nd);
            promise.then(function (data) {
                $log.debug('test existIntervention : ' + data.exist + ' | ND : ' + vm.param.currentIntervention.nd);
            });
        }

        function formatDescription(descriptions) {
            return params.getDescInHTML(descriptions);
        }

    }
})();
