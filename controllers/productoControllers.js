var conexion = require('../config/conexion');
var producto = require('../model/productoModel');
var cantidad = 0;

module.exports = {

    index: function (req, res) {
        cantidad+=9;
        producto.obtener(conexion, function (err, datos) {
            res.render('productos/index', { title: 'Productos', productos: datos, cantidad });
        })
    }

    

}




