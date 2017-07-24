### 抹平
1. [normalize.css](https://necolas.github.io/normalize.css/)
    1. [来，让我们谈一谈 Normalize.css](http://jerryzou.com/posts/aboutNormalizeCss/)

### 网格的对齐
1.去掉所有的内边距、外边距
```
    * {
        margin: 0;
        padding: 0;
    }
```

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
1. 通过padding调整元素位置