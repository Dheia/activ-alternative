import postData from "../services/postData";

const sendForm = () => {
    const forms = document.querySelectorAll('form');

    const loading = () => {
        console.log('loading');
    }

    const showResult = ({ success, error }) => {
        if (success) {
            console.log(success);
        } else if (error) {
            console.log(error);
        }
    }

    forms.forEach(form => {
        form.addEventListener('submit', e => {
            e.preventDefault();
            if (true) {
                loading();

                const data = new FormData(form);
                postData('/send-mail-api-v1.0', data)
                    .then(showResult)
                    .catch();
            }
        });
    });
}

export default sendForm;
