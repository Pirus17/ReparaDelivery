const { query } = require("express");

module.exports = {
    buscarTecnico: function (conexion, email, funcion) {
     conexion.query("SELECT * FROM tecnico  WHERE email=?",[email.email],  funcion);
    },  
    buscarCliente: function (conexion, email, funcion) {
        conexion.query("SELECT * FROM tecnico WHERE Email= ?",[email.email], funcion);
       }
    
}