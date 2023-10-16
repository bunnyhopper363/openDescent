// db-config.js

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'ton_utilisateur',
  team: 'nom_equipe',
  database: 'nom_de_ta_base_de_donnees'
});

module.exports = connection;
