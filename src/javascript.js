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
 
//je vais devoir séparer les deux pour les gérer séparément car si j'importe pas un
//ou l'autre, un erreur sera déclarer dans la console, et ça, c'est pas propre, exemple,
//comme ce qui ce produit dans la console du CGU.html