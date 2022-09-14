const connection = require('./connection')

function addImageCaption(caption, db = connection) {
  console.log('from add caption', caption)
  return db('captions').insert(caption)
}

function addImageUrl(url, db = connection) {
  console.log('from add imagUrl', url)
  return db('images').insert(url)
}

module.exports = { addImageCaption, addImageUrl }
