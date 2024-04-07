const Joi = require("joi");

const userRegistrationValidate = (req, res, next) => {
  const schema = Joi.object({
    fullName: Joi.string().min(3).min(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).alphanum().required(),
  });

  const { err, value } = schema.validate(req.body);
  if (err) {
    return res.status(400).json({ Message: "Bad Request", err });
  }

  next();
};

const userLoginValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).alphanum().required(),
  });

  const { err, value } = schema.validate(req.body);
  if (err) {
    return res.status(400).json({ Message: "Bad Request", err });
  }

  next();
};

module.exports = {
  userRegistrationValidate,
  userLoginValidation,
};
