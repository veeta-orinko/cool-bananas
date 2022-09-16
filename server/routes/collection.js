const express = require('express')
const router = express.Router()
const db = require('../db/collection')

// GET /api/v1/collection/

router.get('/', (req, res) => {
  const userId = '1'
  db.getImagesByUserId(userId)
    .then((images) => {
      res.json(images)
    })

    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

module.exports = router
