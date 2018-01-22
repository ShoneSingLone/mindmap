# phantomjs sample

[phantomjs API](https://www.2cto.com/kf/201708/669140.html)
[/phantomjs-node](https://github.com/amir20/phantomjs-node=)
```
const phantom = require('phantom');

(async function() {
  const instance = await phantom.create();
  const page = await instance.createPage();
  await page.on('onResourceRequested', function(requestData) {
    console.info('Requesting', requestData.url);
  });

  const status = await page.open('https://stackoverflow.com/');
  const content = await page.property('content');
  console.log(content);

  await instance.exit();
})();

```
[Nodejs基础：巧用string_decoder将buffer转成string](http://imweb.io/topic/5963a1fce5017dd2121d2c1b)
[String Decoder 的用途](http://www.bijishequ.com/detail/530931?p=)
[NodeJS返回json数据](http://www.cnblogs.com/mq0036/p/5261784.html=)
[url的三个js编码函数escape(),encodeURI(),encodeURIComponent()简介](http://www.haorooms.com/post/js_escape_encodeURIComponent=)