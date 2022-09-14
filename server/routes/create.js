const express = require('express')

const db = require('../db/create')

const router = express.Router()

// GET /api/v1/create/

router.get('/', (req, res) => {
  res.send('create route hit!')
})

router.post('/', (req, res) => {
  const caption = req.body
  db.addImageCaption(caption)
    .then((ids) => {
      res.json({ ...caption, id: ids[0] })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something bad happened' })
    })
})
// post route

module.exports = router
