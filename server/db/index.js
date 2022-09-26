const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true  })
  .then(() => {
    console.log(`Connecting to ${process.env.DB_NAME}`)
  })
  .catch(() => {
    console.log('Failed to connect to database')
  })

const db = mongoose.connection;

module.exports = db;