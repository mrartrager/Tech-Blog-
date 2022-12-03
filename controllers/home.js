const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');


//ALL POSTS
router.get('/', async (req, res) =>{

});

//ONE POST
router.get('/post/:id', async (req, res) =>{

});


//SIGN UP
router.get('/signup', async (req, res) =>{

});

//LOG IN
router.get('/login', async (req, res) =>{

});

//LOG OUT 
router.get('/logout', async (req, res) =>{
    res.render('logout');
});

module.exports = router;