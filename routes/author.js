var express = require('express');
var router = express.Router();

router.get('/author', function(req, res, next) {
  res.send('author.jade', { title: 'Author' });
});

module.exports = router;