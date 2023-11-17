window.addEventListener('load', iniciar, false);

function iniciar() {
  
  var imagen = document.getElementById('imgthays');
  
  imagen.addEventListener('mouseover', otra, false);
  imagen.addEventListener('mouseout', restaurar, false);
}

function restaurar(){
  var imagen = document.getElementById('imgthays').src = "./media/images/thays2.jpeg";
}

function otra() {
  var imagen = document.getElementById('imgthays').src = "./media/images/thays1.jpg";
}







