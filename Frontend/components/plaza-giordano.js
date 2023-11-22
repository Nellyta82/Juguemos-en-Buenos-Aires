

window.addEventListener('load', iniciar, false);

function iniciar() {
  
  var imagen = document.getElementById('imggiordanobruno');
  
  imagen.addEventListener('mouseover', otra, false);
  imagen.addEventListener('mouseout', restaurar, false);
}

function restaurar(){
  var imagen = document.getElementById('imggiordanobruno').src = "./media/images/patio-giordano-bruno.jpg";
}

function otra() {
  var imagen = document.getElementById('imggiordanobruno').src = "./media/images/giordano2.jpg";
}

