const users = require('../database/usersData')

const registerValidate = (req, res, next) => {
  const {user, user_mail} = req.body;
  const index_user = users.findIndex(el => el.user == user);
  const index_user_mail = users.findIndex(el => el.user_email == user_mail);
  (index_user != -1)
    ? res.state(404).json({msg: 'Nombre de usuario ya existente, intenta con otro.', status: false})
    : (index_user_mail != -1)
      ? res.state(404).json({msg: 'Email ya existente, intenta con otro.', status: false})
      : next()
}

module.exports = registerValidate;