const router = require('express').Router();
const controllers = require('../controllers');

router.post('/login', controllers.users.login);
router.post('/signup', controllers.users.signup);

module.exports = router;