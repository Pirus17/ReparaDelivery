var conexion = require('../config/conexion');
var login = require('../model/loginModel');


module.exports = {

    index: function (req, res) {

        res.render('login/index', { login: 'Login' });

    },

    datosUsuario: function (req, res) {
        login.buscarTecnico(conexion, req.body, function (err, datos) {
          console.log(datos);  
          res.render('login/index', { login: 'Login' });
        });
       
    }
}