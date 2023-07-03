$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    $('.pro_slide').on('init afterChange', function () {
        const current = $('.pro_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
        console.log(current);
    })

    $('.pro_slide').slick({
        arrows: false,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 200,
    })
})