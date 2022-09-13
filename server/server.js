const express = require('express')
const path = require('path')

const landingRoutes = require('./routes/landing')
const dashboardRoutes = require('./routes/dashboard')
const collectionRoutes = require('./routes/collection')
const createRoutes = require('./routes/create')
const usersRoutes = require('./routes/users')
const taggedRoutes = require('./routes/tagged')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/landing', landingRoutes)
server.use('/api/v1/dashboard', dashboardRoutes)
server.use('/api/v1/collection', collectionRoutes)
server.use('/api/v1/create', createRoutes)
server.use('/api/v1/users', usersRoutes)
server.use('/api/v1/tagged', taggedRoutes)
server.use('/api/v1/landing/all', landingRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
