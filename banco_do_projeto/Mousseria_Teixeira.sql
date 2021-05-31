create database Mousseria_Teixeira;

use Mousseria_Teixeira;

CREATE TABLE usuario (
	idLogin INT PRIMARY KEY AUTO_INCREMENT,
	nomeEmpresa VARCHAR(50),
	email VARCHAR(100),
	senha VARCHAR(50)
);

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
    pedido VARCHAR(500),
    fkUsuario int,
    foreign key(fkUsuario) references usuario (idLogin)
);

CREATE TABLE produto(
    idProduto INT PRIMARY KEY AUTO_INCREMENT,
    nomeProduto VARCHAR (100),
    quantidadeProduto INT,
    valorProduto DOUBLE,
    fkPedidos INT
);

CREATE TABLE pedidoProduto(
fkPedidos int,
fkUsuario int,
fkProduto int,
primary key(fkPedidos, fkUsuario, fkProduto),
dataPedido datetime,
preco double
);

