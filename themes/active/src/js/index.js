import toggleMenu from './modules/toggleMenu';
import starterSwiper from './modules/starterSwiper';
import objectsSwiper from './modules/objectsSwiper';
import postsSwiper from './modules/postsSwiper';
import popup from './modules/popup';
import sendForm from './modules/sendForm';

window.addEventListener('DOMContentLoaded', () => {
    toggleMenu();
    starterSwiper();
    objectsSwiper();
    postsSwiper();
    popup({
        selectorsShow: '.navigation__call, .footer__btn',
        selectorsHide: '.contact-form__close, .popup'
    });
    sendForm();
});