import toggleMenu from './modules/toggleMenu';
import popup from './modules/popup';
import sendForm from './modules/sendForm';
import apartmentSwiper from './modules/apartmentSwiper';

window.addEventListener('DOMContentLoaded', () => {
    toggleMenu(); 
    popup({
        selectorsShow: '.navigation__call, .footer__btn, .apartment__btn',
        selectorsHide: '.contact-form__close, .popup'
    });
    sendForm();
    apartmentSwiper();
});