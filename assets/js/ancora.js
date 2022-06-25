jQuery(document).ready(function($) {
  // volta inicio
  $('#topo').click(function(e) {
    $('html, body').animate({scrollTop: 0}, 1000);
      return false;
    });

    $('#descer').click(function(e) {
      $('html, body').animate({scrollTop: 1000}, 1000);
        return false;
    });

    var top = ($(".apps_intro_wrapper_inner").offset() || { "top": NaN }).top;   
      if (!isNaN(top)) {
      $("#app_scroler").click(function () {   
      $('html, body').animate({
                  scrollTop: top
              }, 100);
          });
      }

    /*Scroll das Section*/
    $(".scroll").click(function(event){        
          event.preventDefault();
          $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
    });
});