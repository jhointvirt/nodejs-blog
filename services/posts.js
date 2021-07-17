const { getLatestPosts } = require('../db/post');
const postDbService = require('../db/post');

module.exports = {
  create: async(post) => {
    try {
      return postDbService.create(post);
    } catch (error) {
      throw new Error(e);
    }
  },

  getLatestPosts: async(qty) =>{
    try {
      return postDbService.getLatestPosts(qty);
    } catch (error) {
      throw new Error(e);
    }
  },

  getPostById: async(id) => {
    try {
      return postDbService.getPostById(id);
    } catch (error) {
      throw new Error(e);
    }
  }
}