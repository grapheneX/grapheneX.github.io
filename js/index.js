$(document).ready(function() {
    AOS.init({
        duration: 600
    });

    // Remove the spinning animation after 500ms.
    setTimeout(function() {
        $(".overlay").fadeOut("slow");
    }, 500);

})