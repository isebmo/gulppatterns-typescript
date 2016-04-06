(function () {
    'use strict';

    angular
        .module('app.recapmesures')
        .controller('RecapMesures', RecapMesures);

    /* @ngInject */
    function RecapMesures($uibModal, interventionCurrentService, $state, moment) {
        var vm = this;
        vm.title = 'Mesures';
        vm.areMesuresEmpty = areMesuresEmpty;
        vm.ajouterCommentaire = ajouterCommentaire;
        vm.selectMesure = selectMesure;
        vm.sensmesure = {
            choix: {
                mont: {libelle: 'sens remontant', val: 'mont'},
                desc: {libelle: 'sens descendant', val: 'desc'}
            },
            choisi: null
        };

        activate();

        function activate() {
            vm.sensmesure.choisi = vm.sensmesure.choix.mont;
            vm.promiseSpinner = interventionCurrentService.getCurrentIntervention()
                .then(function (intervention) {
                    vm.intervention = intervention;
                });

        }

        function ajouterCommentaire() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/recapmesures/commentaires/recapmesures.commentaires.html',
                controller: 'RecapMesuresCommentairesCtrl',
                controllerAs: 'vm',
                size: 'sm',
                resolve: {
                    commentaire: function () {
                        return vm.intervention.commentaire;
                    }
                }
            });

            vm.promiseSpinner = modalInstance.result
                .then(function (data) {
                    vm.intervention.commentaire = data.commentaire;
                    return vm.intervention;
                })
                .then(interventionCurrentService.updateIntervention);
        }

        function areMesuresEmpty() {
            return !vm.intervention || !vm.intervention.groupmesures || vm.intervention.groupmesures.length === 0;
        }

        function selectMesure(mesure) {
            var dateAsLong = moment(mesure.date).toDate().getTime();
            $state.go('home.helios.mesures.mesure-detail', {typeMesure: mesure.point, dateMesure: dateAsLong});
        }

    }
})();
