//carregando express
var express = require("express");

var app = express();

//definimos o local da pasta publica
app.use(express.static(__dirname + '/'));  


//iniciarmos o listener do server
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
