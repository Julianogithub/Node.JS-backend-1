const config = require('../knexfile.js')
const knex = require('knex')(config)

knex.migrate.latest([config])
module.exports = knex

console.log(knex.migrate.latest([config]));
console.log(config);
