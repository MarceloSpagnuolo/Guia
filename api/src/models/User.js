const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    const User = sequelize.define('user', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM("admin","user"),
            allowNull: false,
        },     
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            set(value) {
                if(value) {
                    const salt = bcrypt.genSaltSync(10)
                    const hash = bcrypt.hashSync(value, salt)
                    this.setDataValue("password", hash)
                };
            }
        },
    });
    User.prototype.compare = function (pass) {
        return bcrypt.compareSync(pass, this.password)
    };

    return User;
};