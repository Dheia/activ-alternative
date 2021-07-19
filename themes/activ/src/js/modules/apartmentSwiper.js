import Swiper, { Thumbs } from 'swiper';
Swiper.use([Thumbs]);

const apartmentSwiper = () => {
    const galleryThumbs = new Swiper('._thumbs', {
        spaceBetween: 2,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });

    new Swiper('._apartment', {
        thumbs: {
            swiper: galleryThumbs
        }
    });
}

export default apartmentSwiper;
