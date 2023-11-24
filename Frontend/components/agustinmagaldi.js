window.addEventListener('load', iniciar, false);

function iniciar() {
  
  var imagen = document.getElementById('imgagustinmagaldi');
  
  imagen.addEventListener('mouseover', otra, false);
  imagen.addEventListener('mouseout', restaurar, false);
}

function restaurar(){
  var imagen = document.getElementById('imgagustinmagaldi').src = "./media/images/agustinmagaldi2.jpg";
}

function otra() {
  var imagen = document.getElementById('imgagustinmagaldi').src = "./media/images/agustinmagaldi1.jpg";
}

