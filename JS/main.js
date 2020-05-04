
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
})

    