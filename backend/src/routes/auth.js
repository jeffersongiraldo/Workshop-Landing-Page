const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
let jwt = require('jsonwebtoken')
let users = require('../database/usersData')
const config = require('../config/config')
const registerValidate = require('../middlewares/registerValidate');
const loginValidate = require('../middlewares/loginValidate');
const sign = config.sign;

router.get('/', (req, res) => {
  res.status(200).end();
})

router.post('/', registerValidate, (req, res) => {
  const new_user = req.body;
  let last_id = users[users.length - 1].user_id
  new_user.user_id = last_id + 1;
  users.push(new_user);
  res.status(201).json({msg: 'Registro exitoso'})
})

router.post('/login', loginValidate,(req, res) => {
  const {user, user_password} = req.body;
  let token = jwt.sign({user}, sign)
  res.json({state: true, token: token})
  console.log(token)
})

module.exports = router;

