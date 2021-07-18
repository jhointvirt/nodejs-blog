const postService = require('../services/posts');
let ctrl = {};

ctrl.create = async (req, res) => {
  const post = req.body;
  try {
    const result = await postService.create(post);
    return res.status(201).json(result);
  } catch (error) {
    return next(e);
  }
}

ctrl.delete = async(req, res) => {
  try {
    const {id} = req.params;
    const result = await postService.deletePostById(id);
    return res.status(204).json(result);
  } catch (error) {
    return next(e);
  }
}

module.exports = ctrl;