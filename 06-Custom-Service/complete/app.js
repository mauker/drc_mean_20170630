(function () {
	
	var app = angular.module("customServiceApp",[]);

	//vamos criar a factory
	app.factory("StringTransit",function() {
		

		var stringStorage = "";

		function getString() {
			return stringStorage
		}

		function setString(str) {
			stringStorage = str;
		}

		return {
			get:getString,
			set:setString,
			str:stringStorage
		}
	})

	//vamos criar nossas controllers
	app.controller("MainCtrl",["$scope","StringTransit", function ($scope, StringTransit) {

		$scope.pegarMensagem = function () {
				
				return StringTransit.get();
			}

	}]);


	app.controller("Secao1Ctrl",["$scope","StringTransit", function ($scope, StringTransit) {
			
			


	}]);

	app.controller("Secao2Ctrl",["$scope","StringTransit", function ($scope, StringTransit) {
			
			
	}]);

	
	app.controller("ServicoSetterCtrl",["$scope","StringTransit", function ($scope, StringTransit) {
			
			$scope.novaMensagem;

			$scope.setarMensagem = function () {
				
				StringTransit.set($scope.novaMensagem);
			}
	}]);






})();