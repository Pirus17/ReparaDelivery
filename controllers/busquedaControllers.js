var conexion = require('../config/conexion');
var producto = require('../model/busquedaModel');
var marca, modelo;

module.exports = {

    index: function (req, res) {
        let marcaModelo= req.body;
        let dividir = marcaModelo.busqueda.split(" ");
        marca = dividir[0];
        modelo = dividir.slice(1).join(" ");
        producto.barraBusqueda(conexion, marca, modelo, function (err, datos) {
            console.log(datos);
            if (datos.length>0) { 
                res.render('productos/index', { title: 'Productos', productos: datos });
            } else {
                console.log("false");
                res.render('busqueda/index', { title: 'Busqueda' });
                
            }


        });

    }
}



