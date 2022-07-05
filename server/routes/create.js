const express = require('express')

const router = express.Router()

// GET /api/v1/create/
router.get('/', (req, res) => {
  res.send('create route hit!')
})

module.exports = router
