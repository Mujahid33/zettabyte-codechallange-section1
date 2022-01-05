const Comment = require('../../models/Comment')

const deleteOne = async (req, res) => {
  try {
    const { id } = req.params
    await Comment.deleteOne({ _id: id })

    res.status(200).json({
      message: 'Comment deleted',
      success: 1
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      error: error,
      message: "Failed to Update Comment",
      success: 0
    })
  }
}

module.exports = deleteOne