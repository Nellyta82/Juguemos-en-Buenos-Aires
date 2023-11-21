window.addEventListener('load', inicio, false);

function inicio() {
  
  var img = document.getElementById('imgsantojanni');
  
  img.addEventListener('mouseover', otro, false);
  img.addEventListener('mouseout', cambio, false);
}

function cambio(){
  var img = document.getElementById('imgsantojanni').src = "./media/images/santojanni2.jpg";
}

function otro() {
  var img = document.getElementById('imgsantojanni').src = "./media/images/santojanni1.jpg";
}