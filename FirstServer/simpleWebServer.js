//vamos criar uma variavel baseada no modulo de http
var http = require("http");

//vamos criar o nosso servidor
var server = http.createServer(function(req,res) {
	
	//Vamos imprimir os parametros enviados na requisição
	var url = require("url");
	var params = url.parse(req.url, true);
	console.log(params.query);

	

	//baseando nos na url podemos indicar um arquivo para ser entregue para quem fez o request
	var fs = require("fs");
	fs.readFile(__dirname + params.pathname, function(err,contentReaded){

		if(err){
			console.log(err);
			res.writeHead(404, {'Content-Type': 'text/html',
								'Content-Type': 'charset=utf-8'}); 
			res.write("<h1>404 NOT FOUND</h1>");
			res.end();
		}

		//estamos começando a escrever a resposta do meu servidor
		res.writeHead(200, {'Content-Type': 'text/html'}); 
		res.write(contentReaded,"utf-8");
		res.end();

	})

});

//starmos o nosso servidor
server.listen(3000, function () {
	console.log("Server STARTED port:3000");
})