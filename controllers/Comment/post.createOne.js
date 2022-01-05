const Comment = require('../../models/Comment')

const createOne = async (req, res) => {
  try {
    const { body, file } = req
    const newComment = await new Comment({
      ...body
    })

    await newComment.save()

    if (newComment) {
      res.status(201).json({
        data: newComment,
        success: 1
      })
    }
    else {
      res.status(400).json({
        message: 'Comment added failed.',
        success: 0
      })
    }
  } catch (error) {
    res.status(400).json({
      error: error,
      message: "Failed to Create Comment",
      success: 0
    })
  }
}

module.exports = createOne