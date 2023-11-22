


window.addEventListener('load', cambio, false);

function cambio() {
  
    var img = document.getElementById('imgcentenario');
    
    img.addEventListener('mouseover', foto2, false);
    img.addEventListener('mouseout', volver, false);
  }
  
  function volver(){
    var img = document.getElementById('imgcentenario').src = "./media/images/centenario.jpg";
  }
  
  function foto2() {
    var img = document.getElementById('imgcentenario').src = "./media/images/centenario2.jpg";
  }