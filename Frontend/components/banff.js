window.addEventListener('load', iniciar, false);

function iniciar() {
  
  var imagen = document.getElementById('imgbanff');
  
  imagen.addEventListener('mouseover', otra, false);
  imagen.addEventListener('mouseout', restaurar, false);
}

function restaurar(){
  var imagen = document.getElementById('imgbanff').src = "./media/images/banff2.jpeg";
}

function otra() {
  var imagen = document.getElementById('imgbanff').src = "./media/images/banff1.jpeg";
}