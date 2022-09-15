const express = require('express')

const db = require('../db/create')

const router = express.Router()

// GET /api/v1/create/
router.get('/', (req, res) => {
  res.send('create route hit!')
})

router.post('/', (req, res) => {
  const imageData = {
    image_url: req.body.imageUrl,
    tags: 'placeholder',
  }
  // auth0_id: req.body.auth0Id,

  const captionData = {
    caption_text: req.body.captionText,
  }
  let tempImageId = null
  db.addImageUrl(imageData)
    .then((id) => {
      tempImageId = id
      // console.log(tempImageId)
      return db.addImageCaption({ ...captionData, image_id: tempImageId })
    })
    .then((ids) => {
      res.json({ ...captionData, id: ids[0], image_id: tempImageId })
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
