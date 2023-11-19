window.addEventListener('load', ini, false);

function ini() {
  
  var img = document.getElementById('imgrodriguez');
  
  img.addEventListener('mouseover', otr, false);
  img.addEventListener('mouseout', camb, false);
}

function camb(){
  var img = document.getElementById('imgrodriguez').src = "./media/images/rodriguez2.jpg";
}

function otr() {
  var img = document.getElementById('imgrodriguez').src = "./media/images/rodriguez1.jpg";
}