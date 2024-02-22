const { query } = require("express");

module.exports = {
    obtener: function (conexion, funcion) {
     conexion.query("SELECT * FROM producto",funcion);
    },
    
    porMarca: function (conexion, marca, funcion) {
        conexion.query("SELECT * FROM producto WHERE Marca=?",[marca.marca],funcion);
        
    },

    barraBusqueda: function (conexion, marca, funcion) {
        console.log(marca.busqueda);
        conexion.query("SELECT * FROM producto WHERE Marca=?",[marca.busqueda],funcion);
        
    }
}