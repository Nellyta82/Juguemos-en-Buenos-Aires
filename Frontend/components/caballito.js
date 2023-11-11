window.addEventListener('load', iniciar, false);

function iniciar() {
  
  var imagen = document.getElementById('imgparque-rivadavia');
  
  imagen.addEventListener('mouseover', otra, false);
  imagen.addEventListener('mouseout', restaurar, false);
}

function restaurar(){
  var imagen = document.getElementById('imgparque-rivadavia').src = "./media/images/parque-rivadavia2.jpg";
}

function otra() {
  var imagen = document.getElementById('imgparque-rivadavia').src = "./media/images/parque-rivadavia1.jpg";
}
