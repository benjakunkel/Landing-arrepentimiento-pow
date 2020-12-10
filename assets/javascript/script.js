// CAMBIO COLOR HEADER
$(function() {

    $(window).on("scroll", function() {
        if($(window).scrollTop() > 150) {
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

// SLIDERRR
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    function onYouTubeIframeAPIReady() {
    // Check all slides and initialize video players
    var swiper = document.getElementById('video-swiper');
    var slides = swiper.getElementsByClassName('swiper-slide')
    
    var players = [];
    
    for (var i=0; i < slides.length; i++) {
        var element = slides[i].getElementsByClassName('yt-player')[0];
        var id = element.getAttribute('data-id');
        
        var player = new YT.Player(element, {
        height: '315',
        width: '560',
        videoId: id,
        playerVars: {
            autoplay: false,
            color: '#7fbc03',
            modestbranding: true,
            rel: 0
        }
        // events: {
        //   'onReady': onPlayerReady,
        //   'onStateChange': onPlayerStateChange
        // }
        });
        players.push(player);
    }
    
    var mySwiper = new Swiper('.swiper-container', {
        effect: 'slide',
        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        on: {
        slideChange: function() {        
            players[mySwiper.previousIndex].pauseVideo();
            // players[mySwiper.activeIndex].playVideo();
        }
        }
    });
    
    }
   