window.addEventListener('load', cambio, false);

function cambio() {
  
    var img = document.getElementById('imgpatiosavedra');
    
    img.addEventListener('mouseover', foto2, false);
    img.addEventListener('mouseout', volver, false);
  }
  
  function volver(){
    var img = document.getElementById('imgpatiosavedra').src = "./media/images/saavedra (3).jpg";
  }
  
  function foto2() {
    var img = document.getElementById('imgpatiosavedra').src = "./media/images/centenario2.jpg";
  }