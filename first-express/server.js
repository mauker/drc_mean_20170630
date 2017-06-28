//estamos carregando o framework do express
const express = require('express');
//estamos criando o nosso app com base no express
const app = express();

//criamos uma rota para que quando o request for vazio, seja retornado um texto de hello word
app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})