const express = require('express');
const app = express();
const port = 3000;
const db = require('./db-config');  // Import de la configuration de la base de données

// Gérer la racine de l'URL
app.get('/', (req, res) => {
// Lorsque quelqu'un accède à la racine ('/'), renvoie le fichier 'index.html' situé dans le dossier 'src'
  res.sendFile(__dirname + '/src/index.html');
});


// Servir des fichiers statiques à partir du dossier 'src'
app.use(express.static('src'));

// Route pour gérer la sélection du personnage
app.post('/selection-personnage', (req, res) => {
    const { personnage } = req.body;
    const query = `UPDATE user SET perso = ? WHERE ID = ?`;
    // En réponse à une sélection de personnage, renvoie un message de confirmation
    res.send('Personnage sélectionné avec succès');
});

// Route pour récupérer les équipes depuis la base de données
app.get('/equipe', (req, res) => {
  const query = 'SELECT * FROM team';

  db.query(query, (err, results) => {
      if (err) {
        // En cas d'erreur lors de la récupération des équipes, renvoie une réponse d'erreur avec un code 500
          console.error('Erreur lors de la récupération des équipes : ' + err);
          res.status(500).json({ error: 'Erreur lors de la récupération des équipes' });
          return;
      }
     // Renvoie les résultats de la requête sous forme de données JSON
      res.json(results);
  });
});

// Route pour gérer la connexion
app.post('/connexion', (req, res) => {
      // En réponse à une demande de connexion, ça renvoie un message "Hello World!" pour l'instant
    res.send('Hello World !');
});

app.listen(port, () => {
      // Démarrage du serveur Express sur le port 3000.
    console.log(`Le serveur est en écoute sur le port ${port}`);
});
