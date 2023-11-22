window.addEventListener('load', entrada, false);

function entrada() {
  
  var img = document.getElementById('imglafitte');
  
  img.addEventListener('mouseover', salida, false);
  img.addEventListener('mouseout', medio, false);
}

function salida(){
  var img = document.getElementById('imglafitte').src = "./media/images/lafitte1.jpg";
}

function medio() {
  var img = document.getElementById('imglafitte').src = "./media/images/lafitte2.jpeg";
}