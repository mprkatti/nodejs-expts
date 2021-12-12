const express = require('express');

const router = express.Router();

router.get('/address', (req, res) => {

  res.status(200).json({ address: 'Hello world !!' })

})

module.exports = router;