'use strict';
module.exports = (sequelize, DataTypes) => {
    let Pedido = sequelize.define('Pedido',{// aqui é o final da rota, ela está fazendo referência com o banco
        id: {
			field: 'idPedidos', //nome igual do banco
			type: DataTypes.INTEGER,//tipo igual do banco
			primaryKey: true,
			autoIncrement: true
		},		
        cliente: {
			field: 'cliente',
			type: DataTypes.STRING,
			allowNull: false
		},
		telefone: {
			field: 'telefone',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		cep: {
			field: 'cep',
			type: DataTypes.STRING,
			allowNull: false
		},
		bairro: {
			field: 'bairro',
			type: DataTypes.STRING,
			allowNull: false
		},
		cidade: {
			field: 'cidade',
			type: DataTypes.STRING,
			allowNull: false
		},
		uf: {
			field: 'uf',
			type: DataTypes.STRING,
			allowNull: false
		},
		logradouro: {
			field: 'logradouro',
			type: DataTypes.STRING,
			allowNull: false
		},
		numero: {
			field: 'numero',
			type: DataTypes.INTEGER,
			allowNull: false
		},complemento: {
			field: 'complemento',
			type: DataTypes.STRING,
			allowNull: false
		},
		descricao: {
			field: 'pedido',
			type: DataTypes.STRING,
			allowNull: false
		}
    },
	{
		tableName: 'pedidos', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});5

    return Pedido;
};
