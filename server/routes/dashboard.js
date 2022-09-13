const express = require('express')

const router = express.Router()

const { getAllCaptionedImages } = require('../db/dashboard')

// GET /api/v1/dashboard/

router.get('/', (req, res) => {
  getAllCaptionedImages()
    .then((imageData) => {
      res.json(imageData)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('server error')
    })
})

module.exports = router
