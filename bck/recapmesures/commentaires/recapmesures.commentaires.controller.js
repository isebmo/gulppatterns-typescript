(function () {
    'use strict';

    angular
        .module('app.recapmesures.commentaires')
        .controller('RecapMesuresCommentairesCtrl', RecapMesuresCommentairesCtrl);

    /* @ngInject */
    function RecapMesuresCommentairesCtrl($uibModalInstance, commentaire) {
        var vm = this;
        vm.title = 'Mesures';
        vm.data = {commentaire: commentaire};
        vm.ok = function () {
            $uibModalInstance.close(vm.data);
        };
        vm.cancel = function () {
            $uibModalInstance.dismiss();
        };
    }
})();
