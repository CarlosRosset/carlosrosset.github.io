angular.module('rajus', [
])
  .controller('body-controller', function($scope) {

    $scope.teste='vai com deus';
    $scope.estaLogado = isLogged;
    $scope.ocultar = 'Está ocultado';
    $scope.nomes = ["José", "Maria", "Pedro", "João"];
    // console.log($scope);
    
    $scope.estaLogado = function() {
        console.log('Vem cá');
      };

});
  