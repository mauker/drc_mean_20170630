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

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
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