$(document).ready(function() {
    // Remove the spinning animation after 500ms.
    setTimeout(function() {
        $(".overlay").fadeOut("slow");
        // Initialize the AOS library.
        AOS.init({
            duration: 500
        });
    }, 500);
})