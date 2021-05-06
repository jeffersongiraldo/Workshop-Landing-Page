let users = require('../database/usersData')

const loginUserValidate = (req, res, next) => {
  const {user, user_password} = req.body;
  const index = users.findIndex(el => el.user == user);
  (index == -1)
    ? res.status(404).json({msg: 'El usuario no existe. Aprovecha y regístrate!'})
    : (users[index].user_password !== user_password)
      ? res.status(401).json({msg: 'Contraseña incorrecta', status: false})
      : next()
}

module.exports = loginUserValidate;