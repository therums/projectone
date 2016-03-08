var express = require('express');
var router = express.Router();

router.get('/blog', function(req, res, next) {
  res.send('blog.jade', { title: 'Blog' });
});

router.get('/viewBlog', function(req, res, next) {
  res.send('viewB.jade', { title: 'View Blog' });
});

//  need post to make blog entry
module.exports = router;
