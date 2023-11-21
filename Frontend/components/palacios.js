window.addEventListener('load', iniciar, false);

function iniciar() {
  
  var imagen = document.getElementById('imgpalacios');
  
  imagen.addEventListener('mouseover', otra, false);
  imagen.addEventListener('mouseout', restaurar, false);
}

function restaurar(){
  var imagen = document.getElementById('imgpalacios').src = "./media/images/palacios2.jpg";
}

function otra() {
  var imagen = document.getElementById('imgpalacios').src = "./media/images/palacios1.jpg";
}