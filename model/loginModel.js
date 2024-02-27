const { query } = require("express");

module.exports = {
    buscarTecnico: function (conexion, email, funcion) {
     conexion.query("SELECT * FROM tecnico WHERE Email= ?",[email.email], funcion);
    }  

    
}