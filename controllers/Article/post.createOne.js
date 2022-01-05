const Article = require('../../models/Article')

const createOne = async (req, res) => {
  try {
    const { body, file } = req
    const newArticle = await new Article({
      ...body,
      image: file.path
    })

    await newArticle.save()

    if (newArticle) {
      res.status(201).json({
        data: newArticle,
        success: 1
      })
    }
    else {
      res.status(400).json({
        message: 'Article added failed.',
        success: 0
      })
    }
  } catch (error) {
    res.status(400).json({
      error: error,
      message: "Failed to Create Article",
      success: 0
    })
  }
}

module.exports = createOne