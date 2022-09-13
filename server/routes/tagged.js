const express = require('express')

const router = express.Router()

const db = require('../db/tagged')

// GET /api/v1/tagged/
router.get('/', (req, res) => {
  res.send('tagged route hit!')
})

router.get('/:tag', (req, res) => {
  const { tag } = req.params
  db.getAllByTag(tag)
    .then((response) => res.json(response))
    .catch((err) => res.status(500).send(err.message))
})

module.exports = router
