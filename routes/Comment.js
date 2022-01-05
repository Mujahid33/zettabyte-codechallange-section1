const express = require('express')

const createOne = require('../controllers/Comment/post.createOne')
const updateOne = require('../controllers/Comment/patch.updateOne')
const deleteOne = require('../controllers/Comment/delete.deleteOne')
const getAll = require('../controllers/Comment/get.getAll')
const getByArticle = require('../controllers/Comment/get.getByArticle')

const route = express.Router();

route.post("/", createOne)
route.patch('/:id', updateOne)
route.delete('/:id', deleteOne)
route.get('/', getAll)
route.get('/:article', getByArticle)


module.exports = route