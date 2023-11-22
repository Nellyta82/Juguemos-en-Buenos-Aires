window.addEventListener('load', ini, false);

function ini() {
  
  var img = document.getElementById('imgtoscaneras');
  
  img.addEventListener('mouseover', otr, false);
  img.addEventListener('mouseout', camb, false);
}

function camb(){
  var img = document.getElementById('imgtoscaneras').src = "./media/images/toscaneras2.jpg";
}

function otr() {
  var img = document.getElementById('imgtoscaneras').src = "./media/images/toscaneras1.jpg";
}