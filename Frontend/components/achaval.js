

window.addEventListener('load', iniciar, false);

function iniciar() {
  
  var imagen = document.getElementById('imgpatioachaval');
  
  imagen.addEventListener('mouseover', otra, false);
  imagen.addEventListener('mouseout', restaurar, false);
}

function restaurar(){
  var imagen = document.getElementById('imgpatioachaval').src = "./media/images/achaval y eva peron.jpg";
}

function otra() {
  var imagen = document.getElementById('imgpatioachaval').src = "./media/images/patio de juegos achaval.jpg";
}

