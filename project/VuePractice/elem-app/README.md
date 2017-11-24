# vue-elem-app
[HomePage](https://shonesinglone.github.io/mindmap/project/VuePractice/vue-elem-app/dist/#/)

> A Vue.js project

[webpack-dev-server](./node_modules/webpack-dev-server/lib/Server.js)

## 参考资料
[Vue.js仿eleme项目](http://cdn2.jianshu.io/nb/16059770)

[单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)

scoped :HTML5-如果使用该属性，则样式仅仅应用到 style 元素的父元素及其子元素

# 组件开发就近原则
- 方便开发维护


[webpack-merge](https://www.npmjs.com/package/webpack-merge)

npm node-sass sass-loader

npm install node-sass sass-loader --save-dev

#### 踩过的坑
- router
    1. children 使用的是数组 []
    2. children 在parent里要有`<router-view>`
```js
const router = new VueRouter({
    routes: [
    {
      path: '/news',
      name: 'news',
      component: News,
      children: [
        {
          path: ':id',
          name: 'newsitem',
          component: Newsitem,
        }
      ]
    }
  ]
});
```
[Vue中SASS如何全局使用变量，mixin，或者function？](https://hopkinson.github.io/2017/06/30/Vue中SASS如何全局使用变量，mixin，或者function/)

### 服务器
- static.js
[Node.js静态文件服务器实战](http://www.infoq.com/cn/news/2011/11/tyq-nodejs-static-file-server)
[node.js 一个简单的页面输出](http://www.cnblogs.com/rubylouvre/archive/2011/11/20/2255083.html)#### 踩过的坑
- router
    1. children 使用的是数组 []
    2. children 在parent里要有`<router-view>`
```js
const router = new VueRouter({
    routes: [
    {
      path: '/news',
      name: 'news',
      component: News,
      children: [
        {
          path: ':id',
          name: 'newsitem',
          component: Newsitem,
        }
      ]
    }
  ]
});
```

### 服务器
- server.js
用于运行build之后的页面
npm run start:p
[Node.js静态文件服务器实战](http://www.infoq.com/cn/news/2011/11/tyq-nodejs-static-file-server)
[node.js 一个简单的页面输出](http://www.cnblogs.com/rubylouvre/archive/2011/11/20/2255083.html)


###


## 4.2
[设备像素比devicePixelRatio简单介绍](http://www.zhangxinxu.com/wordpress/2012/08/window-devicepixelratio/)
dpi
svg

## 4.3 
制作SVG图片
[图标字体文件的制作](http://icomoon.io)
Font Name:生成字体的名称

# 目录结构
elem-app
├── build
|  ├── build.js
|  ├── check-versions.js
|  ├── logo.png
|  ├── utils.js
|  ├── vue-loader.conf.js
|  ├── webpack.base.conf.js
|  ├── webpack.dev.conf.js
|  ├── webpack.prod.conf.js
|  └── webpack.test.conf.js
├── config
|  ├── dev.env.js
|  ├── index.js
|  └── prod.env.js
├── dist
|  ├── server.js//自己用于运行dist文件的node服务器
|  └── static//.gitkeep.js（作用：使static不为空，能存放到git）。
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── src
|  ├── App.vue
|  ├── assets
|  ├── common
|  ├── components
|  ├── main.js
|  └── router
└── static

## 挖坑
- 发送请求时的权限
- eslint的使用，关键在于编辑器自动格式化会不会冲突，如果有该如何解决？
eslint-disable no-new