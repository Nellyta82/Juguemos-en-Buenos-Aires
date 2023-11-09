window.addEventListener('load', cambio, false);

function cambio() {
  
    var img = document.getElementById('imgvicente');
    
    img.addEventListener('mouseover', foto2, false);
    img.addEventListener('mouseout', volver, false);
  }
  
  function volver(){
    var img = document.getElementById('imgvicente').src = "./media/images/vicente2.jpeg";
  }
  
  function foto2() {
    var img = document.getElementById('imgvicente').src = "./media/images/vicente1.jpeg";
  }