const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');


User.hasMany(Post, {

});

Post.belongsTo(User, {
    
})
// User.(,{

// })

module.exports={User, Post, Comment}