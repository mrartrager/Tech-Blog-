const router = require('express').Router();
const sequelize = require('../../config/connection')
const { User, Post, Comment } = require('../../models/');


// creating a new user
router.post('/register', async (req, res) =>{
    try{
        const userData = await User.create({
         username: req.body.username,
         email: req.body.email,
         password: req.body.password,
        });
        res.status(200).json(userData);
    } catch (err) {
        res.status(404).json(err)
    }
    req.session.save(() =>{
        req.session.user_id = userData.id;
        req.session.username= userData.username;
        req.session.logged_in = true;
        res.status(200).json({message: 'New User Created!'})
    })
})


//user login
router.post('/login', async (res, res) =>{
    try{
        const userData = await User.findOne({
            where: {
                email: req.body.email
            },
        });
    if (!userData) {
        res.status(404).json({
            message: "You messed up your email or password, try again"
        });
        return;
    }

    const checkPass = await userData.checkPassword(req.body.password);

    if(!checkPass) {
        res.status(404).json({
            message: "You messed up your email or password, try again"
        });
        return;
    }
    req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.username = userData.username;
        req.session.logged_in = true;
        res
          .status(200)
          .json({ user: userData, message: 'You are now logged in!' });
      });
    } catch (err) {
        res.status(404).json(err)
    }
})

//LOG OUT
router.post ('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(200).end();
        });
    } else {
        res.status(404).end()
    }
})

// GET USER BY /:id 
router.get('/:id', async (res, req) =>{
    const userData = await User.findOne({
        where:{
            id: req.params.id
        }
    })
    res.status(200).json(userData)
});



// router.post(/) re.destroy
router.post('/logout', (req, res)=> {
    if(){

    } else {
        res.status(404).
    }
})


module.exports = router;