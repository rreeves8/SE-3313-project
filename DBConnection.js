const mysql = require('mysql');

function newConnection(){
    let conn = mysql.createConnection({
        host: '99.243.107.10',
        port:'3306',
        user: 'root',
        password: '1234',
        database: '3313-project'
    })
    return conn;
}

module.exports = newConnection;
