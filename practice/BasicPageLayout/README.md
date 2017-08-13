>**腻子脚本（polyfill）:**指的是一段JavaScript 代码，能够赋予浏览器未曾有过的功能。目前，几乎所有CSS3 和HTML5 功能都有各自对应的腻子脚本，包括视频回放和阴影，从而让那些老得走不动道儿的“老家伙”们也能闪现青春的光芒。
polyfill指的是一段代码，它能实现期望最终由浏览器自身实现的功能。如果浏览器本身已经实现了该功能，则polyfill什么都不做。否则，它模拟其实现而不依赖API。

>**ySlow:**[性能测试工具](http://yslow.org/)

# 布局的基本方式
- 固定宽度
- 流动
- 弹性

# 对待宽与高的不同
- 精细控制宽度；
- 容器的高度应该将内里元素包含；

## [三栏——固定宽度布局](ThreeColumnFixedWidthLayout.html)

- 设定宽度、使用浮动
- **注意**盒子的宽度是多少 
	- 外边距、边框、内边距、添加大图片或者没有空格的长字符串
### 盒子模型
^[《CSS设计指南》p74]。

- 使用`div[class="inner"]`
	- 在wrapper内部使用空`div`将wrapper与content分开
- 调整元素width
	- [box-sizing](http://zh.learnlayout.com/box-sizing.html)
	- [box-sizing MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)

```
* {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}
```
- 预防过大的元素
	- 使用子-星选择`{max-width:100%;}`
- 长单词
	- `{word-wrap:break-word;}`
## [三栏-中栏流动布局]()

- 负外边距
- [css中width:auto和width:100%的区别](http://m.studyofnet.com/news/965.html)
- [CSS 布局十八般武艺都在这里了](./doc/CSSlayout.mht)
