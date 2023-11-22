window.addEventListener('load', iniciar, false);

function iniciar() {
  
  var imagen = document.getElementById('imgmartin');
  
  imagen.addEventListener('mouseover', otra, false);
  imagen.addEventListener('mouseout', restaurar, false);
}

function restaurar(){
  var imagen = document.getElementById('imgmartin').src = "./media/images/martin-fierro1.jpg";
}

function otra() {
  var imagen = document.getElementById('imgmartin').src = "./media/images/martin-fierro2.jpg";
}

