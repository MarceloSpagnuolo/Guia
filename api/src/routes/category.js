const server = require("express").Router();
const { Category } = require("../db.js");

//Ruta que devuelve una categoria pasada por params
server.get("/:categoryId", async (req, res) => {
    const { categoryId } = req.params;

    const categoria = await Category.findByPk(categoryId);
    categoria ? res.json(categoria).status(200) : res.send("No se encontró esa categoría").status(404);
    
});
    
//Ruta que devuelve todas las categorias de una base
server.get("/base/:base", async (req, res) => {
    const { base } = req.params;
        
    const categorias = await Category.findAll({
        where: {
            base: base
        },
        order: [
            "name"
        ]
    });
    categorias && categorias.length > 0 ? res.json(categorias).status(200) : res.send("No se pueden hallar las categorias de esa base").status(404);

})

module.exports = server;
