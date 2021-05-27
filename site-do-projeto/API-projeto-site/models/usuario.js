'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		//o id aqui é a referência da rota que vem de usuarios
		id: {
			field: 'idLogin',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		
		login_backend: {
			field: 'email',
			type: DataTypes.STRING,
			allowNull: false
		},
		nome: {
			field: 'nomeEmpresa',
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			field: 'senha',
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'usuario', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
