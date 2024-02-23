const { query } = require("express");

module.exports = {
       
    barraBusqueda: function (conexion, producto, funcion) {
        conexion.query("SELECT * FROM producto WHERE Marca=?",[producto.busqueda],funcion);
        
    }
    

    
}