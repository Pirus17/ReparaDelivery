const { query } = require("express");

module.exports = {
    obtener: function (conexion, funcion) {
     conexion.query("SELECT * FROM producto",funcion);
    }  

    
}