
$(document).ready(function(){
    var rep=0;
    $(".content>div").height($(".content>div>section").height());
    $("nav ul li:first-child").addClass("active");
    $(".content section").hide();
    $(".content section:nth-of-type(1)").show();
    $("nav ul li").on('click', function(){
        var secIndex=$(this).index()+1;
        if(rep != secIndex){
            $('.content section').fadeOut(100);
            $('.content section:nth-of-type('+ secIndex +')').fadeIn();
            $(".content>div").height($('.content>div>section:nth-of-type('+ secIndex +')').height());
            $(this).addClass("active").siblings().removeClass("active");
            rep = secIndex;
        }
    })

    //Slide anchor--------------------------------------------------->
    /*$(function(){
        $("a").on('click', function(event) {
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
              // Prevent default anchor click behavior
              event.preventDefault();
              // Store hash
              var hash = this.hash;
              // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
              $('html, body').animate({
                scrollTop: $(hash).offset().top
              }, 600, function(){
                  // Add hash (#) to URL when done scrolling (default click behavior)
                  window.location.hash = hash;
              });
            }
        });
    });*/
})

    