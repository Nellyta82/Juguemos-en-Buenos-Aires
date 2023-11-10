window.addEventListener('load', inicio, false);

function inicio() {
  
  var img = document.getElementById('imgruben');
  
  img.addEventListener('mouseover', otro, false);
  img.addEventListener('mouseout', cambio, false);
}

function cambio(){
  var img = document.getElementById('imgruben').src = "./media/images/ruben2.jpeg";
}

function otro() {
  var img = document.getElementById('imgruben').src = "./media/images/ruben1.jpeg";
}
