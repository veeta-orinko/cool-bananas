const express = require('express')

const router = express.Router()

// GET /api/v1/tagged/
router.get('/', (req, res) => {
  res.send('tagged route hit!')
})

router.get('/:tag', (req, res) => {
  // what the user has searched for
  res.send(`tagged route hit! with: ${req.params.tag}`)
})

module.exports = router
