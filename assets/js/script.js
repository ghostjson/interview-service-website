// menu logic

$('#menu-open').click(function () {
    $('.navigation').slideDown();
    $(this).hide();
    $('#menu-close').show();
});

$("#menu-close").click(function () {
    $(".navigation").slideUp();
    $(this).hide();
    $('#menu-open').show();
});