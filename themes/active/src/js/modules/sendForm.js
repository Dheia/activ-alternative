import postData from "../services/postData";
import createElement from '../helpers/createElement';

const sendForm = () => {
    const forms = document.querySelectorAll('form');
    const cover = createElement({ tagName: 'div', classList: 'contact-form__cover' });

    const message = {
        loading: '<div class="contact-form__loading"></div>',
        success: 'success',
        error: 'error'
    }
    
    const changeCoverContent = (form) => {
        return ({success}) => {
            cover.innerHTML = success ? message.success : message.error;
            setTimeout(() => {
                form.reset();
                cover.remove();
            }, 3000);
        }
    }
    
    const addCover = (form) => {
        form.parentNode.appendChild(cover);
        cover.innerHTML = message.loading;
    }

    forms.forEach(form => {
        form.addEventListener('submit', e => {
            e.preventDefault();

            addCover(form);

            const data = new FormData(form);
            postData('/send-mail-api-v1.0', data)
                .then(changeCoverContent(form))
                .catch((err) => {
                    changeCoverContent(form)({ error: err.message });
                });
        });
    });

}

export default sendForm;
