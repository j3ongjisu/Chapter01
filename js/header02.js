$(function () {
    $('#header .gnb>ul>li').on('click', function (e) {
        if ($('#header .gnb').hasClass('on')) {
            e.preventDefault();
            $(this).addClass('on').siblings().removeClass('on');
        }

    });

    $('.mopen').on('click', function () {
        $('#header .gnb').toggleClass('on');
        $('#header').toggleClass('on');
    });

    $(window).on('resize', function () {
        $($('#header .gnb').removeClass('on'));
    })
});
