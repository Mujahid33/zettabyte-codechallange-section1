const express = require('express')
const Article = require('./Article')
const Comment = require('./Comment')

const route = express.Router()

route.use('/article', Article)
route.use('/comment', Comment)

route.use((_, res) => {
  res.status(404).json({
    success: 0,
    message: 'API not found'
  })
})

module.exports = route