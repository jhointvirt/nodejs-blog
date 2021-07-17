const express = require('express');
const router = express.Router();
uiController = require('../controllers/ui')

// get main page
router.get('/', uiController.main);
// GET about
router.get('/about', uiController.about);
// GET posts
router.get('/posts', uiController.posts);
// GET new-post
router.get('/new-post', uiController.newPost);
// GET post
router.get('/posts/:id', uiController.singlePost);

module.exports = router;