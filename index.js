require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const mongooseHidden = require('mongoose-hidden')
const { updateIfCurrentPlugin } = require('mongoose-update-if-current')
const path = require('path')

const routes = require('./routes/index')

global.__basedir = path.join(__dirname, "./")

const { PORT, MONGODB_URL } = process.env

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes)

mongoose.connect(MONGODB_URL, {
})
  .then(() => console.log(`MongoDB Connected`))
  .catch((err) => console.log(err))

mongoose.plugin(updateIfCurrentPlugin)
mongoose.plugin(mongooseHidden)

mongoose.Promise = global.Promise
const db = mongoose.connection
db.on("error", console.error.bind(console, "MongoDB connection error:"))

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})