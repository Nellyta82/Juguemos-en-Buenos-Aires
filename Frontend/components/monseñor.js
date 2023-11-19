window.addEventListener('load', entrada, false);

function entrada() {
  
  var img = document.getElementById('imgmonseñor');
  
  img.addEventListener('mouseover', salida, false);
  img.addEventListener('mouseout', medio, false);
}

function salida(){
  var img = document.getElementById('imgmonseñor').src = "./media/images/monseñor1.jpg";
}

function medio() {
  var img = document.getElementById('imgmonseñor').src = "./media/images/monseñor2.jpg";
}