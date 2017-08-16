### 抹平
1. [normalize.css](https://necolas.github.io/normalize.css/)
    1. [来，让我们谈一谈 Normalize.css](http://jerryzou.com/posts/aboutNormalizeCss/)
1. 去掉所有的内边距、外边距
    ```
        * {
            margin: 0;
            padding: 0;
        }
    ```
1. 像`h*`都有自己默认的样式，为了方便控制，需要初始化initialization
    ```
    /*标题周围的空白*/
    h1, h2, h3, h4, h5, h6 {line-height:1.15em; margin-bottom:.1em;}
    /*文本元素周围的空白*/
    p, ul, blockquote {line-height:1.15em; margin-bottom:.75em;}
    /*缩进列表*/
    ul {margin-left:32px;}
    ```
>[如何正确使用h1 h2 h3](http://southerncross.github.io/2016/02/14/how-to-use-h1-h2-h3/)

### 制作段落首字下沉效果
1. 字体、大小、行高、浮动
**盒子模型**
```
    h1 + p:first-letter {
        font-family: Times, serif;
        font-size: 90px;
        line-height: .65;
        float: left;
        border: 1px solid;
    }
    /** border用于展示元素实际的边框 **/
```
1. 通过padding使元素与基线对齐