const Article = require('../../models/Article')

const getAll = async (req, res) => {
  try {
    // pagination
    const { page } = req.query
    const limit = 5
    const skip = (page - 1) * limit

    // komentar 30 hari terakhir
    let today = new Date()
    let last30 = new Date(today)
    last30.setDate(today.getDate() - 30)

    const articles = await Article.aggregate([
      {
        $sort: {
          updatedAt: -1
        }
      },
      {
        $skip: skip
      },
      {
        $limit: limit
      },
      {
        $lookup: {
          from: 'comments',
          localField: '_id',
          foreignField: 'article',
          as: 'comments'
        }
      },
      {
        $project: {
          'title': 1,
          'content': 1,
          'image': 1,
          'author': 1,
          'comments': {
            $filter: {
              input: '$comments',
              as: 'comment',
              cond: {
                $and: [
                  { "gt": ["$$comment.updatedAt", last30] },
                  { "lt": ["$$comment.updatedAt", today] },
                ]
              }
            }
          }
        }
      }
    ])

    res.status(200).json({
      data: articles,
      success: 1,
      message: 'Query all articles request successful'
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      error: error,
      message: "Failed to get Articles"
    })
  }
}

module.exports = getAll