$(document).ready(function () {
    $('.menu-feature').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({scrollTop:$('#feature').offset().top},850 );
    });
    $('.menu-chef').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({scrollTop:$('#chef').offset().top},850,);
    });
    $('.menu-map').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({scrollTop:$('#map').offset().top},850 );
    });
    $('.menu-comment').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({scrollTop:$('#comment').offset().top},850);
    });
    $('.top-item').click(function (e) { 
        $('html,body').animate({scrollTop:0},850);
    });
});