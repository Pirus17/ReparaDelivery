const { query } = require("express");

module.exports = {
    obtenerProducto: function (conexion, IdProducto, funcion) {
        console.log(IdProducto);
     conexion.query("SELECT * FROM producto WHERE IdProducto = ?", [IdProducto.IdProducto],funcion);
    },
    
}