const express = require('express');
const morgan = require('morgan');
const createError = require('http-errors');
const addressRoute = require('./routes/address');
const cors = require('cors');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

const PREFIX = "/api"

app.use(PREFIX, addressRoute);

app.listen(6500, () => {

  console.log('Listening on 6000');

})

app.get('/', (req, res) => {

  return res.status(200).json({ message: 'Hello world' });
});


app.use(async (req, res, next) => {
  next(createError.NotFound());
})

app.use((err, req, res, next) => {
  res.send({
    error: {
      status: err.status || 500,
      message: err.message || 'Internal Server Error'
    }
  })
});