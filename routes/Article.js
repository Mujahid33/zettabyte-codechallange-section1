const express = require('express')
const multer = require('multer')

const createOne = require('../controllers/Article/post.createOne')
const updateOne = require('../controllers/Article/patch.updateOne')
const deleteOne = require('../controllers/Article/delete.deleteOne')
const getAll = require('../controllers/Article/get.getAll')

const route = express.Router();

// middleware
const diskStorage = require('../middlewares/diskStorage')

route.post("/", multer({ storage: diskStorage }).single('image'), createOne)
route.patch('/:id', multer({ storage: diskStorage }).single('image'), updateOne)
route.delete('/:id', deleteOne)
route.get('/', getAll)


module.exports = route