const path = require('path');
const express = require('express');
const uiRouter = require('../routes/ui');
const postRouter = require('../routes/posts');
const boom = require('@hapi/boom');
const { toDateString } = require('../utils/dates');

const expressLoader = async({app}) => {
  // json/form middlewares
  app.use(express.json());
  app.use(express.urlencoded({extended: false}));
  // static files
  app.use(express.static(path.join(__dirname, '../public')));
  // set locals
  app.locals.toDateString = toDateString;
  // set view engine
  app.set('view engine', 'pug');
  // set main route
  app.use('/', uiRouter);
  app.use('/api', postRouter);
  // centralized error handler
  app.use((err, req, res, next) => {
    return res.send(boom.boomify(err, {message: err, statusCode: 500}));
  });
  return app;
}

module.exports = expressLoader;