const path = require('path')
const express = require('express')
const uiRouter = require('../routes/ui')

const expressLoader = async({app}) => {
  // static files
  app.use(express.static(path.join(__dirname, '../public')));
  // set view engine
  app.set('view engine', 'pug');
  // set main route
  app.use('/', uiRouter);
  return app;
}

module.exports = expressLoader;