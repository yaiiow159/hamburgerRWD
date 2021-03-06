$(document).ready(function () {

    $('.scrollTop').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var targetPos = $(target).offset().top;
        
        $('html,body').animate({scrollTop : targetPos}, 1500);
    });
    //scroll end

    $('.top-item').click(function (e) { 
        $('html,body').animate({scrollTop:0},1000);
        
    });
    $('.cart-item button').click(function (e) {

        $(this).text('已加入購物車');

        if (this.click) {
            var n = $('shop-count a span').text();
            var m = Number(n);
            m = m + 1;
            var c = m.toString();
            $('.shop-count a span').text(c);
        }
    });
    //window pos show item
    $(window).scroll(function () { 
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        // console.log('scrollPos',scrollPos);
        $('.animated').each(function(){
            var thisPos = $(this).offset().top;
            if((windowHeight + scrollPos) >= thisPos){
                $(this).addClass('fadeIn');
            }else{
               $(this).removeClass('fadeIn');
            }
        });
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