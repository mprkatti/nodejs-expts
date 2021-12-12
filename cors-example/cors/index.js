const cors = require('cors');

const corsOptions = {
  origin: ['https://mybank.com', 'https://mybank2.com'],
  optionsSuccessStatus: 204
}

module.exports = cors(corsOptions);