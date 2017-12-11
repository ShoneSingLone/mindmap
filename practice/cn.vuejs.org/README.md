# Copy网站使之成为可离线阅读的文件
[效果](https://shonesinglone.github.io/mindmap/practice/cn.vuejs.org/v2/guide/index.html)
- wget -r -p -np -k https://cn.vuejs.org/：获取网站静态文件
- 修改链接地址
- 代码待优雅

```js
Q.all(
    fs_readdir(rootdir)
).then((fileNameArray) => {
    fileNameArray.map((fileName, index, arr) => {
        fileName = (rootdir + "/" + fileName);
        let fileContent = fs.readFileSync(fileName, encoding = "utf-8");
        let $ = cheerio.load(fileContent);

        ["/v2", "/images", "/css", "/js"].map((val) => {
            (function (val) {
                $('[href^="' + val + '"]').map((index, ele) => {
                    let orgHref = $(ele).attr('href');
                    $(ele).attr('href', "../.." + orgHref);
                })
                $('[src^="' + val + '"]').map((index, ele) => {
                    let orgHref = $(ele).attr('src');
                    $(ele).attr('src', "../.." + orgHref);
                })
            })(val)
        });
        fileContent = $.html();
        fs.writeFileSync(fileName, fileContent, encoding = "utf-8")
    })
}).fail(function (err) {
    console.log(err);
});


```

