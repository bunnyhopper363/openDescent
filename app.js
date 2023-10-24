const express = require('express');
const app = express();
const port = 3000; // Choisissez un port pour votre serveur

app.use(express.json());

// Route pour gérer la sélection du personnage
app.post('/selection-personnage', (req, res) => {
    const { personnage } = req.body;
    const query = `UPDATE user SET perso = ? WHERE ID = ?`;
    res.send('Personnage sélectionné avec succès');
});

// Route pour gérer la récupération des équipes
app.get('/equipes', (req, res) => {
    const query = 'SELECT * FROM equipe';
    const equipes = [
        { id: 1, nom: 'Les Aventuriers du destion' },
    ];

    res.json(equipes);
});

// Route pour gérer la connexion
app.post('/connexion', (req, res) => {
    res.send('Hello World !');
});

app.listen(port, () => {
    console.log(`Le serveur est en écoute sur le port ${port}`);
});
