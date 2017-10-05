/**
 * Created by AngrySerg on 04.10.2017.
 */
$(function () {
    $("ul a").on("click", function (e) {
        e.preventDefault();
        var $elem = $(this).attr("href");
        var $scrol = $($elem);
        $("html, body").animate({
            scrollTop: $scrol.offset().top - 70
        },
        800
        );
    });


    var $btn = $(".button");
    $(document).on("scroll", scroll);

    function scroll () {
        var $top = $(this).scrollTop();
        if($top > 200){
            $btn.fadeIn(600);
        }else {
            $btn.fadeOut(600);
        }
    }
    scroll();
    $btn.on("click", function () {
        $("html, body").animate({
                scrollTop: 0
            },
            800
        );
    });

})