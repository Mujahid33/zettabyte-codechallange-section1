const Article = require('../../models/Article')

const deleteOne = async (req, res) => {
  try {
    const { id } = req.params
    await Article.deleteOne({ _id: id })

    res.status(200).json({
      message: 'Article deleted',
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

module.exports = deleteOne