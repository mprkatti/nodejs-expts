const Joi = require('@hapi/joi');


const addressSchema = Joi.object({
  line1: Joi.string().required().min(5),
  line2: Joi.string().min(5),
  city: Joi.string().required().min(3),
  state: Joi.string().required().min(2),
  country: Joi.string().required().min(3),
  zip: Joi.string().required().min(5),
  phone: Joi.string().required().min(11)

});

module.exports = { addressSchema }

