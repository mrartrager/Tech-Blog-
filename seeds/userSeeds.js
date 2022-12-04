const { User } = require('../models');

const userSeed = [
  {
    name: 'testUsername',
    email: 'testemail@gmail.com',
    password: 'testpassword',
  },
];

const seedUsers = () => User.bulkCreate(userSeed);

module.exports = seedUsers;