const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

//ALL POSTS
router.get("/", async (req, res) => {
  const allPosts = await Post.findAll({ include: [{ model: User }] });
  const posts = allPosts.map((post) => post.get({ plain: true }));
  res.render("all-posts", { posts, logged_in: req.session.logged_in });
});

//ONE POST //need help writing one POST .findOne by id
router.get("/post/:id", async (req, res) => {

});

//SIGN UP
router.get("/signup", async (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
  }
  res.render("signup");
});

//LOG IN
router.get("/login", async (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
  }
  res.render("login");
});

//LOG OUT
router.get("/logout", async (req, res) => {
  res.render("logout");
});

module.exports = router;
