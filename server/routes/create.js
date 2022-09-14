const express = require('express')

const db = require('../db/create')

const router = express.Router()

// GET /api/v1/create/

router.get('/', (req, res) => {
  res.send('create route hit!')
})

router.post('/', (req, res) => {
  const { url } = req.body
  const { caption } = req.body

  const newUrl = {
    image_url: url.imageUrl,
    auth0_id: url.auth0Id,
  }

  const newCaption = {
    caption_text: caption.captionText,
    auth0_id: caption.auth0Id,
  }

  db.addImageUrl(newUrl)
    .then((ids) => {
      return db.addImageCaption({ ...newCaption, image_id: ids[0] })
    })
    .then((ids) => {
      res.json({ ...newCaption, id: ids[0] })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something bad happened' })
    })
})

// router.post('/', checkJwt, (req, res) => {
//   const { fruit } = req.body
//   const auth0Id = req.user?.sub
//   const newFruit = {
//     added_by_user: auth0Id,
//     name: fruit.name,
//     average_grams_each: fruit.averageGramsEach,
//   }

//   db.addFruit(newFruit)
//     .then(() => db.getFruits())
//     .then((fruits) => res.json({ fruits }))
//     .catch((err) => {
//       console.error(err)
//       res.status(500).send(err.message)
//     })
// })

// router.post('/', (req, res) => {
//   const url = req.body
//   console.log('url: ', url)
//   db.addImageUrl(url)
//     .then((ids) => {
//       res.json({ ...url, id: ids[0] })
//     })
//     .catch((err) => {
//       console.log(err)
//       res.status(500).json({ message: 'Something bad happened' })
//     })
// })
// post

// post route

// {
//   "auth0_id": 2,
//   "image_url": "https://i.imgur.com/yX4444wNrUV.jpeg",
//   "tags": "second comic strip"
// }
module.exports = router
