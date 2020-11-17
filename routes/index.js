var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Node + Express", description: 'Act and think. It is a perrenial joy to bring an idea to life.' });
});

module.exports = router;
