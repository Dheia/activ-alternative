import conditions from "./conditions";
import errorInput from './error-input';
import validateInput from './validate-input';

const inputsWatcher = (form) => {
    Object.keys(conditions).forEach(name => {
        const input = form.querySelector(`[name="${name}"]`);

        input.addEventListener('input', () => {
            errorInput(input, 'remove');
        
            if (!validateInput(input, conditions[name])) {
                errorInput(input, 'add');
            }
        });
    });
}

export {inputsWatcher};
