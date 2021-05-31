var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Armazem = require('../models').Armazem;//deve-se alterar aqui



/* Cadastrar usuário */
router.post('/estoque', function (req, res, next) {// aqui ('/cadastrarEstoque')
	console.log('Criando um usuário');
	//aqui você está criando a tabela 
	Armazem.create({
		nomeProduto: req.body.nomeProduto,
        quantidadeProduto: req.body.quantidadeProduto,
		valorProduto: req.body.valorProduto
	
		
	}).then(resultado => {
		console.log(`Registro criado: ${resultado}`)
		res.send(resultado);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});


module.exports = router;//serve pra enviar os dados pro json operar
