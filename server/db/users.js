const connection = require('./connection')

module.exports = {
  getUser,
}

function getUser(id, db = connection) {
  return db('users').select('name', 'email').where('auth0_id', id).first()
}
