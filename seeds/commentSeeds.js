const { Comment } = require('../models');

const commentSeed = [
  {
    comment_body: 'testing content',
    user_id: 1,
    post_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentSeed);

module.exports = seedComments; 