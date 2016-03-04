var express = require('express');
var router = express.Router();

router.get('/contact', function(req, res, next) {
  res.send('contact.jade', { title: 'Contact' });
});

module.exports = router;