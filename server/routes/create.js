const express = require('express')
const request = require('superagent')
const db = require('../db/create')
require('dotenv').config()

const router = express.Router()
const apiKey = process.env.SECRET_API_KEY

// GET /api/v1/create/
router.get('/', (req, res) => {
  res.send('create route hit!')
})

router.get('/gif', (req, res) => {
  return request
    .get(`https://api.giphy.com/v1/gifs/trending`)
    .query({ api_key: apiKey })
    .query({ limit: 25 })
    .query({ rating: 'g' })

    .then((apiRes) => {
      res.json(apiRes.body.data)
    })
    .catch((err) => {
      console.log(err.message)
      res.sendStatus(500)
    })
})

router.post('/', (req, res) => {
  const imageData = {
    image_url: req.body.imageUrl,
    tags: 'placeholder',
  }
  const captionData = {
    caption_text: req.body.captionText,
  }
  let tempImageId = null
  db.addImageUrl(imageData)
    .then((id) => {
      tempImageId = id
      console.log(tempImageId)
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
