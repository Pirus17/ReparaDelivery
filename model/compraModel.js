const { query } = require("express");

module.exports = {
    obtener: function (conexion, funcion) {
    let marca="tcl";
     conexion.query("SELECT * FROM producto WHERE Marca=?",[marca],funcion);
    },
    
}