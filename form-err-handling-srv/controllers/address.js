
const { addressSchema } = require('../validators/validation_schema');
const createError = require('http-errors');

exports.getAddress = async (req, res) => {

  return res.status(200).json({ addr: 'my addr' });

}

exports.saveAddress = async (req, res, next) => {

  const address = req.body;

  try {

    const result = await addressSchema.validateAsync(address);
    console.log('res:', result);
    return res.status(201).json(result);

  } catch (error) {

    // console.log('error:', error);
    if (error.isJoi === true) error.status = 422;
    next(error);

  }

}