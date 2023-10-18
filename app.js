const express = require('express');
const app = express();
const port = 3000; // Choisis un port pour ton serveur sinon, port 80 au déployment normalement

app.post('/connexion', (req, res) => {
  res.send('Hello World !');
});

app.listen(port, () => {
  console.log(`Le serveur est en écoute sur le port ${port}`);
});
