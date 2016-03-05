var express = require('express');
var router = express.Router();

router.get('/blog', function(req, res, next) {
  res.send('blog.jade', { title: 'Blog' });
});

module.exports = router;
