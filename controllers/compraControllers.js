var conexion = require('../config/conexion');
var compra = require('../model/compraModel');

module.exports = {

    index: function (req, res) {
        
        compra.obtenerProducto(conexion, req.body, function (err, datos) {
           
            res.render('compras/index', { title: 'Compras', Producto: datos});

        })
        

    }
}