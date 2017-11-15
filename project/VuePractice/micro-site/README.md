# micro-site

> A Vue.js project

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