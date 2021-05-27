'use strict';
module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('',{
        id: {
			field: 'idEstoque',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
        cep: {
			field: 'cep',
			type: DataTypes.STRING,
			allowNull: false
		},
		cidade: {
			field: 'cidade',
			type: DataTypes.STRING
		},
		uf: {
			field: 'uf',
			type: DataTypes.STRING,
			allowNull: false
		},
		bairro: {
			field: 'bairro',
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
		},
		complemento: {
			field: 'complemento',
			type: DataTypes.STRING,
			allowNull: false
		}
    },
	{
		tableName: 'estoque', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});5

    return Usuario;
};
