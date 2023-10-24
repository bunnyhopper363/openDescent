const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'opendescent',
  password: 'opendescent363', 
  database: 'opendescent'
});

module.exports = connection;
