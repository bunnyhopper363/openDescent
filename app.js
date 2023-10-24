const express = require('express');
const app = express();
const port = 3000; // Choisissez un port pour votre serveur

app.use(express.json());

// Importez la configuration de la base de données
const db = require('./db-config');

// Route pour gérer la sélection du personnage
app.post('/selection-personnage', (req, res) => {
    const { personnage } = req.body;
    const query = `UPDATE user SET perso = ? WHERE ID = ?`;
    res.send('Personnage sélectionné avec succès');
});

// Route pour gérer la récupération des équipes
app.get('/equipes', (req, res) => {
    const query = 'SELECT * FROM team'; // Assurez-vous que la table s'appelle "team" dans votre base de données

    db.query(query, (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des équipes : ' + err);
            res.status(500).json({ error: 'Erreur lors de la récupération des équipes' });
            return;
        }

        res.json(results);
    });
});

// Route pour gérer la connexion
app.post('/connexion', (req, res) => {
    res.send('Hello World !');
});

app.listen(port, () => {
    console.log(`Le serveur est en écoute sur le port ${port}`);
});
