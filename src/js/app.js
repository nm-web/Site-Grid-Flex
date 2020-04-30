$(document).ready(function() {

    $('.mobile-menu').on('click',(e)=>{
        $(e.currentTarget).toggleClass('mobile-menu_active');
        $(e.currentTarget).siblings('.menu').toggleClass('menu_column');

    });

    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: true,
        dots:true,
    });
});

$(window).on('resize',function () {
    if ($(window).width() > 768) {
        $('.menu').removeClass('menu_column');
    }
});
