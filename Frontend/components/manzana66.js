window.addEventListener('load', iniciar, false);

function iniciar() {
  
  var imagen = document.getElementById('imgmanzana66');
  
  imagen.addEventListener('mouseover', otra, false);
  imagen.addEventListener('mouseout', restaurar, false);
}

function restaurar(){
  var imagen = document.getElementById('imgmanzana66').src = "./media/images/manzana66-1.jpg";
}

function otra() {
  var imagen = document.getElementById('imgmanzana66').src = "./media/images/manzana66-2.jpg";
}

