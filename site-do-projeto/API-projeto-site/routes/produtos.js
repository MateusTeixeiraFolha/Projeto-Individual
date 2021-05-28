var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Produto = require('../models').Produto;//deve-se alterar aqui



/* Cadastrar usuário */
router.post('/estocar', function (req, res, next) {// aqui ('/cadastrarEstoque')
	console.log('Criando um usuário');
	//aqui você está criando a tabela 
	Produto.create({//
		//aqui 'nome' é o da rota que vai para usuario
		//de acordo com o nome da input
		nomeProduto: req.body.nomeProduto,
		quantidade: req.body.quantidade,
		valor: req.body.valor
	
	}).then(resultado => {
		console.log(`Registro criado: ${resultado}`)
		res.send(resultado);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});


module.exports = router;//serve pra enviar os dados pro json operar
