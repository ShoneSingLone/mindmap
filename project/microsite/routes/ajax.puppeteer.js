var express = require('express');
var router = express.Router();
const cors = require('cors');
const _ = require('lodash');
const ps = require('current-processes');
const moment = require('moment');
const puppeteer = require('puppeteer');

router.use(cors());

router.get('/', function (req, res, next) {
  let str = moment().format("ddddMMMMYYYYhmmssa").toString().trim();
  res.json({ data: str });
});

router.get('/screenshot', function (req, res, next) {

  try {
    (async () => {
      const pngName = moment().format("ddddMMMMYYYYhmmssa").toString().trim();
      const path = '/screenshot/' + pngName + '.png';
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      const url = req.body.url || "https://www.baidu.com";
      await page.goto(url);
      await page.screenshot({
        path: 'public' + path
      });
      await browser.close();
      return res.json({ "rel": true, path });
    })();
  } catch (error) {
    return res.json({ "rel": false, error })
  }
});




router.post('/screenshot', function (req, res, next) {
  try {
    (async () => {
      const pngName = moment().format("YYYYMMMDDDDhhmmssa").toString().trim();
      const path = '/screenshot/' + pngName + '.png';
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      const url = req.body.url || "https://www.baidu.com";
      await page.goto(url);
      await page.screenshot({
        path: 'public' + path
      });
      browser.close();
      await res.json({ "rel": true, path });
    })();
  } catch (error) {
    return res.json({ "rel": false, error })
  }
});

/* router.get('/platform-info', function (req, res, next) {
  let param = req.query || req.params;

  {
    let rData = "",
      result = {
        code: '-200',
        msg: false,
        rData: rData
      },
      param = req.query || req.params;

    setTimeout(() => {
      ps.get((err, processes) => {
        var sorted = _.sortBy(processes, 'cpu');
        var rData = sorted.reverse().splice(0, 5);

        if (rData) {
          result.code = "200";
          result.msg = true;
          result.rData = rData;
        };
        res.json(result);
      });
    }, 1);

  }
}); */


module.exports = router;
