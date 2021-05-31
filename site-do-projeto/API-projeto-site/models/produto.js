'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Produto = sequelize.define('Produto',{
		//o id aqui é a referência da rota que vem de usuarios
		id: {
			field: 'idProduto',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		
		nomeProduto: {
			field: 'nomeProduto',
			type: DataTypes.STRING,
			allowNull: false
		},
		quantidade: {
			field: 'quantidade',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		valor: {
			field: 'valor',
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, 
	{
		tableName: 'produto', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Produto;
};
