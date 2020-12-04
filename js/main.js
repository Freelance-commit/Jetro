$(function () {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.thumbs',
    });

    $('.thumbs').slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        asNavFor: '.slider',
        focusOnSelect: true,
        // responsive: [
        //     {
        //         breakpoint: 960,
        //         settings: {
        //             slidesToShow: 5,

        //         }
        //     },
        // ]
    });

    $('.header__menu--btn').on('click', function () {
        $('.header__menu > ul').slideToggle();
    });

});