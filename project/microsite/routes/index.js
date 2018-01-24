var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: "ShoneSingLone's Zone" });
});
/* GET home page. */
router.get('/list', function (req, res, next) {
  let hrefs = [
    ["webpack", "dive-into-webpack"]
  ];
  res.render('list', {
    title: "ShoneSingLone's Zone",
    hrefs: JSON.stringify(hrefs)
  });
});
router.get('/screenshot', function (req, res, next) {
  res.render('upload/screenshot', { title: 'url' });
});

module.exports = router;