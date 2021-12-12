const express = require('express');

const router = express.Router();

const { getAddress, saveAddress } = require('../controllers/address');

router.get('/address', getAddress);

router.post('/address', saveAddress);

module.exports = router;