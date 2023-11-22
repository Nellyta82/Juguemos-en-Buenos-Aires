

  
  window.addEventListener('load', cambio, false);

  function cambio() {
    
      var img = document.getElementById('imgangelgris');
      
      img.addEventListener('mouseover', foto2, false);
      img.addEventListener('mouseout', volver, false);
    }
    
    function volver(){
      var img = document.getElementById('imgangelgris').src = "./media/images/plaza-angel-gris- 2.png";
    }
    
    function foto2() {
      var img = document.getElementById('imgangelgris').src = "./media/images/plaza-angel-gris-1.jpg";
    }

