document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        setWrapperSize: true,
        spaceBetween: 30,
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
            768: {
                slidesPerView: 2,
                slidesPerGroup: 1,
            },
            425: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 20
            }
        }
    });
});