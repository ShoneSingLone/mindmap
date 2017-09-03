var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  express.mt.print("index.js first");
  res.render('index', { title: 'Express' });
});

module.exports = router;
