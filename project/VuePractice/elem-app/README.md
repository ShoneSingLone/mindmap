# vue-elem-app
[HomePage](https://shonesinglone.github.io/mindmap/project/VuePractice/vue-elem-app/dist/#/)

> A Vue.js project

[webpack-dev-server](./node_modules/webpack-dev-server/lib/Server.js)

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
- static.js
用于运行build之后的页面
npm start
[Node.js静态文件服务器实战](http://www.infoq.com/cn/news/2011/11/tyq-nodejs-static-file-server)
[node.js 一个简单的页面输出](http://www.cnblogs.com/rubylouvre/archive/2011/11/20/2255083.html)


###


## 4.2
[设备像素比devicePixelRatio简单介绍](http://www.zhangxinxu.com/wordpress/2012/08/window-devicepixelratio/)
dpi
svg

## 4.3 
[图标字体文件的制作](http://icomoon.io)
Font Name:生成字体的名称

# 目录结构
src-

├─assets
├─components
│  └─header
└─router

## 挖坑
发送请求时的权限