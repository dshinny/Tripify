const User = require('../models/').User;
const bcrypt = require('bcrypt');

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    const validPassword = await bcrypt.compare(password, user.password)
    if (validPassword) {
      req.session.user_id = user._id;
      res.send(user)
    } else {
      res.status(404).end('Incorrect email or password');
    }
  } else {
    res.status(404).end('Incorrect email or password');
  }
}

const signup = async (req, res) => {
  const { first, last, email, password } = req.body;
  const userExists = await User.find({ email });
  if (password.length === 0) {
    res.status(404).end('Password required')
  }
  if (userExists.length === 0) {
    const hash = await bcrypt.hash(password, 10);
    const user = new User({
      first,
      last,
      email,
      password: hash
    })
    await user.save();
    req.session.user_id = user._id;
    res.send(user)
  } else {
    res.status(404).end('Email already registered')
  }
}

module.exports = {
  login,
  signup
}