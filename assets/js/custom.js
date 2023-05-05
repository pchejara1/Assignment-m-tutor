$('.ques-block-content').slick({
    slidesToShow: 10,
    slidesToScroll: 10,
    autoplay: false,
    autoplaySpeed: 2000,
    arrow: true,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 7,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        }
    ]
});

// Select Grade Toggle class
$(".sel-box").click(function() {
    $(".sel-box").removeClass("active");
    $(this).toggleClass("active");
});

$(document).ready(function() {
    $('.rating-btn').click(function() {
        $('.rating-btn').removeClass('active');
        $(this).addClass('active');
    });
});

//Search reset
$(document).ready(function() {
    $("#searchinput").keyup(function() {
        $("#searchclear").toggle(Boolean($(this).val()));
    });
    $("#searchclear").toggle(Boolean($("#searchinput").val()));
    $("#searchclear").click(function() {
        $("#searchinput").val('').focus();
        $(this).hide();
    });
});

$('.features-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    speed: 900
});

$(function() {
    $('.equal-height').matchHeight({
        byRow: true,
        property: 'min-height'
    });
});