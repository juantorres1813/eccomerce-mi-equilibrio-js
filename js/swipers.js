
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    spaceBetween: 30,
    breakpoints: {
        481: {
            slidesPerView: 2,
            centeredSlides: false,
        },
        640:{
            slidesPerView: 3,
            centeredSlides: false,
        },
        992:{
            slidesPerView: 4,
            centeredSlides: false,
        }
    }
});