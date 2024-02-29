const { query } = require("express");

module.exports = {
    buscarTecnico: function (conexion, email, funcion) {
        conexion.query("SELECT * FROM tecnico  WHERE email=?", [email.email], funcion);
    },

    buscarCliente: function (conexion, email, funcion) {
        conexion.query("SELECT * FROM cliente WHERE Email= ?", [email.email], funcion);
    },

    insertarCliente: function (conexion, cliente, funcion) {
        
        conexion.query("INSERT INTO cliente (apellido, nombre, direccion, numero, barrio, provincia, email, codigo, numerotelefono) VALUES (?,?,?,?,?,?,?,?,?)" , 
        [cliente.apellido, cliente.nombre, cliente.direccion, cliente.numero, cliente.barrio, cliente.provincia, cliente.email, cliente.codigo, cliente.numeroTelefono], funcion);
    },

    insertarUsuario: function (conexion, Idcliente, cliente, funcion) {
        console.log(idCliente);
        
        conexion.query("INSERT INTO usuario (contrasenia, FechadeRegistro, UltimoAcceso, idcliente, idTecnico) VALUES (?,NOW(),NOW(),?,NULL)" , 
        [cliente.contrasenia, IdCliente], funcion);
    }


}