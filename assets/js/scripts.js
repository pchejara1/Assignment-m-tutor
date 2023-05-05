$(".select").click(function() {
    var is_open = $(this).hasClass("open");
    if (is_open) {
        $(this).removeClass("open");
    } else {
        $(this).addClass("open");
    }
});

$(".select li").click(function() {

    var selected_value = $(this).html();
    var first_li = $(".select li:first-child").html();

    $(".select li:first-child").html(selected_value);
    $(this).html(first_li);

});

$(document).mouseup(function(event) {

    var target = event.target;
    var select = $(".select");

    if (!select.is(target) && select.has(target).length === 0) {
        select.removeClass("open");
    }

});
/* Fixed scroll */
// var num = 50;
// $(window).bind('scroll', function() {
//     if ($(window).scrollTop() > num) {
//         $('.navbar').addClass('nav-fixed');
//     } else {
//         $('.navbar').removeClass('nav-fixed');
//     }
// });

$(window).scroll(function() {
    if ($(document).scrollTop() > 30) {
        $('.navbar').addClass('nav-fixed');
    } else {
        $('.navbar').removeClass('nav-fixed');
    }
});

$(document).on("load resize", function() {
    // custom scrollbar
    $(".customscroll").mCustomScrollbar({
        theme: "dark-2",
        scrollInertia: 300,
        autoExpandScrollbar: true,
        advanced: { autoExpandHorizontalScroll: true }
    });
});
/* Back to top */
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 30) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 100);
        return false;
    });
});