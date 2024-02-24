const { query } = require("express");

module.exports = {
       
    barraBusqueda: function (conexion, marca, modelo, funcion) {
        marca = '%' + marca + '%';
        if (modelo !== "") {
            modelo = '%' + modelo + '%';
            conexion.query("SELECT * FROM producto WHERE  Marca LIKE ? AND Modelo LIKE ? ",[marca, modelo],funcion);
        } else {
            conexion.query("SELECT * FROM producto WHERE  Marca LIKE ? OR Modelo LIKE ? ",[marca, marca],funcion);
        }
        
        
    }
    

    
}