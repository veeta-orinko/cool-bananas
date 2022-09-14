const express = require('express')

const router = express.Router()

const db = require('../db/tagged')

// GET /api/v1/tagged/
router.get('/', (req, res) => {
  db.getAllImages()
    .then((images) => res.json(images))
    .catch((err) => res.status(500).send(err.message))
})

// GET /api/v1/tagged/:tag
router.get('/:tag', (req, res) => {
  const { tag } = req.params
  db.getAllImagesByTag(tag)
    .then((response) => res.json(response))
    .catch((err) => res.status(500).send(err.message))
})

module.exports = router
