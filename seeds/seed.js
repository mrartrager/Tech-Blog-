const sequelize = require('../config/connection');
const seedUsers = require('./userSeeds.js');
const seedComments = require('./commentSeeds.js');
const seedPosts = require('./postSeeds.js');

const seedData = async () =>{
await sequelize.sync({ force: true });
await seedUsers();
await seedPosts();
await seedComments();

process.exit(0);
};
seedData();
