const router = require('express').Router();
const { User } = require('../../models/');


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
    // idk how to write a session for logged in user
    //req.save

    } catch (err) {
        res.status(404).json(err)
    }

})

// router.post(/) re.destroy
router.post('/logout', (req, res)=> {
    if(){

    } else {
        res.status(404).
    }
})


module.exports = router;