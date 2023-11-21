window.addEventListener('load', inicio, false);

function inicio() {
  
  var img = document.getElementById('imgavellaneda');
  
  img.addEventListener('mouseover', otro, false);
  img.addEventListener('mouseout', cambio, false);
}

function cambio(){
  var img = document.getElementById('imgavellaneda').src = "./media/images/avellaneda2.jpg";
}

function otro() {
  var img = document.getElementById('imgavellaneda').src = "./media/images/avellaneda1.jpg";
}