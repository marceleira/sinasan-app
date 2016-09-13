
function leituraNFC() {

    nfc.addNdefListener(function(nfcEvent) {
        var codigo;
        if(nfcEvent.tag && nfcEvent.tag.ndefMessage && nfcEvent.tag.ndefMessage.length > 0) {
            codigo = nfc.bytesToString(nfcEvent.tag.ndefMessage[0]["payload"]);
            codigo = codigo.substr(3, codigo.length);
            alert("codigo = "+codigo);
        }
    });

};

angular.module('SinasanApp.controllers.Main', [])
.controller('MainController', function($scope){

        document.addEventListener('deviceready', function(){
            leituraNFC();
        });

        //$scope.rastrear = function () {
        //    $scope.isDisabled = true;
        //    leituraNFC();
        //};

});