var conexion = require('../config/conexion');
var login = require('../model/loginModel');
var alert;

module.exports = {

  index: function (req, res) {
    alert = false;
    res.render('login/index', { login: 'Login', alert });

  },

  cuentaUsuario: function (req, res) {
    login.buscarTecnico(conexion, req.body, function (err, datos) {
      if (datos.length > 0) {
        res.render('login/usuarioTecnico', { usuarioTecnico: 'UsuarioTecnico' });
      } else {

        login.buscarCliente(conexion, req.body, function (err, datos) {
          if (datos.length > 0) {
            res.render('login/usuarioCliente', { usuarioCliente: 'UsuarioCliente' });
          } else {
            alert = true;
            res.render('login/index', { login: 'Login', alert });
          }

        });
      }

    });

  },
  indexRegistro: function (req, res) {

    res.render('login/registrarUsuario', { login: 'Login'});

  },

  RegistrarUsuario: function (req, res) {
    console.log(req.body);
    res.render('login/registrarUsuario', { login: 'Login'});
  /*login.buscarCliente(conexion, req.body, function (err, datos) {
      
      
      if (datos.length > 0) {
        res.render('login/usuarioCliente', { usuarioCliente: 'UsuarioCliente' });
      } else {
        alert = true;
        res.render('login/index', { login: 'Login', alert });
      }
      

    });*/

  }

}
