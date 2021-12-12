const express = require('express');

const app = express();
const corsOptions = require('./cors');
const addressRoute = require('./address');

app.options('*', corsOptions);
app.use(corsOptions);
app.use(addressRoute);
app.listen(5500, () => {
  console.log('listening on 5500');
})

app.get('/', (req, res) => {
  res.send('Welcome to home page');
})