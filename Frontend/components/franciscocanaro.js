window.addEventListener('load', inicio, false);

function inicio() {
  
  var img = document.getElementById('imgfrancisco');
  
  img.addEventListener('mouseover', otro, false);
  img.addEventListener('mouseout', cambio, false);
}

function cambio(){
  var img = document.getElementById('imgfrancisco').src = "./media/images/francisco-canaro1.jpeg";
}

function otro() {
  var img = document.getElementById('imgfrancisco').src = "./media/images/francisco-canaro2.jpeg";
}