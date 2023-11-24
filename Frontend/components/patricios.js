
window.addEventListener('load', abre, false);

function abre() {
  
  var img = document.getElementById('imgpatricios');
  
  img.addEventListener('mouseover', cierra, false);
  img.addEventListener('mouseout', change, false);
}

function cierra(){
  var img = document.getElementById('imgpatricios').src = "./media/images/lospatricios1.jpg";
}

function change() {
  var img = document.getElementById('imgpatricios').src = "./media/images/lospatricios2.jpg";
}