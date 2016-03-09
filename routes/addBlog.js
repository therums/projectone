var express = require('express');
var router = express.Router();

router.get('/addBlog', function(req, res, next) {
  res.send('addBlog.jade', { title: 'Add Blog' });
});

//  need post to make blog entry
module.exports = router;
