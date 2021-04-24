import postData from "../services/postData";
import createElement from '../helpers/createElement';
import validator from "./validator";
import inputsWatcher from './validator/inputs-watcher';

const sendForm = () => {
    const form = document.querySelector('.contact-form__form');
    const cover = createElement({ tagName: 'div', classList: 'contact-form__cover' });

    inputsWatcher(form);

    const message = {
        loading: '<div class="spinner"></div>',
        success: 'success',
        error: 'error'
    }

    const afterResponse = ({ success }) => {
        cover.innerHTML = success ? message.success : message.error;
        setTimeout(() => {
            form.reset();
            cover.remove();
        }, 3000);
    }

    form.addEventListener('submit', e => {
        e.preventDefault();

        if (validator(form)) {
            cover.innerHTML = message.loading;
            form.parentNode.appendChild(cover);

            const data = new FormData(form);
            postData('/send-mail-api-v1.0', data)
                .then(afterResponse)
                .catch(afterResponse);
        }
    });
}

export default sendForm;
