import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

const postsSwiper = () => {
    new Swiper('._posts .swiper-cards', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '._posts .swiper-button-next',
            prevEl: '._posts .swiper-button-prev',
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

export default postsSwiper;
