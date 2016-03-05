var express = require('express');
var router = express.Router();

router.get('/study', function(req, res, next) {
  res.send('study.jade', { title: 'Study' });
});

module.exports = router;
