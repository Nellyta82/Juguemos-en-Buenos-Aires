


window.addEventListener('load', nuevo, false);

function nuevo() {
  
  var img = document.getElementById('imgantoinesaint');
  
  img.addEventListener('mouseover', vuelta, false);
  img.addEventListener('mouseout', other, false);
}

function vuelta(){
  var img = document.getElementById('imgantoinesaint').src = "./media/images/P exupery 2.jpg";
}

function other() {
  var img = document.getElementById('imgantoinesaint').src = "./media/images/P Exupery 1.jpg";
}
