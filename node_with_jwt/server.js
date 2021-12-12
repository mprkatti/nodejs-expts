const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(express.json());

const posts = [
  { username: 'Jim', title: "Jim's Post" },
  { username: 'Kyle', title: "Kyle's Post" }
];

const authenticate = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) res.sendStatus(403);
    req.user = user;
    next();
  })

}


app.get('/posts', authenticate, (req, res) => {
  console.log(req.user);
  res.json(posts.filter(post => post.username === req.user.user));
})

app.listen(3500, () => {
  console.log('App Listening on 3500');
})

