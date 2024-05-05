// Script pour gérer la redirection vers le chapitre sélectionné
document.getElementById('chapitre').addEventListener('change', function() {
    window.location.href = this.value;
  });

// Script pour définir l'option sélectionnée en fonction du chapitre actuel
document.addEventListener('DOMContentLoaded', function() {
  // Obtenez l'URL de la page actuelle
  var url = window.location.href;
  
  // Extrait le nom du fichier de l'URL
  var currentPage = url.substring(url.lastIndexOf('/') + 1);
  
  // Sélectionnez le menu déroulant des chapitres
  var select = document.getElementById('chapitre');
  
  // Parcourez les options pour trouver et sélectionner celle qui correspond à la page actuelle
  for (var i = 0; i < select.options.length; i++) {
    if (select.options[i].value === currentPage) {
      select.selectedIndex = i;
      break;
    }
  }
});
