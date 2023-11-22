window.addEventListener('load', abre, false);

function abre() {
  
  var img = document.getElementById('imgalberdi');
  
  img.addEventListener('mouseover', cierra, false);
  img.addEventListener('mouseout', change, false);
}

function cierra(){
  var img = document.getElementById('imgalberdi').src = "./media/images/alberdi2.jpg";
}

function change() {
  var img = document.getElementById('imgalberdi').src = "./media/images/alberdi1.jpg";
}