window.addEventListener('load', entrada, false);

function entrada() {
  
  var img = document.getElementById('imglatinoamericana');
  
  img.addEventListener('mouseover', salida, false);
  img.addEventListener('mouseout', medio, false);
}

function salida(){
  var img = document.getElementById('imglatinoamericana').src = "./media/images/latinoamericana1.jpg";
}

function medio() {
  var img = document.getElementById('imglatinoamericana').src = "./media/images/latinoamericana2.jpg";
}