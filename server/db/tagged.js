//db

const connection = require('./connection')

module.exports = {
  getAllByTag,
}

function getAllByTag(tag, db = connection) {
  return db('images').select().whereLike('tags', `%${tag}%`)
}
