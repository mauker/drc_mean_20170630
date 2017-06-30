(function () {
	//criamos nosso app
	var app = angular.module("app",[]);
	//vamos criar nossa controller para o envio do dado no rest
	app.controller("FormCtrl",["$scope","RestAPI",function ($scope, RestAPI) {
		//vamos definir nossas variaveis globais
		$scope.user = {};
		//nossos métodos
		$scope.search = function (user) {
			//neste método receberemos o user do form
			console.log(user);
			RestAPI.getAlunoByQuery(user);
		}
		RestAPI.getAlunoByQuery();

	}])
	//controller do result
	app.controller('ResultCtrl', ['$scope',"RestAPI", function($scope, RestAPI){
		
		$scope.$on("GetAluno",function(event, data) {
			console.log("Recebeu", data);
			$scope.funcionarios = data;
		});
	}])

	//vamos criar a factory
	app.factory('RestAPI', ['$rootScope','$http', function($rootScope,$http){
		
		var endURL = "http://localhost:3000/api/alunos";


		function getAlunoByQuery(query) {
			
			$http({
			  method: 'GET',
			  url: endURL
			}).then(function (data){

				console.log(data);
				$rootScope.$broadcast("GetAluno",data)

			},function (error){
				console.log(error)
			});

			
			
		}

		return {
			getAlunoByQuery:getAlunoByQuery
		}
	}])


})()