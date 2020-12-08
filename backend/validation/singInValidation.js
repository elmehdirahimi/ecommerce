const Joi = require("@hapi/joi");

const SingInValidation = Joi.object().keys({ 
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });

  export {SingInValidation};