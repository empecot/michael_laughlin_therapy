console.log ('Hello Wrold');

$(document).ready(function() {

    $(document).scroll(function () {
        var y = $(this).scrollTop();
        var x = $(".nav").position();
        if (y > x.top) {
            $('nav').fadeIn().css({"position":"fixed","top":"0"});
        } else {
            $('nav').css({"position" : "static"});
        }
        });
});


//    var options = {
//   top: 100px, // This represents the buffer you want between the top of the page and the div in px. Default is 0.
//   min_screen_width: 0, // This represents the minimum screen width that the stickiness will be applied to. Default is 0.
//   bottom: 0, // This represents the buffer you want between the bottom of the page and the div in px. Default is 0.
//   outer_div: null // This is a jquery or DOM element whose height needs to be greater than the div in order to make it sticky. Default is null.
// };
// $('#my_div').sticky_div(options); // Or just $('#my_div').sticky_div();