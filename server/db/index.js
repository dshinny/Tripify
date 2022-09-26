const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb://localhost/${process.env.DATABASE}`, { useNewUrlParser: true, useUnifiedTopology: true  })
  .then(() => {
    console.log(`Connecting to ${process.env.DATABASE}`)
  })
  .catch(() => {
    console.log('Failed to connect to database')
  })

const db = mongoose.connection;

module.exports = db;