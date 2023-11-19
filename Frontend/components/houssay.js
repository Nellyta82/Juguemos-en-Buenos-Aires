window.addEventListener('load', init, false);

function init() {
  
  var img = document.getElementById('imghoussay');
  
  img.addEventListener('mouseover', out, false);
  img.addEventListener('mouseout', and, false);
}

function out(){
  var img = document.getElementById('imghoussay').src = "./media/images/houssay1.jpg";
}

function and() {
  var img = document.getElementById('imghoussay').src = "./media/images/houssay2.jpg";
}