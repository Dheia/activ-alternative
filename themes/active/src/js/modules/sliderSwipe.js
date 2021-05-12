const sliderSwipe = () => 
    {
        const galleryThumbs = new Swiper('.object__slider-thumbs', {
            spaceBetween: 5,
            slidesPerView: 5,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
          });
          
          new Swiper('.object__slider-top', {
            loop: true,
            loopedSlides: 5, //looped slides should be the same
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            thumbs: {
              swiper: galleryThumbs,
            },
          });
        
          
    }

export default sliderSwipe;