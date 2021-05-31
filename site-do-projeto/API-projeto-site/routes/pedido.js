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

/*Fazer pedido*/

router.get('/cardapio/:form_cadastro', function(req, res, next) {
	console.log('Publicando mousse');
	
	//var idcaminhao = req.body.idcaminhao; // depois de .body, use o nome (name) do campo em seu formulário de login
	var descricao = req.params.idLimao;
	
	let instrucaoSql = "";
	
	if (env == 'dev') {
		// abaixo, escreva o select de dados para o Workbench
		instrucaoSql = `select nomeProduto, quantidadeProduto,valorProduto from produto where fkPedidos = ${descricao} order by id desc limit 1`;
	} else if (env == 'production') {
		// abaixo, escreva o select de dados para o SQL Server
		instrucaoSql = `select top 1 temperatura, umidade, FORMAT(momento,'HH:mm:ss') as momento_grafico, fkcaminhao from leitura where fkcaminhao = ${idcaminhao} order by id desc`;
	} else {
		console.log("\n\n\n\nVERIFIQUE O VALOR DE LINHA 1 EM APP.JS!\n\n\n\n")
	}
	
	console.log(instrucaoSql);
	
	sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
	.then(resultado => {
		res.json(resultado[0]);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});

module.exports = router;//serve pra enviar os dados pro json operar
