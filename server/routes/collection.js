const express = require('express')

const router = express.Router()

// GET /api/v1/collection/
router.get('/', (req, res) => {
  res.send('collection route hit!')
})

module.exports = router
