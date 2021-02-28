const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('category', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        base: {
            type: DataTypes.ENUM("phones","services","deliveries"),
            allowNull: false,
        },     
    });
};