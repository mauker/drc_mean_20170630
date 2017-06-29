(function(){ //self called

	//criou nosso app do angular
	var app = angular.module("calcApp",[]);

	//vamos criar nossa controller
	app.controller("CalcCtrl",["$scope",function($scope) {
		
		//vou declara minhas variaveis de trabalho
		$scope.preco = 0;
		$scope.desconto = 0;
		$scope.valorFinal = 0;
		$scope.isWatching = false;

		var watcher;

		$scope.iniciarWatch = function() {
			watcher = $scope.$watch("preco", updateValue)
			$scope.isWatching = true;	
		}
		$scope.encerrarWatch = function() {
			watcher();
			$scope.isWatching = false;
		}


		function updateValue() {
			$scope.valorFinal = $scope.preco - ($scope.preco * ($scope.desconto / 100));
		}

	}]);
	
})()

