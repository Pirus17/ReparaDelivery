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
    alert=false;
    res.render('login/registrarUsuario', { login: 'Login', alert });

  },

  RegistrarUsuario: function (req, res) {
    login.buscarCliente(conexion, req.body, function (err, datos) {
      console.log(req.body);
      console.log(datos);
      if (datos.length===0) {
        console.log(true);
        login.insertarCliente(conexion, req.body, function (err) {
        res.send(req.body);      
    
        });      
      } else {
        alert=true;
        res.render('login/registrarUsuario', { login: 'Login',alert});
      }

    });

  }

}
