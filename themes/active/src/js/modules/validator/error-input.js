const errorInput = (input, action) => {
    input.parentNode.classList[action]('contact-form__group--error');
}

export default errorInput;

