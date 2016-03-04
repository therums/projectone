var express = require('express');
var router = express.Router();

router.get('/ternary', function(req, res, next) {
  res.send('ternary.jade', { title: 'Ternary' });
});

module.exports = router;