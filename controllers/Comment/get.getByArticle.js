const Comment = require('../../models/Comment')

const getByArticle = async (req, res) => {
  try {
    const oneComment = await Comment.findOne({ article: req.query.article })

    res.status(200).json({
      success: 1,
      data: oneComment,
      msg: 'Query one comment request successful'
    })
  } catch (error) {
    res.status(400).json({
      error: error,
      message: "Failed to get comment"
    })
  }
}

module.exports = getByArticle