var express = require('express');
var mongoose = require('mongoose');
//biblioteca para permitir receber post no body
var bodyParser = require('body-parser');

var router = express.Router();

var Aluno = mongoose.model("Aluno", 
{ 
	nome:String,
	idade:Number,
	profissao:String,
	curso:String,
	notas:[Number]

},"alunos");

//vamos criar uma api
router.get("/alunos",function(req, res) {
	
	Aluno.find({}, "nome idade profissao curso notas" ,function (err, doc) {
		
		if(err){ res.send(err); }

		res.json({"mauker":doc});
	})

})
router.get("/alunos/:id",function(req, res) {
	
	Aluno.findOne({_id:req.params.id}, "nome idade profissao curso notas" ,function (err, doc) {
		
		if(err){ res.send(err); }

		res.json(doc);
	})
})

router.post("/alunos", function (req, res) {

	var aluno = new Aluno({ 
		nome:req.body.nome,
		idade:req.body.idade,
		profissao:req.body.profissao,
		curso:req.body.curso,
		notas:req.body.notas
	})

	aluno.save(function(err) {
		if(err){ res.send(err); }
		
		res.json(aluno)
	})

})

router.put("/alunos", function (req, res) {

	Aluno.findOne({_id:req.body._id},function (err, doc) {
		
		if(err){ res.send(err)}

		doc.nome  		= req.body.nome,
		doc.idade 		= req.body.idade,
		doc.profissao 	= req.body.profissao,
		doc.curso 		= req.body.curso,
		doc.notas 		= req.body.notas

		doc.save();

		res.json(doc)
	})

})


module.exports = router;
