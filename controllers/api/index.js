const router = require('express').Router();

const commentRoutes = require('./commentRoutes');
router.use('/comments', commentRoutes);

const postRoutes = require('./postRoutes');
router.use('/posts', postRoutes);

const userRoutes = require('./userRoutes');
router.use('/users', userRoutes)


module.exports = router;