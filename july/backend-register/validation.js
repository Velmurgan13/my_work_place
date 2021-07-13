const joi = require("joi");
const registerValidation = (data) => {
  const Schema = joi.object({
    name: joi.string().min(6).required(),
    email: joi.string().min(6).required().email(),
    password: joi.string().min(6).required(),
  });
  return Schema.validate(data);
};
const loginValidation = (data) => {
  const Schema = joi.object({
    email: joi.string().min(6).required().email(),
    password: joi.string().min(6).required(),
  });
  return Schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
