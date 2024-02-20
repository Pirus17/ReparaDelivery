var conexion = require('../config/conexion');
var producto = require('../model/productoModel');

module.exports = {

    index: function (req, res) {
        producto.obtener(conexion, function (err, datos) {
            console.log(req.body);
            res.render('compras/index', { title: 'Compras', productos: datos });
        })
    }
}