const express = require('express')

const { getCaptionedImages } = require('../db/landing')

const router = express.Router()

// GET a randomised image /api/v1/landing/
router.get('/', (req, res) => {
  getCaptionedImages()
    .then((captionedImages) => {
      res.json(
        captionedImages[Math.floor(Math.random() * captionedImages.length)]
      )
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
