var express = require('express');
var router = express.Router();

router.get('/happiness', function(req, res, next) {
  res.send('happiness.jade', { title: 'Happiness' });
});

module.exports = router;