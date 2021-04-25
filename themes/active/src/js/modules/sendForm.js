import postData from "../services/postData";
import createElement from '../helpers/createElement';
import validator, { inputsWatcher } from "./validator";

const sendForm = () => {
    const form = document.querySelector('.contact-form__form');
    const cover = createElement({ tagName: 'div', classList: 'contact-form__cover' });

    inputsWatcher(form);

    const message = {
        loading: `<div class="awesome-spinner"></div>`,
        success: `<div class="awesome-fetch-success">Ваше сообщение успешно отправлено!</div>`,
        error: `<div class="awesome-fetch-error">Извините. Ошибка сервера. Попробуйте повторить попытку позже.</div>`
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
