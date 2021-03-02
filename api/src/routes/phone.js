const server = require("express").Router();
const { Phone } = require("../db.js");

//Ruta que devuelve los teléfonos de una categoría
server.get("/:categoryId", async (req, res) => {
    const { categoryId } = req.params;

    const phones = await Phone.findAll({
        where: {
            categoryId
        },
        order: [
            "name"
        ]
    });
    phones && phones.length > 0 ? res.json(phones).status(200) : res.send("No se encontraron teléfonos con esa categoría").status(404);
    
});
    
module.exports = server;
