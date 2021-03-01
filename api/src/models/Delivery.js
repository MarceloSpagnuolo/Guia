const { DataTypes, DATE } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('delivery', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phones: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        whatsapp: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
        },
        obs: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        horario: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        menu: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        coverImage: {
            type: DataTypes.BLOB,
            allowNull: true,
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        DATE: {
            type: DataTypes.DATE,
            defaultValue: new DATE(),
        },
    });
};