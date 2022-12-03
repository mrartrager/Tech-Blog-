const { Post } = require('../models');

const postSeed = [
  {
    title: 'Testing title',
    name: 'Testing name',
    user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postSeed);

module.exports = seedPosts;