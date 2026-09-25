const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minlength: 6
    },

    course: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true,
        min: 5
    }
});

module.exports = studentSchema;

