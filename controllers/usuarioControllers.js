var conexion = require('../config/conexion');
//var compra = require('../model/usuarioModel');

module.exports = {

    index: function (req, res) {
        
        
           
            res.render('usuario/index', { title: 'Usuario'});

        
        

    }
}