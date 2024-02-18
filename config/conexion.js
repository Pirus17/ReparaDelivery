var mysql = require("mysql");
var conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbreparadelivery'

}
);

conexion.connect(
    (err) => {
        if (!err) {
            console.log('Conexion Establecida');
        } else {
            console.log('Error Conexion');

        }
    }
);

module.exports= conexion;