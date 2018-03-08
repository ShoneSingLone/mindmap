# vue-elem-app
[HomePage](https://shonesinglone.github.io/mindmap/project/VuePractice/elem-app/dist)

> A Vue.js project

[webpack-dev-server](./node_modules/webpack-dev-server/lib/Server.js)

## 参考资料
[Vue.js仿eleme项目](http://cdn2.jianshu.io/nb/16059770)

[eslint-semi](https://eslint.org/docs/rules/semi)

[单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)

scoped :HTML5-如果使用该属性，则样式仅仅应用到 style 元素的父元素及其子元素

使用媒体查询切换背景

组件开发就近原则
- 方便开发维护


vue init webpack 

[webpack-merge](https://www.npmjs.com/package/webpack-merge)

npm node-sass sass-loader

npm install node-sass sass-loader --save-dev

[Vue中SASS如何全局使用变量，mixin，或者function？](https://hopkinson.github.io/2017/06/30/Vue中SASS如何全局使用变量，mixin，或者function/)


[Vue插件](https://cn.vuejs.org/v2/guide/plugins.html)
[axios](https://github.com/axios/axios)
[axios和网络传输相关知识的学习实践](http://www.jianshu.com/p/8e5fb763c3d7)
[vue-axios](https://www.npmjs.com/package/vue-axios)

[leancloud rest api](https://leancloud.cn/docs/rest_api.html)

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

- ```
//放在Created里如何？
const SUPPORTS_TYPE = {
  0: "decrease",
  1: "discount",
  2: "special",
  3: "invoice",
  4: "guarantee"
};
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

## 5

点击事件有一点问题，需要再调试一下

[better-scroll zh](https://ustbhuangyi.github.io/better-scroll/#/zh)

[better-scroll](https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/#better-scroll %E6%98%AF%E4%BB%80%E4%B9%88)

原理：父窗口固定大小，变换子元素——所以父元素要确定才行。省去div直接用ul作父容器不可取。

- $nextTick

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

```js
<script type=text/javascript src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

  <script>
    $(function () {
      if (self != top) {

        function PutToLeanCloud(dataName, dataContents) {
          var data4post = {
            "data_name": dataName,
            //使data_contents为Object，leanCloud，Array与Object类型不一致无法存储：以JSON字符串传入会被解析为JSON对象。
            "data_contents": {
              0: dataContents
            }
          };
          data4post = JSON.stringify(data4post);
          return {
            type: "post",
            headers: {
              "X-LC-Id": "III",
              "X-LC-Key": "***",
              "Content-Type": "application/json"
            },
            url: "***",
            data: data4post,
            dataType: "json",
            error: function (XHR, textStatus, errorThrown) {
              console.log("XHR=" + JSON.stringify(XHR) + "\ntextStatus=" + textStatus + "\nerrorThrown=" +
                errorThrown);
            },
            success: function (data, textStatus) {
              console.log(data);
            },
            complete: function (jqXHR, textStatus) {
              console.log(jqXHR);
            }
          }
        }

        function GetJsonData(jsonDataName) {

          return {
            type: "get",
            url: "http://***/" + jsonDataName,
            dataType: "json",
            error: function (XHR, textStatus, errorThrown) {
              $("body").prepend("XHR=" + JSON.stringify(XHR) + "\ntextStatus=" + textStatus + "\nerrorThrown=" +
                errorThrown);
            },
            success: function (data, textStatus) {
              $.ajax(new PutToLeanCloud(jsonDataName, data));
            }
          };
        }
        $.ajax(new GetJsonData("seller"));
        $.ajax(new GetJsonData("goods"));
        $.ajax(new GetJsonData("ratings"));
      }
    })

  </script>
  ```




### 背景图片和标签
  绝对定位
   


## 挖坑
- 发送请求时的权限
- eslint的使用，关键在于编辑器自动格式化会不会冲突，如果有该如何解决？
- eslint-disable no-new
- text-overflow: ellipsis;[文本溢出 省略号](http://www.zhangxinxu.com/wordpress/2009/09/%E5%85%B3%E4%BA%8E%E6%96%87%E5%AD%97%E5%86%85%E5%AE%B9%E6%BA%A2%E5%87%BA%E7%94%A8%E7%82%B9%E7%82%B9%E7%82%B9-%E7%9C%81%E7%95%A5%E5%8F%B7%E8%A1%A8%E7%A4%BA/)
- white-space: nowrap;
- rem 
- flex
- [sticky-footers](https://www.w3cplus.com/css3/css-secrets/sticky-footers.html)
- filter: blur(10px);
- -webkit-min-device-pixel-ratio: $mdpr, $tran这些个东西
- transition
- Vue 过渡
- BFC
- [line-height作用是用的地方](http://www.zhangxinxu.com/wordpress/2009/11/css%E8%A1%8C%E9%AB%98line-height%E7%9A%84%E4%B8%80%E4%BA%9B%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E5%8F%8A%E5%BA%94%E7%94%A8/)
- clientHeight
- box-shadow: 
- padding-top width 相对于父容器的宽度则100%可称为三等分样式
- "..."____width: 100%; overflow: hidden; text-overflow: ellipsis;
- line-height对布局的影响？


##Goods
### 详情
### 购物车
### 两栏布局 分类
flex 布局固定和自适应
dispaly :table

Node Sass could not find a binding for your current environment: Windows 64-bit with Node.js 9.x

Found bindings for the following environments:
  - Windows 64-bit with Node.js 8.x

  简单粗暴——删除package-lock.json,重新install node_modules
  
  - 本地缓存user 对象信息 收藏状态
    - 用户id作为用户的key
      - id从url中get
        - urlParse
    - localStorage

    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>

    router-view和router-link


router 
路径：
path query
命名路由：
name params