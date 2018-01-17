var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/getscreenshot', function (req, res, next) {
  res.render('upload/screenshot', { title: 'url' });
});
router.post('/upload', function (req, res, next) {
  res.render('upload/upload', { title: 'upload', args: JSON.stringify(req.body) });
});;

module.exports = router;