(function () {
    'use strict';

    var mesureInfo = {
        bindings: {
            typeMesure: '<'
        },
        controller: mesureInfoCtrl
    };

    /*jshint validthis:true */
    /* @ngInject */
    function mesureInfoCtrl($uibModal, mesureInfo, $log) {
        var vm = this;
        var showModal = false;

        onInit();

        function onInit() {
            mesureInfo.showInfo(vm.typeMesure).then(function (show) {
                showModal = show;
                return show;
            }).then(mesureInfo.isAdsl).then(function (isAdsl) {
                if (showModal) {
                    _showModal(isAdsl);
                }
            }).catch(function () {
                $log.error('impossible d\'afficher la popin d\'info');
            });
        }

        function _showModal(isAdsl) {
            var modalInstance = $uibModal.open({
                animation: true,
                controller: modalCtrl,
                controllerAs: 'modalInfo',
                templateUrl: 'app/recapmesures/mesure/mesureInfo/mesureInfo.html',
                backdrop: true,
                keyboard: true,
                size: 'lg',
                resolve: {
                }
            });

            function modalCtrl() {
                var vm = this;
                vm.param = {
                    isADSL: isAdsl
                };

                vm.fn = {
                    closePopIn: closePopIn
                };

                function closePopIn() {
                    modalInstance.close();
                }
            }
        }
    }

    angular
        .module('app.recapmesures.mesure.info')
        .component('mesureInfo', mesureInfo);
})();

