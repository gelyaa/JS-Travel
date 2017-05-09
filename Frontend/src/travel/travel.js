/**
 * Created by macuser on 24.03.17.
 */

function init() {
    alert("hiiiii");
}

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

$(function(){
    $(window).scroll(function(e) {
        if($(this).scrollTop()>20){
            $('.top-panel').addClass('scrolled-top');
        }
        else if($(this).scrollTop()==0){
            $('.top-panel').removeClass('scrolled-top');
        }
    });
});


$('#go').click(function(){
    document.location.href = "way.html";
});

$('#home').click(function(){
    document.location.href = "index.html";
});

$('#way').click(function(){
    document.location.href = "way.html";
});

$('#about').click(function(){
    document.location.href = "about.html";
});

$('#where-to-go').click(function(){
    document.location.href = "where.html";
});


$('#hotels').click(function(){

});

$('#events').click(function(){

});

$('#login').click(function(){

});

$('#join').click(function(){

});

$(function() {
    var inp = $("#there-input");
    var d = new Date() , s;
    if(d.getMonth() < 9)  s = '0' + (d.getMonth() + 1 ) + '/' + (d.getDate() + 1) + '/' + d.getFullYear();
    else s = (d.getMonth() + 1 ) + '/' + (d.getDate() + 1) + '/' + d.getFullYear();
    inp.datepicker();
    inp.attr("placeholder", s);
});

$(function() {
    var inp = $("#back-input");
    var d = new Date() , s;
    if(d.getMonth() < 9) s = '0' + (d.getMonth() + 1 ) + '/' + (d.getDate() + 1) + '/' + d.getFullYear();
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

exports.init = init;