const express = require("express")
const app = express();
const bodyParser = require('body-parser');
const config = require('./src/config/config')
const usersRoute = require('./src/routes/auth')
const adminRoute = require('./src/routes/admin')
let port = config.port;

app.use(express.json())

app.use('/home', usersRoute);
app.use('/admin', adminRoute);

app.listen(port, () => {
  console.log(`This project is listening in http://localhost:${port}`)
})