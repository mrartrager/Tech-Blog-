const {Model, DataTypes} = require(sequelize);
// const { Post } = require('.');
const sequelize = require('../config/connection');

Post.init({
    id: {
        type: DataTypes.INTERGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.INTERGER,
        allowNull: false,  
    },
    name: {
        type: DataTypes.INTERGER,
        allowNull: false,
    },
    

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Post',
})

module.exports=Post;