const { query } = require("express");

module.exports = {
    buscarTecnico: function (conexion, email, funcion) {
        conexion.query("SELECT * FROM tecnico  WHERE email=?", [email.email], funcion);
    },

    buscarCliente: function (conexion, email, funcion) {
        conexion.query("SELECT * FROM cliente WHERE Email= ?", [email.email], funcion);
    },

    insertarCliente: function (conexion, cliente, funcion) {
        console.log(cliente);
        conexion.query("INSERT INTO cliente (apellido, nombre, direccion, numero, barrio, provincia, email, codigo, numerotelefono) VALUES (?,?,?,?,?,?,?,?,?)" , 
        [cliente.apellido, cliente.nombre, cliente.direccion, cliente.numero, cliente.barrio, cliente.provincia, cliente.email, cliente.codigo, cliente.numeroTelefono], funcion);
    }

}