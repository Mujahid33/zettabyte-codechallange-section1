const Article = require('../../models/Article')

const updateOne = async (req, res) => {
  try {
    const { id } = req.params
    let updateArticle

    if (req?.file?.path === undefined) {
      updateArticle = await Article.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true })
    }
    else {
      updateArticle = await Article.findOneAndUpdate({ _id: id }, { ...req.body, image: req?.file?.path }, { new: true })
    }

    res.status(200).json({
      data: updateArticle,
      success: 1
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      error: error,
      message: "Failed to Update Article",
      success: 0
    })
  }
}

module.exports = updateOne