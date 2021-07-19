const conditions = {
    name: { require: true, minlength: 5, maxlength: 80 },
    phone: { require: true, minlength: 11, maxlength: 11 },
    agree: { require: true }
};

export default conditions;
