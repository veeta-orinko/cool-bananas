const connection = require('./connection')

function getAllCaptionedImages(db = connection) {
  return db('images')
    .join('captions', 'images.id', 'captions.image_id')
    .select(
      'images.id as imageId',
      'captions.auth0_id as auth0ImageId',
      'captions.id as captionId',
      'image_url as imageUrl',
      'caption_text as captionText'
    )
}

module.exports = {
  getAllCaptionedImages,
}
