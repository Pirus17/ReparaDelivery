const { query } = require("express");

module.exports = {
    
    porMarca: function (conexion, marca, funcion) {
        conexion.query("SELECT * FROM producto WHERE Marca=?",[marca.marca],funcion);
        
    }

    
}