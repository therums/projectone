var express = require('express');
var router = express.Router();

router.get('/signIn', function(req, res, next) {
  res.send('signIn.jade', { title: 'Sign-in' });
});

module.exports = router;
