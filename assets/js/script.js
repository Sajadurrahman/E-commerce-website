
$(document).ready(function(){
    // Owl Carousel-1
    $(".owl-carousel").owlCarousel({
        autoplay:true,
        items:4,
        loop:true,
        nav:true,
        navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        dots:false,
        autoplayHoverPause:true,
        autoplayTimeout:2000,
    });
    // Owl Carousel-2

    // go to top button
    $(window).scroll(function(){
        if($(this).scrollTop() > 500){
            $('.gotoBTN').addClass('add_top_button');
        }else{
            $('.gotoBTN').removeClass('add_top_button');
        }
    });
    
    $('.gotoBTN').click(function(){
        $('html,body').animate({scrollTop:0},1000);
    });

    // AOS Script
    AOS.init({
        easing: 'ease-in-out-sine'
      });
      
    //Sticky
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('.menu-nav').addClass('sticky');
            if($(this).scrollTop() > 150){
                $('.sticky').addClass('sticky-animate');
            }else{
                $('.sticky').removeClass('sticky-animate');
            }
        }else{
            $('.menu-nav').removeClass('sticky');
        }
    });

  
}); 