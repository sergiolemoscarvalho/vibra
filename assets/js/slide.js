jQuery(document).ready(function($) {
  // slide da estatisticas
    var swiper = new Swiper('.slide-estatisticas', {
      speed: 1000,
      parallax: true,
      loop: true,
      spaceBetween: 30,
      effect: 'fade',
      pagination: {
        el: '.paginacao1',
        clickable: true,

      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 5000,
      },    
    });

  // slide da maquete
    var swiper = new Swiper('.slide-maquete', {
      speed: 1000,
      parallax: true,
      loop: true,
      spaceBetween: 30,
      effect: 'fade',
      pagination: {
        el: '.paginacao2',
        clickable: true,

      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 5000,
      },
      breakpoints: {
        992: {
          autoHeight: true,         
        }, 
      },    
    });

  // slide da diversidade
    var swiper = new Swiper('.slide-diversidade', {
      speed: 1000,
      parallax: true,
      loop: true,
      spaceBetween: 30,
      effect: 'fade',
      pagination: {
        el: '.paginacao3',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      /*autoplay: {
        delay: 5000,
      },    */
    });

  // slide da slide-ambiental
    var swiper = new Swiper('.slide-ambiental', {
      speed: 1000,
      loop: true,
      spaceBetween: 30,
      effect: 'fade', 
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
     
      breakpoints: {
        992: {
          autoHeight: true,         
        }, 
      },
    }); 
});