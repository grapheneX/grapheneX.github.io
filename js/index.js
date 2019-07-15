var animDuration = 500;
var releaseDate = "Jul 23, 2019 00:00:00";
var countDownDate;
$(document).ready(function() {
    // Remove the spinning animation after 500ms.
    setTimeout(function() {
        $(".overlay").fadeOut("slow");
        // Initialize the AOS library.
        AOS.init({
            duration: animDuration
        });
    }, animDuration);
    // Set the date we're counting down to.
    countDownDate = new Date(releaseDate).getTime();
    // Update the count down every 1 second.
    var x = setInterval(function() {
    // Get today's date and time.
    var now = new Date().getTime();
    // Find the distance between now and the count down date.
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds.
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Output the result in an element with id="demo"
    $("#countdown").html(days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ");
    // Count down is over.
    if (distance < 0) {
        clearInterval(x);
        $("#countdown").html("");
    }
    }, 1000);
})
