import toggleMenu from './modules/toggleMenu';
import popup from './modules/popup';
import sendForm from './modules/sendForm';

window.addEventListener('DOMContentLoaded', () => {
    toggleMenu(); 
    popup({
        selectorsShow: '.navigation__call, .footer__btn',
        selectorsHide: '.contact-form__close, .popup'
    });
    sendForm();
});