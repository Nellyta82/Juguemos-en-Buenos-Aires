

window.addEventListener('load', cambio, false);

function cambio() {
  
    var img = document.getElementById('imgplazaperiodistas');
    
    img.addEventListener('mouseover', foto2, false);
    img.addEventListener('mouseout', volver, false);
  }
  
  function volver(){
    var img = document.getElementById('imgplazaperiodistas').src = "./media/images/plaza-de-los-periodistas.jpeg";
  }
  
  function foto2() {
    var img = document.getElementById('imgplazaperiodistas').src = "./media/images/periodistas2.jpg";
  }