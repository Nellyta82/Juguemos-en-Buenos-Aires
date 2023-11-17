window.addEventListener('load', abre, false);

function abre() {
  
  var img = document.getElementById('imgemilio');
  
  img.addEventListener('mouseover', cierra, false);
  img.addEventListener('mouseout', change, false);
}

function cierra(){
  var img = document.getElementById('imgemilio').src = "./media/images/emilio2.jpg";
}

function change() {
  var img = document.getElementById('imgemilio').src = "./media/images/emilio1.jpg";
}