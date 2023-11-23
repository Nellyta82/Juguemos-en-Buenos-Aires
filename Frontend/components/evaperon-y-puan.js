window.addEventListener('load', cambio, false);

function cambio() {
  
    var img = document.getElementById('imgparquechacabuco');
    
    img.addEventListener('mouseover', foto2, false);
    img.addEventListener('mouseout', volver, false);
  }
  
  function volver(){
    var img = document.getElementById('imgparquechacabuco').src = "./media/images/parque chacabuco.jpg";
  }
  
  function foto2() {
    var img = document.getElementById('imgparquechacabuco').src = "./media/images/P Chacabuco 2.jpg";
  }