var conexion = require('../config/conexion');
var agregar = require('../model/agregarModel');

module.exports = {

    index: function (req, res) {
        
        agregar.obtenerProducto(conexion, req.body, function (err, datos) {
           
            res.render('agregar/index', { title: 'Producto', Producto: datos});

        })
        

    }
}