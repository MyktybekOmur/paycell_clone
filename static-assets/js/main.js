
//search place open close
$('.search-btn').on('click',function() {
   
    
    $(".flex").addClass(' hidden');
    $(".navbar-nav").addClass(' hidden');
    $(".search-wrapper").removeClass('hidden');

});
$('.search-close').on('click',function() {
   
    
    $(".search-wrapper").addClass(' hidden');
    $(".navbar-nav").removeClass(' hidden');
    $(".flex").removeClass(' hidden');

});
//search place open close
$('.search-btn').on('click',function() {
   
    
    $(".flex").addClass(' hidden');
    $(".navbar-nav").addClass(' hidden');
    $(".search-wrapper").removeClass('hidden');

});
$('.search-close').on('click',function() {
   
    
    $(".search-wrapper").addClass(' hidden');
    $(".navbar-nav").removeClass(' hidden');
    $(".flex").removeClass(' hidden');

});

const swiper = new Swiper('.swiper', {
    // Optional parameters

    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    slidesPerView: 5,
    spaceBetween: 0,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,

            centeredSlides: true,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            centeredSlides: true,
        },
        // when window width is >= 640px
        940: {
            slidesPerView: 5,

        }
    }

});

function selectItem(newId) {
    $(".current").removeClass('current');
    $("#"+newId).addClass(' current');
    $(".visible").removeClass('visible');
    $("."+newId).addClass(' visible');

}

//sss

function changeVisible(newId) {
    $(".show").removeClass('show');
    $("#"+newId).addClass(' show');
    $(".active").removeClass('active');
    $("."+newId).addClass(' active');
}



