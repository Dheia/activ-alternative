const validateInput = (input, { require, minlength, maxlength }) => {
    const value = input.getAttribute('type') == 'checkbox' ? input.checked : input.value.trim();

    if (require && !value) return false;
    if (minlength && minlength > value.length) return false;
    if (maxlength && maxlength < value.length) return false;

    return true;
}

export default validateInput;
