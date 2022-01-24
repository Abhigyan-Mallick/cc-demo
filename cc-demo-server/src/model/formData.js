const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
    param: {
        type: String,
        required: true,
        trim: true
    }
});

const FormData = mongoose.model('FormData', formDataSchema);

module.exports = FormData;
