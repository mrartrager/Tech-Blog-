const { Comment } = require('../models');

const commentSeed = [
  {
    content: 'testing content',
    user_id: 1,
    post_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentSeed);

module.exports = seedComments; 