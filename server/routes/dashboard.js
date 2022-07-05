const express = require('express')

const router = express.Router()

// GET /api/v1/dashboard/
router.get('/', (req, res) => {
  res.send('dashboard route hit!')
})

module.exports = router
