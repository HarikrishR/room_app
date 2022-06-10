var express = require('express'),
router = express.Router();

router.use(require('../modules/users/routes'));

module.exports = router;