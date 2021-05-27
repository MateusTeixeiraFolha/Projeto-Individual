create database Mousseria_Teixeira;

use Mousseria_Teixeira;

CREATE TABLE pedidos(
    idPedidos int PRIMARY KEY AUTO_INCREMENT,
    cliente VARCHAR(50),
    telefone VARCHAR(14),
    cep VARCHAR(9),
    bairro VARCHAR(50),
    cidade VARCHAR(50),
    uf CHAR(2),
    logradouro VARCHAR(100),
    numero INT,
    complemento VARCHAR(5),
    pedido VARCHAR(500)
);

CREATE TABLE usuario (
	idLogin INT PRIMARY KEY AUTO_INCREMENT,
	nomeEmpresa VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    fkPedidos INT,
	foreign key(fkPedidos)references pedidos(idPedidos)
);

CREATE TABLE produto(
    idProduto INT PRIMARY KEY AUTO_INCREMENT,
    nomeProduto VARCHAR (100),
    quantidade INT,
    valor DOUBLE,
    fkPedidos INT,
    FOREIGN KEY (fkPedidos) references pedidos(idPedidos)
);
