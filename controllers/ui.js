const postService = require('../services/posts')

let ctrl = {};

ctrl.main = (req, res) => {
  return res.render('pages/index');
}

ctrl.about = (req, res) => {
  return res.render('pages/about');
}

ctrl.posts = async (req, res, next) => {
  try {
    const result = await postService.getLatestPosts(5);
    return res.render('pages/posts', {posts: result || []});
  } catch (error) {
    throw next(error);
  }
}

ctrl.newPost = (req, res) => {
  return res.render('pages/new-post');
}

ctrl.singlePost = (req, res) => {
  return res.render('pages/single-post');
}

module.exports = ctrl;