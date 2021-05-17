create database Mousseria_Teixeira;

use Mousseria_Teixeira;

create table usuario (
	idUsuario int primary key auto_increment,
	nome varchar(50),
	login varchar(50),
	senha varchar(50)
);

CREATE TABLE pedido(
    idPedido int primary key auto_increment,
    nomePedido varchar (50)
);

CREATE TABLE identificador(
    idIdentificador int primary key auto_increment,
    nomePedido varchar(200),
    pagamento varchar(50),
    preco double,
    localPedido varchar(70),
    cliente varchar(50),
    telefone VARCHAR(14),
    fkPedidos INT,
    foreign key (fkPedido) references pedido (idPedido)
);

CREATE TABLE desc_produto(
    idProduto INT PRIMARY KEY AUTO_INCREMENT,
    nomeProduto VARCHAR(100),
    quantidade VARCHAR(5),
    valor DOUBLE,
    imagem CHAR

);
CREATE TABLE produto(
    idProduto INT PRIMARY KEY AUTO_INCREMENT,
    NomeProduto VARCHAR (100),
    quantidade VARCHAR (5),
    valor DOUBLE,
    fkProduto INT,
    FOREIGN KEY (fkProduto) references desc_produto(idProduto)
);
