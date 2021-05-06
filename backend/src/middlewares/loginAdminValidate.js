const adminData = require('../database/adminData')

const adminValidate = (req, res, next) => {
  const {user, user_password} = req.body;
  (adminData.user !== user || adminData.user_password !== user_password)
    ? res.status(404).json({msg: 'Usuario o contraseña incorrecta'})
    : next();
}

module.exports = adminValidate;