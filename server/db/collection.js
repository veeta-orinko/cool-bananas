const connection = require('./connection')

// using the user id to search the database, bring in images created by a single

function getUserById(id, db = connection) {
  return db('images').select().where('id', id)
}

module.exports = {
  getUserById,
}
