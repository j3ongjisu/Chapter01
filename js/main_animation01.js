// $(function () {
//     $('.main_slide').slick({
//         arrows: false,
//         autoplay: true,
//     });

//     $$('.main_slide .slick-current').addClass('on');

//     $('.main_slide').on('afterChange', function () {
//         let _this = $('.main_slide .slick-current');
//         _this.addClass('on').siblings().removeClass('on');
//     })
// })







//자동차 움직이게 하는 것 (외우기)
$(function () {

    const model = ['ioniq', 'casper', 'sonata']

    $('.main_slide').on('init afterChange', function (e, s, c) {
        let _this = $(this).find('.slick-current');
        _this.addClass('on').siblings().removeClass('on');

        //숫자
        $('#main_visual .num').text(c ? c + 1 : 1);
        //이름 나오게 하기
        $('#main_visual .model').text(c ? model[(c + 1) % model.length] : model[1]);
    });


    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
    });

    //모델명 클릭하면 다음 페이지로 넘어가는 버튼
    $('#main_visual .model').on('click', function () {
        $('.main_slide').slick('slickNext');
    });

});



