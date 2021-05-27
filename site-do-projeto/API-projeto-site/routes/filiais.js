/*Inserindo dados no estoque*/
router.post('/', function(req, res, next) {
	console.log('Criando um estoque');
	
	Estoque.create({
		//aqui 'nome' é o da rota que vai para usuario
		telefoneCelular: req.body.telefoneCelular,
		cep: req.body.cep,
		cidade: req.body.cidade,
		uf: req.body.uf,
		bairro: req.body.bairro,
		logradouro: req.body.logradouro,
		numero: req.body.numero,
		complemento: req.body.complemento,
	}).then(resultado => {
		console.log(`Registro criado: ${resultado}`)
        res.send(resultado);
    }).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});