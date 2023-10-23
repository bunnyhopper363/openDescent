const express = require('express');
const app = express();
const port = 3000; // Choisissez un port pour votre serveur

app.use(express.json());

// Route pour gérer la sélection du personnage
app.post('/selection-personnage', (req, res) => {
    // Récupérez les informations du personnage sélectionné depuis la requête
    const { personnage } = req.body;

    // Mettez à jour la base de données (par exemple, le champ "perso" dans la table "user")
    // Vous devrez utiliser un module de base de données, comme "mysql" ou "sequelize", pour effectuer la mise à jour.

    // Exemple de mise à jour dans une table "user" avec "mysql" :
    const query = `UPDATE user SET perso = ? WHERE ID = ?`;
    // Vous devrez également fournir les valeurs pour ? dans le tableau de paramètres (dans cet exemple, personnage et l'identifiant de l'utilisateur).

    // Envoyez une réponse indiquant le succès ou l'échec de la mise à jour
    // Cette réponse peut être personnalisée en fonction de votre application.
    res.send('Personnage sélectionné avec succès');
});

// Route pour gérer la connexion
app.post('/connexion', (req, res) => {
    // Vous avez déjà une route pour la connexion ici, laissez ce code tel quel.
    res.send('Hello World !');
});

app.listen(port, () => {
    console.log(`Le serveur est en écoute sur le port ${port}`);
});
