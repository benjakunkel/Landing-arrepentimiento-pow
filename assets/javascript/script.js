// CAMBIO COLOR HEADER
$(function() {

    $(window).on("scroll", function() {
        if($(window).scrollTop() > 700) {
            // Cuando el scroll top se a de 700 agrego:
            //Clase .active con fondo blanco
            $(".header").addClass("active");
            //Logo negro
            $('#logo').attr('src','assets/img/logo-pow.svg');
        } else {
            //Fondo transparente
           $(".header").removeClass("active");
           //Logo blanco
           $('#logo').attr('src','assets/img/logo-pow-blanco.svg')
        }
    });
});

