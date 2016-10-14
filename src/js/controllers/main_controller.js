
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
.controller('MainController', function($scope, $http, $window, $location, $document, config){

        document.addEventListener('deviceready', function() {
            leituraNFC();
        });

        // recupera dados da ultima pesquisa
        $scope.dadosBolsa = $window.localStorage.getItem("dadosBolsa");
        $scope.dadosBolsa = $scope.dadosBolsa ? JSON.parse($scope.dadosBolsa) : {};

        $scope.isDisabled = false;
        //$scope.consulta = null;

        $scope.rastrear = function (codigoBolsa) {
            $scope.isDisabled = true;
            //leituraNFC();
            $scope.ajaxRastreamento(codigoBolsa);
            //$location.path("bolsa");
        };

        $scope.ajaxRastreamento = function(codigoBolsa) {

            $http({
                url: config.srv +'/ws/rastrearBolsa/'+codigoBolsa,
                method: 'GET'
            })
            .error(function(dados) {
                $scope.isDisabled = false;
                alert("Verifique sua conexão com a internet");
            })
            .success(function(dados) {
                if(dados.erro == undefined) {
                    alert("Erro de comunicação com o servidor");
                }
                else if(dados.erro != 0) {
                    alert(dados.msg_erro);
                } else {
                    $scope.dadosBolsa = dados;

                    // salva os dados da ultima bolsa pesquisada
                    $window.localStorage.setItem("dadosBolsa", JSON.stringify($scope.dadosBolsa));

                    // mostra a tela de detalhes da bolsa
                    $location.path("bolsa");
                }

                console.log(dados);

                $scope.isDisabled = false;
            });


        };

});