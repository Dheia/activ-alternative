import postData from "./helpers/postData";

const sendForm = () => {
    const forms = document.querySelectorAll('form');

    const loading = () => {
        console.log('loading');
    }

    const success = (msg) => {
        console.log(msg);
    }

    const failed = (msg) => {
        console.log(msg);
    }

    forms.forEach(form => {
        form.addEventListener('submit', e => {
            e.preventDefault();
            if (true) {
                loading();

                const data = new FormData(form);
                postData('/send-mail-api-v1.0', data)
                    .then(success)
                    .catch(failed);
            }
        });
    });
}

export default sendForm;
