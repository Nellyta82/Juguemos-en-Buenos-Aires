window.addEventListener('load', iniciar, false);

function iniciar() {
  
  var imagen = document.getElementById('imgvelascoibarra');
  
  imagen.addEventListener('mouseover', otra, false);
  imagen.addEventListener('mouseout', restaurar, false);
}

function restaurar(){
  var imagen = document.getElementById('imgvelascoibarra').src = "./media/images/velasco-ibarra1.jpg";
}

function otra() {
  var imagen = document.getElementById('imgvelascoibarra').src = "./media/images/velasco-ibarra2.jpg";
}

