
$(function () {

    //동영상 1 -> 버튼 하나로 동영상 재생, 멈추기
    let btn = true;
    $('.ctr').on('click', function () {
        $(this).toggleClass('on');
        if (btn) {
            $('.main_visual video').trigger('pause');
        } else {
            $('.main_visual video').trigger('play');
        }
        btn = !btn;
        console.log(btn);
    })


    //trigger를 이용하여, 동영상 재생 '정지' 버튼 만들기 (pause)
    $('.case01 .pause').on('click', function () {
        $('.case01 video').trigger('pause');
    })
    //trigger를 이용하여, 동영상 '재생' 버튼 만들기 (play)
    $('.case01 .play').on('click', function () {
        $('.case01 video').trigger('play');
    })

})