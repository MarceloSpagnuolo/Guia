const { DataTypes } = require('sequelize');
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
            type: DataTypes.ARRAY,
            allowNull: true,
        },
        movils: {
            type: DataTypes.ARRAY,
            allowNull: true,
        },
        whatsapps: {
            type: DataTypes.ARRAY,
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
            type: DataTypes.BLOB("long"),
            allowNull: true,
        },
        logo: {
            type: DataTypes.BLOB("long"),
            allowNull: true,
        }
    });
};