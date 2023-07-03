$(function () {
    $('.mainLink li').on('mouseenter', function () {
        let idx = $(this).index();
        $('.bh').css({
            backgroundPositionX: -2400 - idx * 100
        })
    })

    $('.mainLink li').on('mouseleave', function () {
        $('.bh').css({
            backgroundPositionX: 0
        })
    })
})