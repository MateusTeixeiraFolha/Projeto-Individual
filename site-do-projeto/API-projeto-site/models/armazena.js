'use strict';
module.exports = (sequelize, DataTypes) => {
	let Armazem = sequelize.define('Armazem', {// aqui é o final da rota, ela está fazendo referência com o banco
		idProduto: {
			field: 'idProduto', //nome igual do banco
			type: DataTypes.INTEGER,//tipo igual do banco
			primaryKey: true,
			autoIncrement: true
		},
		nomeProduto: {
			field: 'nomeProduto',
			type: DataTypes.STRING,
			allowNull: false
		},
		quantidadeProduto: {
			field: 'quantidadeProduto',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		valorProduto: {
			field: 'valorProduto',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		fkPedidos: {
			type: DataTypes.VIRTUAL, // campo 'falso' (não existe na tabela). Deverá ser preenchido 'manualmente' no select
			allowNull: true
		},
	},
		{
			tableName: 'produto',
			freezeTableName: true,
			underscored: true,
			timestamps: false,
		}); 5

	return Armazem;
};
