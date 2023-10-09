 // Fonction pour charger et insérer le contenu de Header.html dans la div navbar-container
 function includeHeader() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', './composent/Header.html', true); // Ajustez le chemin ici
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('navbar-container').innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

// Appel de la fonction pour inclure le contenu de Header.html
includeHeader();