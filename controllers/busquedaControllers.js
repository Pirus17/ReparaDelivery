var conexion = require('../config/conexion');
var producto = require('../model/busquedaModel');
var marca, modelo;

module.exports = {

    index: function (req, res) {
        if (validarBusqueda(req.body)) {
            producto.barraBusqueda(conexion, marca, modelo, function (err, datos) {

                res.render('productos/index', { title: 'Productos', productos: datos });

            });

        }
    }
}

function validarBusqueda(marcaModelo) {
    if (elementoVacio(marcaModelo)) {
        let dividir = marcaModelo.busqueda.split(" ");
        marca = dividir[0];
        modelo = dividir.slice(1).join(" ");
        return true;
    } else {
        return false;
    }

}

function elementoVacio(marcaModelo) {
    return (marcaModelo.busqueda && marcaModelo.busqueda.trim() !== '');

}
