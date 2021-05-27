var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Pedido = require('../models').Pedido;//deve-se alterar aqui



/* Cadastrar usuário */
router.post('/fazerPedido', function (req, res, next) {// aqui ('/cadastrarEstoque')
	console.log('Criando um usuário');
	//aqui você está criando a tabela 
	Pedido.create({//
		//aqui 'nome' é o da rota que vai para usuario
		//de acordo com o nome da input
		cliente: req.body.cliente,
		telefone: req.body.telefone,
		cep: req.body.cep,
		bairro: req.body.bairro,
		cidade: req.body.cidade,
		uf: req.body.uf,
		logradouro: req.body.logradouro,
		numero: req.body.numero,
		complemento: req.body.complemento,
		descricao: req.body.descricao
	}).then(resultado => {
		console.log(`Registro criado: ${resultado}`)
		res.send(resultado);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});


module.exports = router;//serve pra enviar os dados pro json operar
