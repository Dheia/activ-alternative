import errorInput from './error-input';
import conditions from './conditions';
import validateInput from './validate-input';

const validator = (form) => {
    let validateSuccess = true;
    
    Object.keys(conditions).forEach(name => {
        const input = form.querySelector(`[name="${name}"]`);
        
        errorInput(input, 'remove');
        
        if (!validateInput(input, conditions[name])) {
            errorInput(input, 'add');
            validateSuccess = false;
        }
    });

    return validateSuccess;
}

export default validator;
