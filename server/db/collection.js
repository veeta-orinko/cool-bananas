const connection = require('./connection')

// using the user id to search the database, bring in images created by a single

function getImagesByUserId(userId, db = connection) {
  return db('images').select().where('auth0_id', userId)
}

module.exports = {
  getImagesByUserId,
}
