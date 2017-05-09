/**
 * Created by macuser on 24.03.17.
 */


var $window = $(window);
var $elem = $(".site-description")

function isScrolledIntoView($elem, $window) {
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();
    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(document).on("scroll", function () {
    // if (isScrolledIntoView($elem, $window))
    $elem.addClass("animate-description")
});

$(function () {
    $(window).scroll(function (e) {
        if ($(this).scrollTop() > 20) {
            $('.top-panel').addClass('scrolled-top');
        }
        else if ($(this).scrollTop() == 0) {
            $('.top-panel').removeClass('scrolled-top');
        }
    });
});


$('#go').click(function () {
    document.location.href = "way.html";
});

$('#home').click(function () {
    document.location.href = "index.html";
});

$('#way').click(function () {
    document.location.href = "way.html";
});

$('#about').click(function () {
    document.location.href = "about.html";
});
$('#contactus').click(function () {
    document.location.href = "write.html";
});

$('#where-to-go').click(function () {
    document.location.href = "where.html";
});

$('#hotels').click(function () {

});

$('#events').click(function () {

});

$(function () {
    var inp = $("#there-input");
    var d = new Date(), s;
    if (d.getMonth() < 9) s = '0' + (d.getMonth() + 1 ) + '/' + (d.getDate() + 1) + '/' + d.getFullYear();
    else s = (d.getMonth() + 1 ) + '/' + (d.getDate() + 1) + '/' + d.getFullYear();
    inp.datepicker();
    inp.attr("placeholder", s);
});

$(function () {
    var inp = $("#back-input");
    var d = new Date(), s;
    if (d.getMonth() < 9) s = '0' + (d.getMonth() + 1 ) + '/' + (d.getDate() + 1) + '/' + d.getFullYear();
    else s = (d.getMonth() + 1 ) + '/' + (d.getDate() + 1) + '/' + d.getFullYear();
    inp.datepicker();
    inp.attr("placeholder", s);
});

$("#return").change(function () {
    $(this).prop('checked', true);
    $("#one-way").prop('checked', false);
    $(".box-line").removeClass("one-way-mode");
});

$("#one-way").change(function () {
    $(this).prop('checked', true);
    $("#return").prop('checked', false);
    $(".box-line").addClass("one-way-mode");
});

$('#login').click(function () {
    document.location.href = "login.html";
});

$('#join').click(function () {
    document.location.href = "login.html";
});
$('#start-quiz').click(function () {
    $(".im-test").css("height", "2100px");
    $(".quiz-segment").addClass("quiz-mode");
});
$('#finish-quiz').click(function () {
    $(".im-test").css("height", "100%");
    $(".quiz-segment").addClass("finish-quiz-mode");
    var res = "";
    var im = $(".im-res");
    if ($('#q12').is(':checked')) {
        if ($('#q21').is(':checked')) {

            im.css("background", "url(../www/assets/images/ocean.jpeg) no-repeat");
            im.css("background-size", "cover");

            res += "China, Japan, Nepal ";
        }
        else if ($('#q22').is(':checked')) {
            im.css("background", "url(../www/assets/images/ocean.jpeg) no-repeat");
            im.css("background-size", "cover");
            res += "Norway, Switzerland, Germany, Iceland, Finland, Alaska ";
        }
        else if ($('#q23').is(':checked')) {
            im.css("background", "url(../www/assets/images/ocean.jpeg) no-repeat");
            im.css("background-size", "cover");
            if ($('#q31').is(':checked')) {
                res += "Turkey Spain, Greece, Portugal ";
            }
            else {
                res += "UAE, Egypt, USA(Miami)";
            }
        }
        else if ($('#q24').is(':checked')) {
            im.css("background", "url(../www/assets/images/ocean.jpeg) no-repeat");
            im.css("background-size", "cover");
            res += "USA, Germany, Japan, Singapore ";
        }
        else {
            im.css("background", "url(../www/assets/images/ocean.jpeg) no-repeat");
            im.css("background-size", "cover");
            res += "France, Italy, England, Switzerland, Spain, Portugal ";
        }

    }
    else {
        if ($('#q21').is(':checked')) {
            im.css("background", "url(../www/assets/images/ocean.jpeg) no-repeat");
            im.css("background-size", "cover");
            res += "India, Vietnam, Bolivia, Cambodia ";
        }
        else if ($('#q22').is(':checked')) {
            im.css("background", "url(../www/assets/images/ocean.jpeg) no-repeat");
            im.css("background-size", "cover");
            res += "West Ukraine, Russia, Kazakhstan, Uzbekistan, Lithuania, Bulgaria, Croatia ";
        }
        else if ($('#q23').is(':checked')) {
            im.css("background", "url(../www/assets/images/ocean.jpeg) no-repeat");
            im.css("background-size", "cover");
            res += "Sri Lanka, Honduras, Dominican Republic, Ireland "
        }
        else if ($('#q24').is(':checked')) {
            im.css("background", "url(../www/assets/images/ocean.jpeg) no-repeat");
            im.css("background-size", "cover");
            res += "Argentina, Ireland, Hungary"
        }
        else {
            im.css("background", "url(../www/assets/images/ocean.jpeg) no-repeat");
            im.css("background-size", "cover");
            res += "Hungary, Ireland"
        }
    }
    $("#result-quiz").html(res);

});


function init() {
}

exports.init = init;