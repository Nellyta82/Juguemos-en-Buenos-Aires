window.addEventListener('load', iniciar, false);

function iniciar() {
  
  var imagen = document.getElementById('imgestacionba');
  
  imagen.addEventListener('mouseover', otra, false);
  imagen.addEventListener('mouseout', restaurar, false);
}

function restaurar(){
  var imagen = document.getElementById('imgestacionba').src = "./media/images/estacionba1.jpg";
}

function otra() {
  var imagen = document.getElementById('imgestacionba').src = "./media/images/estacionba3.jpg";
}

