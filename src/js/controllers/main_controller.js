angular.module('SinasanApp.controllers.Main', [])

.controller('MainController', function($scope, $nfc){

        $scope.NFCcallback = function () {
            alert("callback")
        };

        $scope.NFCSucesso = function () {
            alert("sucesso")
        };

        $scope.NFCFalha = function () {
            alert("falha")
        };

        $nfc.addTagDiscoveredListener($scope.NFCcallback, $scope.NFCSucesso, $scope.NFCFalha);

        $scope.rastrear = function () {
            $scope.isDisabled = true;
        };

});