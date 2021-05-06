const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const adminData = require('../database/adminData');
const users = require('../database/usersData');
const loginAdminValidate = require('../middlewares/loginAdminValidate');
const config = require('../config/config');
const sign = config.sign;



router.get('/users', (req, res) => {
  res.status(200).json({data: users})
})

router.get('/users/:id', (req, res) => {
  const user = users.find(el => el.user_id == req.params.id);
  (user == undefined)
    ? res.status(404).end()
    : res.status(202).json({data: user})
})

router.post('/', loginAdminValidate, (req, res) => {
  const {user, user_password} = req.body;
  let token = jwt.sign({user}, sign)
  res.json({state: true, token: token})
  console.log(token)
})

module.exports = router;


//rutas

// post /home
// get /admin/users
// get /admin/users:id
//delete /admin/users:id