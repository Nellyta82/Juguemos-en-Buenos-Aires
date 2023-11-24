
window.addEventListener('load', abre, false);

function abre() {
  
  var img = document.getElementById('imgespana');
  
  img.addEventListener('mouseover', cierra, false);
  img.addEventListener('mouseout', change, false);
}

function cierra(){
  var img = document.getElementById('imgespana').src = "./media/images/Espana1.jpeg";
}

function change() {
  var img = document.getElementById('imgespana').src = "./media/images/Espana2.jpeg";
}