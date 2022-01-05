const Comment = require('../../models/Comment')

const updateOne = async (req, res) => {
  try {
    const { id } = req.params

    const updateComment = await Comment.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true })

    res.status(200).json({
      data: updateComment,
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

module.exports = updateOne