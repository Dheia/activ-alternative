import postData from "../services/postData";

const createElement = ({ tagName, classList }) => {
    const elem = document.createElement(tagName);
    if (classList) {
        elem.className = classList;
    }
    return elem;
}

const sendForm = () => {
    const form = document.querySelector('form');
    const formWrapper = form.parentNode;

    const messageElem = createElement({ tagName: 'div', classList: 'contact-form__cover' });

    const clearInputs = () => {
        form.reset();
    }

    const successOrError = (msg) => {
        messageElem.innerHTML = msg;
        setTimeout(() => {
            messageElem.remove();
        }, 3000);
    }

    const setMessage = ({ loading, success, error }) => {
        if (loading) {
            formWrapper.appendChild(messageElem);
            messageElem.innerHTML = loading;
        } else if (success) {
            successOrError(success);
            clearInputs();
        } else if (error) {
            successOrError(error);
        }
    }

    form.addEventListener('submit', e => {
        e.preventDefault();
        if (true) {
            setMessage({ loading: 'Загрузка' });
            const data = new FormData(form);
            postData('/send-mail-api-v1.0', data)
                .then(setMessage)
                .catch((err) => {
                    setMessage({error: err.message});
                });
        }
    });
}

export default sendForm;
