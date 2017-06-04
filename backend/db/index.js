var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'taxi_db'
  }
});
var bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry');

module.exports = {
  bookshelf: bookshelf,
  knex: knex
};
