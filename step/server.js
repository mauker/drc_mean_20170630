//carrango a biblioteca do express
var express = require('express');
//carrega o mongoose
var mongoose = require('mongoose');
//biblioteca para permitir receber post no body
var bodyParser = require('body-parser');

var alunos = require("./api/alunos");

// conexao com o banco de dados
mongoose.connect("mongodb://localhost:27017/Escola"); // connect to mongoDB database on escola

//criamos nosso app
var app = express();


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//definimos o local da pasta publica
app.use(express.static(__dirname + '/public'));  
//configuramos o body parser para aceitar json
app.use(bodyParser.json());

//pedir para express utilizar o modulo que exportamos
app.use("/api", alunos);

//iniciamos nosso server
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});