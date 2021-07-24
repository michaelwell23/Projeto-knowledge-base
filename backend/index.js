const app = require('express')();
const consign = require('consign');
const db = require('./config/db');
const mongoose = require('mongoose');

require('./config/mongodb');

app.db = db;
app.mongoose = mongoose;

consign()
  .include('./config/passport.js')
  .then('./config/middlewares.js')
  .then('./api/validation.js')
  .then('./api')
  .then('./schedule')
  .then('./config/routes.js')
  .into(app);

const port = 4000;
app.listen(process.env.PORT || port, () => {
  console.log('Backend executando...');
});
