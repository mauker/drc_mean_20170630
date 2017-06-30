(function(){
	
	var app = angular.module("customServiceApp",[]);

	app.controller("Secao1Ctrl", ["$scope","$rootScope", function ($scope, $rootScope) {

		$scope.total = 0;

		$scope.incrementarValorTotalEm = function (valor) {
			
			$scope.total += valor;

			$rootScope.$broadcast("UpdateValue",{currentValue:$scope.total});

		}

	}])

	app.controller("Secao2Ctrl", ["$scope", function ($scope) {

		$scope.total = 0;

		$scope.$on("UpdateValue", function (event, data) {
			$scope.total = data.currentValue;

		})
	}]);


})();