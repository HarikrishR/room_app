var express = require('express'),
router = express.Router(),
controller = require('./index');

router.post('/signUp', controller.register);
router.post('/signIn', controller.login);

module.exports = router; 