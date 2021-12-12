const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(express.json());


app.listen(3501, () => {
  console.log('Auth Server Listening on 3501');
})

const generateAccessToken = (user) => {
  return jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: '60s' });
}

app.post('/logout', (req, res) => {

  //remove refresh token frmo db.

});

app.post('/token', (req, res) => {

  //if refresh token that === req.body.token exists move fwd. else. 401.
  //jwt.verify(refreshToken) errors out = 403
  // send back jwt.sign(new accessToken)
  res.json({});
});

app.post('/login', (req, res) => {

  const { username } = req.body;
  const accessToken = generateAccessToken(username);
  const refreshToken = jwt.sign(username, process.env.REFRESH_TOKEN_SECRET);

  res.json({ accessToken, refreshToken });

})
