//Criamos o nosso modulo do angular
var myApp = angular.module('myApp',[]);


myApp.controller('MainCtrl', ['$scope', function($scope) {

	$scope.mensagem = "Hello Word!";

	$scope.showMessage = function (event) {
		$scope.mensagem = "JONAS";
		alert($scope.mensagem);
	}

}]);