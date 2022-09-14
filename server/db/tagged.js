//db

const connection = require('./connection')

module.exports = {
  getAllImagesByTag,
  getAllImages,
}
function getAllImages(db = connection) {
  return db('images')
    .join('captions', 'images.id', 'captions.image_id')
    .select(
      'images.id as imageId',
      'captions.id as captionId',
      'image_url as imageUrl',
      'caption_text as captionText',
      'tags'
    )
}

function getAllImagesByTag(tag, db = connection) {
  return getAllImages(db).whereLike('tags', `%${tag}%`)
}
