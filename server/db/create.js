const connection = require('./connection')

function addImageCaption(caption, db = connection) {
  return db('captions').insert(caption)
}

function addImageUrl(url, db = connection) {
  return db('images').insert(url)
}

module.exports = { addImageCaption, addImageUrl }
