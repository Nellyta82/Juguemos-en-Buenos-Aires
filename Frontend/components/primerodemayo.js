window.addEventListener('load', iniciar, false);

function iniciar() {
  
  var imagen = document.getElementById('imgprimerodemayo');
  
  imagen.addEventListener('mouseover', otra, false);
  imagen.addEventListener('mouseout', restaurar, false);
}

function restaurar(){
  var imagen = document.getElementById('imgprimerodemayo').src = "./media/images/primero-de-mayo1.png";
}

function otra() {
  var imagen = document.getElementById('imgprimerodemayo').src = "./media/images/primero-de-mayo2.png";
}

