# shop

![shophomepage](./modules/static/shophomepage.gif)
一个商城项目，基于Vue技术栈。

移动端、PC端。
注册、登录、支付。

产品概览页的nav与outline有竟态问题待解决（挖坑）

价格升降序 过滤 分页

- [] 任务清单
- [] 搭建静态页面
- [] 焦点图和分割栏
- [] 商品栏（Hard Code 实现）
- [] 商品栏（循环实现）
- [] 配置服务器和搭建数据库
- [] 服务器配置
- [] 图片上传和数据库初始化
- [] 设计 API 接口
- [] 路由
- [] 控制器
- [] API 数据请求和呈现
- [] API 请求数据
- [] 搭建商品详情页面
- [] 静态页面构建
- [] API 请求完成数据更新

## 记录

不要过度设计：
普通的页面：结构 样式 交互

`<style lang='scss' scoped>`
因为是单页应用，scope的影响就很关键了。主要是把类似reset，全局通用的样式放在app component（root）中（比如Bootstrap Base），而variables和mixin就在需要的组件里各自引用即可。

icon的设置方法
居中
定位

- 如果同一页面有可复用代码，首选v-for

### scrollspy

滑动页面，变换heading

测试脚本

动画的本质是时间片。
transition有init初始状态和done完成状态两个时间帧。done state跟静态页面的最终效果是一致的。所以开发流程最好就是首先完成静态页面的效果，再写初识状态，再改写成动画。

### 流程

初始init状态
滑动到相应的screen，动画才开始（去掉init class）
导航 大纲 双向定位
导航滑动条

onload
onscroll
onclick

scrollTop

### 商品列表基础组件拆分

- 复用

头部
导航
面包屑

vue lazy load