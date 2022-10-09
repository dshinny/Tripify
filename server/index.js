const express = require('express');
const session = require('express-session');
const path = require('path');
const db = require('./db');
const router = require('./routes');
require('dotenv').config();

const app = express();
app.use(express.static(path.join(__dirname, '../client/public')));
app.use(express.json());
app.use(session({ secret: 'secret' }))

app.use('/', router.users);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});