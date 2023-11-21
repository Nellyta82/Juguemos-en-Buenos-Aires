window.addEventListener('load', entrada, false);

function entrada() {
  
  var img = document.getElementById('imgisidora');
  
  img.addEventListener('mouseover', salida, false);
  img.addEventListener('mouseout', medio, false);
}

function salida(){
  var img = document.getElementById('imgisidora').src = "./media/images/isidora1.jpg";
}

function medio() {
  var img = document.getElementById('imgisidora').src = "./media/images/isidora2.jpg";
}