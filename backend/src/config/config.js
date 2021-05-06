require('dotenv').config();
const config = {
  port: parseInt(process.env.PORT) || 5000,
  sign: process.env.SIGN 
}
module.exports = config;