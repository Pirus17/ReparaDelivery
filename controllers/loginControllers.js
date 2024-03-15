var conexion = require('../config/conexion');
var login = require('../model/loginModel');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
var alert;

module.exports = {

  index: function (req, res) {
    alert = false;
    res.render('login/index', { login: 'Login', alert });

  },

  cuentaUsuario: function (req, res) {
    login.buscarUsuario(conexion, req.body, function (err, datos) {
      if (datos.length > 0) {
        switch (datos[0].IdRol) {
          case 1:
            res.render('login/admin', { admin: 'Administrador' });
            break;
          case 2: res.render('login/usuarioTecnico', { usuarioCliente: 'Tecnico' });
            break;
          case 3:

            const sessionStore = new MySQLStore(conexion);
            
            req.session.user = datos[0].IdUsuario;
            req.session.rol = datos[0].IdRol;

            res.render('login/usuarioCliente', { usuarioCliente: 'Cliente' });;
            break;
          default:
            break;
        }

      } else {
        alert = true;
        res.render('login/index', { login: 'Login', alert });
      }
    });


  },
  indexRegistro: function (req, res) {
    alert = false;
    res.render('login/registrarUsuario', { login: 'Login', alert });

  },

  RegistrarUsuario: function (req, res) {
    login.buscarUsuario(conexion, req.body, function (err, datos) {
      if (datos.length === 0) {
        console.log(true);
        login.insertarUsuario(conexion, req.body, function (err) {
          registrarCliente(req.body);
          alert = false;
          res.render('login/registrarUsuario', { login: 'Login', alert });

        });

      } else {
        alert = true;
        res.render('login/registrarUsuario', { login: 'Login', alert });
      }

    });

  }

}

function registrarCliente(cliente) {
  login.buscarUsuario(conexion, cliente, function (err, datos) {
    login.insertarCliente(conexion, cliente, datos[0].IdUsuario, function (err) {
      login.insertarActividad(conexion, "Registro", datos[0].IdUsuario, function (err) {

      });
    });


  });
}
