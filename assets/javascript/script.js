// CAMBIO COLOR HEADER
$(function() {
    console.log("hello")
    $(window).on("scroll", function() {
        console.log("asdasd")
        if($(window).scrollTop() > 700) {
            $(".header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("active");
        }
    });
});

// CAMBIO DE LOGO
$(function(){
    $(document).scroll(function(){
        if($(this).scrollTop() < 700) {
            $('#logo').attr('src','assets/img/logo-pow-blanco.svg')
        }
        if($(this).scrollTop() > 700) {        
         $('#logo').attr('src','assets/img/logo-pow.svg');   
        }
    });
});