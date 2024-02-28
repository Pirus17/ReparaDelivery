var conexion = require('../config/conexion');
var filtrar = require('../model/filtrarModel');

module.exports = {

    index: function (req, res) {
       
        filtrar.porMarca(conexion, req.body, function (err, datos) {
            cantidad=datos.length;

            res.render('filtrar/index', { title: 'Filtrar', productos: datos, cantidad });
        })
    }

    

}
