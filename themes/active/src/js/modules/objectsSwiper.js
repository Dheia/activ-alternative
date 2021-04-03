import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

const objectsSwiper = () => {
    new Swiper('._objects .swiper-cards', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '._objects .swiper-button-next',
            prevEl: '._objects .swiper-button-prev',
          },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 50
            }
        }
    });
}

export default objectsSwiper;
