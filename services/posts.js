const postDbService = require('../db/post');

module.exports = {
  create: async(post) => {
    try {
      return postDbService.create(post);
    } catch (error) {
      throw new Error(e);
    }
  }
}