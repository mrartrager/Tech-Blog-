const router = require('express').Router();
const { User } = require('../../models');


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
        res.status(400).json(err)
    }
    
})


//user login
router.post('/login', async (res, res) =>{
    try{
        const userData = await User.findOne({
            where: {
                email: req.body.email
            },
        })

    } catch (err) {
        res.status(400).json(err)
    }
//req.save
})

// router.post(/) re.destroy

module.exports = router;