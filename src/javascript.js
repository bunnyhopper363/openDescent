document.addEventListener("DOMContentLoaded", function () {
    fetch("composent/header.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("navbar-container").innerHTML = data; 
      })
      .catch((error) => {
        console.error("Erreur de chargement du composant :", error);
      });
//ceci sont les imports de la navbar et du footer
      fetch("composent/footer.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("footerContainer").innerHTML = data; 
      })
      .catch((error) => {
        console.error("Erreur de chargement du composant :", error);
      });


  });
 
