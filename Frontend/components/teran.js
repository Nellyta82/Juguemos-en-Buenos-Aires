window.addEventListener('load', inicio, false);

function inicio() {
  
  var img = document.getElementById('imgteran');
  
  img.addEventListener('mouseover', otro, false);
  img.addEventListener('mouseout', cambio, false);
}

function cambio(){
  var img = document.getElementById('imgteran').src = "./media/images/teran2.jpg";
}

function otro() {
  var img = document.getElementById('imgteran').src = "./media/images/teran.jpg";
}