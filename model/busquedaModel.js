const { query } = require("express");

module.exports = {
       
    barraBusqueda: function (conexion, marca, funcion) {
        marcas='%'+marca+'%';
        console.log(marcas);
        conexion.query("SELECT * FROM producto WHERE  Marca OR Modelo LIKE ? ",[marcas],funcion);
        
    }
    

    
}