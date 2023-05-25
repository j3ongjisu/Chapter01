$(function () {

    $('.tab_link li').on('click', function (event) {
        event.preventDefault();
        let idx = $(this).index(); //0,1,2

        $(this).addClass('on')
            .siblings().removeClass('on');

        //방법 1
        //$('.tab_content .con').removeClass('on');
        // $('.tab_content .con').eq(idx).addClass('on')

        //방법 2
        $('.tab_content .con').eq(idx).addClass('on')
            .siblings().removeClass('on');


        console.log(event, event.target, event.currentTarget, $(this), $(this).index());


    });

    //지도 클릭
    $('.tab_map_link li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index(); //0,1,2

        $('.tab_map_location li').eq(idx).addClass('on')
            .siblings().removeClass('on');
    });

});