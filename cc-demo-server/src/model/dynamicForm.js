const mongoose = require('mongoose');

const dynamicFormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    placeholder: {
        type: String,
        required: true,
        trim: true
    },
    required: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    className: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    }
});

const DynamicForm = mongoose.model('DynamicForm', dynamicFormSchema);

module.exports = DynamicForm;
