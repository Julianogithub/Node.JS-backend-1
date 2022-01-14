const app = require('express')()
const consign = require('consign')
const db = require('./config/db')
const mongoose = require('mongoose')

require('./config/mongodb')

app.db = db
app.mongoose = mongoose

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./schedule')
    .then('./config/routes.js')
    .into(app)

/*app.listen(4000, () => {
    console.log('Backend executando...')
})*/

  //Outros =============================================================================
  const PORT = 4000
  app.listen(PORT,() => {
    console.log("\n\t Servidor Rodando: \x1b[34mBackend executando......");
    console.log("\t\x1b[32m URL: \x1b[36m http://localhost:4000 \t\2\n \x1b[0m");
  });