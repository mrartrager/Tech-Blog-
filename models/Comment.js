const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');



Comment.init({
    id: {

    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Comment',
})


module.exports=Comment;