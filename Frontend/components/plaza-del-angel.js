

    window.addEventListener('load', iniciar, false);

function iniciar() {
  
  var imagen = document.getElementById('imgangelgris');
  
  imagen.addEventListener('mouseover', otra, false);
  imagen.addEventListener('mouseout', restaurar, false);
}

function restaurar(){
  var imagen = document.getElementById('imgangelgris').src = "./media/images/plaza-angel-gris- 2.png";
}

function otra() {
  var imagen = document.getElementById('imgangelgris').src = "./media/images/plaza-angel-gris-1.jpg";
}
