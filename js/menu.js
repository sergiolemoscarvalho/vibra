jQuery(document).ready(function($) {
  var veri = 1;
  var trigger = document.getElementById('menu-trigger').addEventListener("click",function(){
    var menu = document.getElementById('menu-hidde');
    if (veri == 1) {
      menu.style.opacity = "1";
      veri = 0;
    }else{
      menu.style.opacity = "0";
      veri = 1;
    }
  })    
});