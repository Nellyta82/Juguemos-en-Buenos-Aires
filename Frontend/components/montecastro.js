window.addEventListener('load', nuevo, false);

function nuevo() {
  
  var img = document.getElementById('imgmontecastro');
  
  img.addEventListener('mouseover', vuelta, false);
  img.addEventListener('mouseout', other, false);
}

function vuelta(){
  var img = document.getElementById('imgmontecastro').src = "./media/images/montecastro1.jpg";
}

function other() {
  var img = document.getElementById('imgmontecastro').src = "./media/images/montecastro2.jpg";
}
