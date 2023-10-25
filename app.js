const express = require('express');
const app = express();
const port = 3000;

// Gérer la racine de l'URL
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/index.html');
});


// Static files
app.use(express.static('src'));

// Handle character selection
app.post('/selection-personnage', (req, res) => {
    const { personnage } = req.body;
    const query = `UPDATE user SET perso = ? WHERE ID = ?`;
    res.send('Personnage sélectionné avec succès');
});

// Handle team data retrieval from the database
app.get('/equipe', (req, res) => {
    const query = 'SELECT * FROM team';

    db.query(query, (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des équipes : ' + err);
            res.status(500).json({ error: 'Erreur lors de la récupération des équipes' });
            return;
        }
        res.json(results);
    });
});

// Handle user login
app.post('/connexion', (req, res) => {
    res.send('Hello World !');
});

app.listen(port, () => {
    console.log(`Le serveur est en écoute sur le port ${port}`);
});
