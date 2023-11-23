window.addEventListener('load', cambio, false);

function cambio() {
  
    var img = document.getElementById('imgvillareal');
    
    img.addEventListener('mouseover', foto2, false);
    img.addEventListener('mouseout', volver, false);
  }
  
  function volver(){
    var img = document.getElementById('imgvillareal').src = "./media/images/villareal2.jpg";
  }
  
  function foto2() {
    var img = document.getElementById('imgvillareal').src = "./media/images/villareal1.jpg";
  }