const express = require('express')

const { getCaptionedImages } = require('../db/landing')

const router = express.Router()

// GET /api/v1/landing/
router.get('/', (req, res) => {
  getCaptionedImages()
    .then(captionedImages => {
      res.json(captionedImages[Math.floor(Math.random() * captionedImages.length)])
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
