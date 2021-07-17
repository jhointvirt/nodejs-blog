const expressLoader = require("./express");
const dbLoader = require('./db')

const initLoader = async({expressApp}) => {
  const dbConnection = await dbLoader();
  console.log('Database connection successful')
  const app = await expressLoader({app: expressApp});
  console.log('Express initialized')
  return app;
}

module.exports = initLoader;