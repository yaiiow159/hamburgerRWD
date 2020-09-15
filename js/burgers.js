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

    $('.cart-item button').click(function (e) { 
       
        $(this).text('已加入購物車');
       
        if (this.click){     
            var n=$('shop-count a span').text();
            var m=Number(n);
            m=m+1;
            var c=m.toString();
             $('.shop-count a span').text(c);
        }
    });
    //讓選單秀出來
    $('.showmenu').click(function (e) { 
        e.preventDefault();
        $('body').toggleClass('menu-show');
    });
    $('.side-list li').click(function (e) { 
        e.preventDefault();
    });
});