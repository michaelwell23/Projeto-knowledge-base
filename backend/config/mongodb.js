const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://knowledge:knowledge@cluster0.yopy6.mongodb.net/knowledge?retryWrites=true&w=majority',
    { useNewUrlParser: true }
  )
  .catch((e) => {
    const msg = 'ERRO! Não foi possível conectar com o MongoDB!';
    console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m');
  });
