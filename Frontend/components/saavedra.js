
window.addEventListener('load', nuevo, false);

function nuevo() {
  
  var img = document.getElementById('imgsaavedra');
  
  img.addEventListener('mouseover', vuelta, false);
  img.addEventListener('mouseout', other, false);
}

function vuelta(){
  var img = document.getElementById('imgsaavedra').src = "./media/images/saavedra (1).jpg";
}

function other() {
  var img = document.getElementById('imgsaavedra').src = "./media/images/saavedra (2).jpg";
}
