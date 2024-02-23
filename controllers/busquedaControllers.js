var conexion = require('../config/conexion');
var producto = require('../model/busquedaModel');

module.exports = {

    index: function (req, res) {
        producto.barraBusqueda(conexion,req.body, function (err, datos) {
           
            res.render('productos/index', { title: 'Productos', productos: datos });
        })
    }

}