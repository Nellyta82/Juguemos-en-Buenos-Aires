

  window.addEventListener('load', nuevo, false);

  function nuevo() {
    
    var img = document.getElementById('imgrivadavia');
    
    img.addEventListener('mouseover', vuelta, false);
    img.addEventListener('mouseout', other, false);
  }
  
  function vuelta(){
    var img = document.getElementById('imgrivadavia').src = "./media/images/parque-rivadavia1.jpg";
  }
  
  function other() {
    var img = document.getElementById('imgrivadavia').src = "./media/images/parque-rivadavia2.jpg";
  }
 