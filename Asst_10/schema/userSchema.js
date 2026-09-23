const Joi = require("joi");

const userSchema = Joi.object({
    name: Joi.string().trim().min(2).required(),

    email: Joi.string().email().required(),

    age: Joi.number().integer().min(1).max(100).required(),

    course: Joi.string().trim().required()
});

module.exports = userSchema;
