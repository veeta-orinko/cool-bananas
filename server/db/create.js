const connection = require('./connection')

function addImageCaption(captionInfo, db = connection) {
  return db('captions').insert(captionInfo)
}

function addImageUrl(urlInfo, db = connection) {
  return db('images').insert(urlInfo)
}

module.exports = { addImageCaption, addImageUrl }
