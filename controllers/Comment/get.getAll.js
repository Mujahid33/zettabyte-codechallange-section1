const Comment = require('../../models/Comment')

const getAll = async (req, res) => {
  try {
    const comments = await Comment.find().populate('article')

    if (comments) {
      res.status(200).json({
        success: 1,
        data: comments,
        msg: 'Query all comments request successful'
      })
    }
    else {
      res.status(400).json({
        success: 0,
        msg: 'Failed to get Comments'
      })
    }
  } catch (error) {
    res.status(400).json({
      error: error,
      message: "Failed to get Comments"
    })
  }
}

module.exports = getAll