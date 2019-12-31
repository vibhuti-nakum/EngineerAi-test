$(document).ready(function () {
    var window_width = $(window).width(),
        slider_item = $(".hero-carousel li").length;
    $(".hero-carousel li").height(window_width * 0.226);
    $(".hero-carousel li").width(window_width);
    $(".hero-carousel ul").width(window_width * slider_item);

    $(".next-btn").click(function () {
        if ($(".prev-btn").hasClass("disable")) {
            $(".prev-btn").removeClass("disable");
        }
        if ($(".hero-carousel li.active").next().length) {
            $(".hero-carousel li.active").addClass('next').next().addClass('active');
            $(".hero-carousel li.next").removeClass('active next');
            var current_active = $(".hero-carousel li.active").index();
            $(".hero-carousel ul").css("transform", "translateX(" + -(current_active * window_width) + "px)");
        }
        if (!$(".hero-carousel li.active").next().length) {
            $(this).addClass("disable");
        }
    })

    $(".prev-btn").click(function () {
        if ($(".next-btn").hasClass("disable")) {
            $(".next-btn").removeClass("disable");
        }
        if ($(".hero-carousel li.active").prev().length) {

            $(".hero-carousel li.active").addClass('prev').prev().addClass('active');
            $(".hero-carousel li.prev").removeClass('active prev');
            var current_active = $(".hero-carousel li.active").index();
            $(".hero-carousel ul").css("transform", "translateX(" + -(current_active * window_width) + "px)");
        }
        if (!$(".hero-carousel li.active").prev().length) {
            $(this).addClass("disable");
        }
    })
    /* End Slider */


    /* Slider Mobile */
    $(window).resize(function (event) {
        window_width = $(window).width(),
            slider_item = $(".hero-carousel li").length;
        $(".hero-carousel li:first-child").addClass('active');
        $(".hero-carousel li").height(window_width * 0.226);
        $(".hero-carousel li").width(window_width);
        $(".hero-carousel ul").width(window_width * slider_item);
        var current_active = $(".hero-carousel li.active").index();
        $(".hero-carousel ul").css("transform", "translateX(" + -(current_active * window_width) + "px)");

    });
    /* End Slider Mobile */


    // flip event
    $('.trainer-card').mouseenter(function () {
        $(this).addClass('flip');
    })
    $('.trainer-card').mouseleave(function () {
        $(this).removeClass('flip');
    });

    // mobile-menu class toggle
    $('.hamburger').click(function () {
        $('body,html').toggleClass('open-menu');
    })


});

$(window).scroll(function () {
    var scrollTopPos = $(window).scrollTop() - 60;
    $(".hero-carousel li.active .bg_img").css({
        "transform": "translateY(" + scrollTopPos * 0.5 + "px)"
    })

    if ($(window).scrollTop() > 100) {
        $("body").addClass('small-header top-full');
    } else {
        $("body").removeClass('small-header');
    }

});