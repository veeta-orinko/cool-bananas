const connection = require('./connection')

function addImageCaption(captionInfo, db = connection) {
  return db('captions').insert(captionInfo)
}

function addImageUrl(urlInfo, db = connection) {
  return db('images')
    .insert(urlInfo)
    .then((ids) => ids[0])
}

module.exports = { addImageCaption, addImageUrl }
