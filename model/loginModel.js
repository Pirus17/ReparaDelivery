const { query } = require("express");

module.exports = {
    buscarUsuario: function (conexion, email, funcion) {
        conexion.query("SELECT * FROM usuario  WHERE Email=?", [email.email], funcion);
    },

    insertarUsuario: function (conexion, usuario, funcion) {
        conexion.query("INSERT INTO usuario (email, contrasenia, fechaRegistro, IdRol) VALUES (?,?,NOW(),3)" , 
        [usuario.email,usuario.contrasenia], funcion);
    },

    buscarCliente: function (conexion, email, funcion) {
        conexion.query("SELECT * FROM cliente WHERE Email= ?", [email.email], funcion);
    },

    insertarCliente: function (conexion, cliente, IdUsuario, funcion) {
        conexion.query("INSERT INTO cliente (apellido, nombre, direccion, numero, barrio, provincia, numerotelefono, IdUsuario) VALUES (?,?,?,?,?,?,?,?)" , 
        [cliente.apellido, cliente.nombre, cliente.direccion, cliente.numero, cliente.barrio, cliente.provincia, cliente.numeroTelefono, IdUsuario], funcion);
    },

    insertarActividad: function (conexion, actividad, IdUsuario, funcion) {
        console.log(IdUsuario);
        console.log(actividad);
        conexion.query("INSERT INTO actividad (tipoactividad, fechaActividad, IdUsuario) VALUES (?,NOW(),?)" , [actividad,  IdUsuario], funcion);
    }

}