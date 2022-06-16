document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            1174: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetween: 30
            },
            425: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                centeredSlides: true
            }
        }
    });
});