var conexion = require('../config/conexion');
var login = require('../model/loginModel');
var alert;

module.exports = {

  index: function (req, res) {
    alert = false;
    res.render('login/index', { login: 'Login', alert });

  },

  cuentaUsuario: function (req, res) {
    login.buscarUsuario(conexion, req.body, function (err, datos) {
      console.log(datos);
      console.log(datos.length);
      console.log(req.body);
      if (datos.length===0) {
        login.insertarUsuario(conexion, req.body, function (err, datos) {
          res.render('login/index', { login: 'Login', alert });
          });
          
      } else {
        alert = true;
            res.render('login/index', { login: 'Login', alert });
      }
      });
      
      



      /*if (datos.length > 0) {
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
      }*/

    

  },
  indexRegistro: function (req, res) {
    alert = false;
    res.render('login/registrarUsuario', { login: 'Login', alert });

  },

  RegistrarUsuario: function (req, res) {
    login.buscarCliente(conexion, req.body, function (err, datos) {

      console.log(datos);

      if (datos.length === 0) {

        login.insertarCliente(conexion, req.body, function (err) {

          login.buscarCliente(conexion, req.body, function (err, datos) {
            console.log(datos);
            console.log(datos.IdCliente);
            let IdCliente = datos[0].IdCliente;
            login.insertarUsuario(conexion, IdCliente, req.body, function (err) {
              console.log(datos);


              res.send(req.body);

            });

            res.send(req.body);

          });

        });
      } else {
        alert = true;
        res.render('login/registrarUsuario', { login: 'Login', alert });
      }

    });

  }

}
