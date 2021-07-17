const postService = require('../services/posts');
let ctrl = {};

ctrl.create = async (req, res) => {
  const post = req.body;
  try {
    const result = await postService.create(post);
    return res.status(201).json(result);
  } catch (error) {
    return next(e.message);
  }
  
} 

module.exports = ctrl;