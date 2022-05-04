$(document).ready(function() {
    $("a.scroll").click(function() {
        var elementClick = $(this).attr("a.href");
        var destination = $(elementClick).offset().top;
        if ($.browser.safari) {
            $('body').animate({ scrollTop: destination }, 1100); //1100 - скорость
        } else {
            $('html').animate({ scrollTop: destination }, 1100);
        }
        return false;
    });
});