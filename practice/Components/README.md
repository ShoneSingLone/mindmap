### overflow的作用
![overflow对float元素的影响](./doc/overflowhidden.png)
- [清除浮动](http://nicolasgallagher.com/micro-clearfix-hack/)
- [Why does overflow hidden stop floating elements escaping their container?](https://stackoverflow.com/questions/9193214/why-does-overflow-hidden-stop-floating-elements-escaping-their-container)
- [理解CSS中的块级格式化上下文](http://web.jobbole.com/83149/)
`overflow: hidden`只是创建BFC的方式之一，比较常用。
- `display: table` 可能引发响应性问题
- `overflow: scroll` 可能产生多余的滚动条
- `float: left` 将把元素移至左侧，并被其他元素环绕
- `overflow: hidden` 将裁切溢出元素

### CSS的分离原则
- 视觉样式控制外观
	- 
	```
	/*添加视觉样式*/
	
	#drop-menu {
	    font: 1em helvetica, arial, sans-serif;
	}
	
	#drop-menu a {
	    display: block;
	    color: #555;
	    background-color: #eee;
	    padding: .2em 1em;
	    border-width: 3px;
	    border-color: transparent;
	}
	
	#drop-menu a:hover {
	    color: #fff;
	    background-color: #aaa;
	}
	
	#drop-menu a:active {
	    background: #fff;
	    color: #ccc;
	}
	```
- 功能样式控制布局和行为
	- [Transparent Borders with background-clip](https://css-tricks.com/transparent-borders-with-background-clip/)
- `ul` `li` 定义menu的基本结构
- `a` 使用 `display:block` 填充整个容器已达到`point`变化的效果。
- 使用 `float:left` 替代 `overflow:hidden` 是为了解决因使用`overflow`下级元素会被隐藏
- 

### 悬停时的显示
> 如何保持显示？
	如何才能不影响其他的元素？
