const mongoose = require('mongoose');
DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017:/myproject';

const dbLoader = async() => {
  const connection = await mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});
  return connection.connection.db;
}

module.exports = dbLoader;