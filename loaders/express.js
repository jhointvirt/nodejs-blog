const path = require('path')
const express = require('express')

const expressLoader = async({app}) => {
  // static files
  app.use(express.static(path.join(__dirname, '../public')));
  // set view engine
  app.set('view engine', 'pug');
  // set main route
  app.get('/', (req, res, next)=>{
    return res.render('pages/index');
  });
  // GET about
  app.get('/about', (req, res) => {
    return res.render('pages/about')
  });
  // GET posts
  app.get('/posts', (req, res) => {
    return res.render('pages/posts')
  });
  // GET new-post
  app.get('/new-post', (req, res) => {
    return res.render('pages/new-post')
  });
  // GET post
  app.get('/posts/:id', (req, res) => {
    return res.render('pages/single-post')
  });
  return app;
}

module.exports = expressLoader;