/**
 * Created by macuser on 24.03.17.
 */

var $elem = $(".site-description");
var countries = require('country-list')();
var Templates = require('../Templates');
var $cart = $(".way-results");

$(document).on("scroll", function () {
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
$('#logo').click(function () {
    document.location.href = "index.html";
});

$('#way').click(function () {
    document.location.href = "way.html";
});

$('.about').click(function () {
    document.location.href = "about.html";
});

$('#where-to-go').click(function () {
    document.location.href = "where.html";
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

$('#join').click(function () {
    document.location.href = "way.html";
});
$('#contactus').click(function () {
    document.location.href = "write.html";
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
            im.addClass("im-r1");
            res += "China, Japan, Nepal ";
        }
        else if ($('#q22').is(':checked')) {
            im.addClass("im-r2");
            res += "Norway, Switzerland, Germany, Iceland, Finland, Alaska ";
        }
        else if ($('#q23').is(':checked')) {
            im.addClass("im-r3");
            if ($('#q31').is(':checked')) {
                res += "Spain, Greece, Portugal, Turkey, UAE, USA(Miami), Maldives, Mauritius";
            }
            else {
                res += "UAE, USA(Miami), Maldives, Mauritius";
            }
        }
        else if ($('#q24').is(':checked')) {
            im.addClass("im-r4");
            res += "USA, Germany, Japan, Singapore ";
        }
        else {
            im.addClass("im-r5");
            res += "France, Italy, England, Switzerland, Spain, Portugal ";
        }

    }
    else {
        if ($('#q21').is(':checked')) {
            im.addClass("im-r1");
            res += "India, Vietnam, Bolivia, Cambodia ";
        }
        else if ($('#q22').is(':checked')) {
            im.addClass("im-r2");
            res += "West Ukraine, Russia, Kazakhstan, Uzbekistan, Lithuania, Bulgaria, Croatia ";
        }
        else if ($('#q23').is(':checked')) {
            im.addClass("im-r3");
            res += "Turkey, Egypt, Sri Lanka, Honduras, Dominican Republic, Ireland "
        }
        else if ($('#q24').is(':checked')) {
            im.addClass("im-r4");
            res += "Argentina, Ireland, Hungary"
        }
        else {
            im.addClass("im-r5");
            res += "Hungary, Ireland, Lithuania, Croatia, Greece"
        }
    }
    $("#result-quiz").html(res);

});

//виклик бека з АПІ
$('#find').click(function () {
    var $from = $("#from-input");
    var $to = $("#to-input");
    var $there = $("#there-input");
    var $back = $("#back-input");

    if ($from.val() !== undefined && $to.val() !== undefined &&
        $there.val() !== undefined && $back.val() !== undefined) {

        var fromText = $from.val();
        var toText = $to.val();
        var fromDate = $there.val();
        var toDate = $back.val();

        function getYear(s) {
            return s.substring(6);
        }

        function getMonth(s) {
            return s.substring(0, 2);
        }

        function getDay(s) {
            return s.substring(3, 5);
        }

        fromDate = getYear(fromDate) + "-" + getMonth(fromDate) + "-" + getDay(fromDate);
        toDate = getYear(toDate) + "-" + getMonth(toDate) + "-" + getDay(toDate);
        var from = countries.getCode(fromText);
        var to = countries.getCode(toText);
        console.log(from);
        console.log(to);


        $.get("/my-url.html?url=/apiservices/browseroutes/v1.0/UA/uah/en-US/" + from + "/" + to + "/" + fromDate + "/" + toDate + "", function (string) {
            if (string !== undefined) {
                var data = JSON.parse(string);
                console.log('data: ', data);
                for (var i = 0; i < string.length; i++) {
                    console.log('data: ', data.Carriers[i].Name);
                    console.log('from date/time: ', data.Quotes[i].OutboundLeg.DepartureDate);
                    console.log('back date/time: ', data.Quotes[i].InboundLeg.DepartureDate);
                    console.log('price: ', data.Quotes[i].MinPrice, data.Currencies[i].Symbol);
                    var goodTOTime = "There: " + (data.Quotes[i].OutboundLeg.DepartureDate.substring(0, 10)) + " " + " at " + (data.Quotes[i].OutboundLeg.DepartureDate.substring(11, 19));
                    if ($('#one-way').is(':checked')) {
                        goodBackTime = " ";
                    } else {
                        var goodBackTime = "Back: " + ( data.Quotes[i].InboundLeg.DepartureDate.substring(0, 10)) + " " + " at " + ( data.Quotes[i].InboundLeg.DepartureDate.substring(11, 19));
                    }
                    var item = {
                        name: data.Carriers[i].Name,
                        start: fromText,
                        end: toText,
                        timeTo: goodTOTime,
                        timeBack: goodBackTime,
                        price: data.Quotes[i].MinPrice + data.Currencies[i].Symbol
                    };

                    $(".im2").css("height", "1300px");
                    $(".way-results").addClass("visible");
                    add(item);


                }

            }
        });

    }
});

function add(item) {
    var html_code = Templates.WayResult({item: item});
    var $node = $(html_code);
    $cart.append($node);
}

$('#btn-send').click(function () {
    var textToWrite = "Name: " + $("#name").val() + ". Mail: " + $("#email").val() + ". Phone: " + $("#phone").val() + '<br />' + $("#message").val();
    var textFileAsBlob = new Blob([textToWrite], {type: 'text/plain'});
    var fileNameToSaveAs = "message.html";
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    downloadLink.click();
});


function init() {
}

exports.init = init;