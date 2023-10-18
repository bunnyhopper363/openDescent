document.addEventListener('DOMContentLoaded', function() {


  document.getElementById("login-button").addEventListener("click", function() {
    fetch('/connexion', {
      method: 'POST', // Requête POST pour la connexion
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: 'nom_utilisateur', password: 'mot_de_passe' })
    })
    .then(response => response.text()) // Utilise .text() car nous attendons une réponse textuelle
    .then(data => {
      // Affiche une fenêtre contextuelle (popup) avec le message "Hello World"
      window.alert('Hello World');
    })
    .catch(error => {
      console.error('Erreur lors de la requête : ' + error);
    });
  });
});
