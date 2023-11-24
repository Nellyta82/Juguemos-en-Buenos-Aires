
window.addEventListener('load', abre, false);

function abre() {
  
  var img = document.getElementById('imgalmirante');
  
  img.addEventListener('mouseover', cierra, false);
  img.addEventListener('mouseout', change, false);
}

function cierra(){
  var img = document.getElementById('imgalmirante').src = "./media/images/almirantebrown2.jpg";
}

function change() {
  var img = document.getElementById('imgalmirante').src = "./media/images/almirantebrown1.jpg";
}