const router = require('express').Router();

const apiRoutes = require('./api');
router.use('/api', apiRoutes);

const homeRoutes = require('./home');
router.use('/', homeRoutes);

module.exports = router;