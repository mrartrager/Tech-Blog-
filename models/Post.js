const { Model, DataTypes } = require('sequelize');

// const { Post } = require('.');
const sequelize = require('../config/connection');

class Post extends Model { }

Post.init({
    id: {
        type: DataTypes.INTERGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTERGER,
        referances: {
            model: 'user',
            key: 'id'
        }
    },
    date_created: {
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW,
    },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
})   


module.exports = Post;