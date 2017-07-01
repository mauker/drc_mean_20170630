(function () {
	//criamos nosso app
	var app = angular.module("app",[]);
	//vamos criar nossa controller para o envio do dado no rest
	app.controller("FormCtrl",["$scope","RestAPI",function ($scope, RestAPI) {
		//vamos definir nossas variaveis globais
		$scope.user = {name:""};
		//nossos métodos
		$scope.search = function (user) {
			//neste método receberemos o user do form
			
			RestAPI.getAlunoByQuery(user);
		}
		RestAPI.getAlunoByQuery($scope.user);

	}])

	//vamos criar nossa controller que insere 
	app.controller("FormInsertCtrl",["$scope","RestAPI",function ($scope, RestAPI) {
		//vamos definir nossas variaveis globais
		$scope.user = {};
		$scope.loading = false;
		//nossos métodos
		$scope.insert = function (user) {

			$scope.loading = true;

			if(user._id){
				//neste método receberemos o user do form
				RestAPI.updateAluno(user,function(){
					$scope.loading = false;
				});
			}else{
				//neste método receberemos o user do form
				RestAPI.insertAluno(user,function(){
					$scope.loading = false;
					RestAPI.getAlunos();
				});
			}
		}
		

		$scope.$on("EditAluno",function(event, data) {
			
			$scope.user = data;
		});

	}])
	//controller do result
	app.controller('ResultCtrl', ['$scope',"RestAPI", '$rootScope', function($scope, RestAPI, $rootScope){
		
		$scope.$on("GetAluno",function(event, data) {
			console.log("Recebeu", data);
			$scope.alunos = data.data;
		});

		$scope.edit = function (aluno) {
			$rootScope.$broadcast("EditAluno",aluno);
		}

		$scope.excluir = function (aluno) {
			if(confirm("Deseja mesmo excluir?")){

			//		function () {
					//neste método receberemos o user do form
					RestAPI.excluirAluno(aluno,function(){
						RestAPI.getAlunos();
					});

			
			}
			
		}
	}])


	//vamos criar a factory
	app.factory('RestAPI', ['$rootScope','$http', function($rootScope,$http){
		
		var endURL = "http://localhost:3000/api/alunos";


		function getAlunoByQuery(query) {
			
			var urlFinal = endURL;

			if(query.name != ""){
				urlFinal = endURL + "/name/" +  query.name;
			}
		
			
			$http({
			  method: 'GET',
			  url: urlFinal
			}).then(function (data){

				console.log(data);
				$rootScope.$broadcast("GetAluno",data)

			},function (error){
				console.log(error)
			});

			
			
		}

		function getAlunos() {
			
			var urlFinal = endURL;

			$http({
			  method: 'GET',
			  url: urlFinal
			}).then(function (data){

				console.log(data);
				$rootScope.$broadcast("GetAluno",data)

			},function (error){
				console.log(error)
			});

			
			
		}
		function insertAluno(aluno, callback) {
			
			var urlFinal = endURL;

			$http({
			  method: 'POST',
			  url: urlFinal,
			  data:aluno
			}).then(function (data){

				callback(data);

			},function (error){
				console.log(error)
			});

			
			
		}
		function updateAluno(aluno, callback) {
			
			var urlFinal = endURL;

			$http({
			  method: 'PUT',
			  url: urlFinal,
			  data:aluno
			}).then(function (data){

				callback(data);

			},function (error){
				console.log(error)
			});

			
			
		}

		function excluirAluno(aluno, callback) {
			
			var urlFinal = endURL;

			$http({
			  method: 'DELETE',
			  url: urlFinal + "/"+ aluno._id,
			  data:aluno
			}).then(function (data){

				callback(data);

			},function (error){
				console.log(error)
			});

			
			
		}

		return {
			getAlunoByQuery:getAlunoByQuery,
			getAlunos:getAlunos,
			insertAluno:insertAluno,
			updateAluno:updateAluno,
			excluirAluno:excluirAluno
		}
	}])


})()