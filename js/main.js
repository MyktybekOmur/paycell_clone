/*
let money_btn = document.querySelector('#money_btn');
let pay_btn = document.querySelector('#pay_btn');
let wallet_btn = document.querySelector('#wallet_btn');
let t_btn = document.querySelector('#turkcell_btn');

money_btn.addEventListener('click', hidden('Money'));
pay_btn.addEventListener('click', hidden('Pay'));
wallet_btn.addEventListener('click', hidden('Wallet'));
t_btn.addEventListener('click', hidden('Turkcell'));

function hidden(idName) {
    document.getElementById(idName).style.display = 'none';
    console.log('1');
}
*/


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