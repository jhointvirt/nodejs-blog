const path = require('path');
const express = require('express');
const uiRouter = require('../routes/ui');
const postRouter = require('../routes/posts');

const expressLoader = async({app}) => {
  // json/form middlewares
  app.use(express.json());
  app.use(express.urlencoded({extended: false}));
  // static files
  app.use(express.static(path.join(__dirname, '../public')));
  // set view engine
  app.set('view engine', 'pug');
  // set main route
  app.use('/', uiRouter);
  app.use('/api', postRouter);
  return app;
}

module.exports = expressLoader;