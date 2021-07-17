const PostModel = require('../models/post');

const obj = {

};

obj.create = async (post) => {
  try {
    return await PostModel.create(post)
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = obj