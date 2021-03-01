const { DataTypes, DATE } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('service', {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phones: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
        },
        movils: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
        },
        whatsapps: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        obs: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        coverImage: {
            type: DataTypes.BLOB,
            allowNull: true,
        },
        logo: {
            type: DataTypes.BLOB,
            allowNull: true,
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: new DATE(),
        }
    });
};