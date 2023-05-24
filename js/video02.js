// 백그라운드 비디오 재생
$(function () {
    $('#bgndVideo').YTPlayer({
        videoURL: 'https://youtu.be/R1mhOV0LoBE',
        //재생하고 싶은 곳
        containment: '#main_visual',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,

    });

    $('#conVideo').YTPlayer({
        videoURL: 'https://youtu.be/R1mhOV0LoBE',
        //재생하고 싶은 곳
        containment: '#bgm1',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
    });

    $('#conVideo2').YTPlayer({
        videoURL: 'https://youtu.be/R1mhOV0LoBE',
        //재생하고 싶은 곳
        containment: '#bgm2',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
    });
    $('#conVideo3').YTPlayer({
        videoURL: 'https://youtu.be/R1mhOV0LoBE',
        //재생하고 싶은 곳
        containment: '#bgm3',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
    });



    //재생 멈춤 버튼 기능
    $('#main_visual .pause').on('click', function () {
        $('#bgndVideo').YTPPause();
    });
    $('#main_visual .play').on('click', function () {
        $('#bgndVideo').YTPPlay();
    });
})
