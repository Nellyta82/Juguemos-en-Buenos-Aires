window.addEventListener('load', nuevo, false);

function nuevo() {
  
  var img = document.getElementById('imgmujica');
  
  img.addEventListener('mouseover', vuelta, false);
  img.addEventListener('mouseout', other, false);
}

function vuelta(){
  var img = document.getElementById('imgmujica').src = "./media/images/mujica1.jpg";
}

function other() {
  var img = document.getElementById('imgmujica').src = "./media/images/mujica2.jpg";
}
