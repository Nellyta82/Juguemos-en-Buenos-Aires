


window.addEventListener('load', cambio, false);

function cambio() {
  
    var img = document.getElementById('imgpatiodejuegosparaniños');
    
    img.addEventListener('mouseover', foto2, false);
    img.addEventListener('mouseout', volver, false);
  }
  
  function volver(){
    var img = document.getElementById('imgpatiodejuegosparaniños').src = "./media/images/patiodejuegosparaniños.jpg";
  }
  
  function foto2() {
    var img = document.getElementById('imgpatiodejuegosparaniños').src = "./media/images/patiodejuegosparaniños2.jpg";
  }