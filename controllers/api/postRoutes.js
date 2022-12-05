const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Post , User, Comment } = require('../../models/');

router.post('/', withAuth, async (req, res) => {
    try {
      const newPost = await Post.create({
        title: req.body.title,
        content: req.body.body,
        user_id: req.session.user_id,
      });
      res.json(newPost);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  
router.put('/:id', withAuth, async (req, res) => {
    try {
      console.log(req.body.title, req.body.body, req.session.user_id, req.params.id)
      const postData = await Post.update({
        title: req.body.title,
        content: req.body.body,
        user_id: req.session.user_id,
      },
      {
        where: {
          id: req.params.id
        }
      });
      console.log(postData)
      res.status(200).json(postData)
  
    } catch (err) {
      res.status(500).json(err)
    }
  })


module.exports = router;