<template>
  <div class="container">
    <heading :navItems="navItems" :currentNavItem="currentNavItem" />
    <screen1/>
    <screen2/>
    <screen3/>
    <screen4/>
    <screen5/>

    <section class="buy">
      <a href="#" class="button">立即购买</a>
    </section>

    <div class="back">

    </div>
    <footer class="footer">
      © 2016 imooc.com 京ICP备13046642号
    </footer>

    <div class="outline">
      <a href="javascript:void(0);" :class="['item', 'item_i_'+(index+1),currentNavItem===index?'active':'']" v-for="(navItem, index) in navItems" :key="index">{{navItem}}</a>
    </div>
  </div>

</template>

<script>
import heading from './components/Heading'
import screen1 from './components/Screen1'
import screen2 from './components/Screen2'
const screen3 = () =>
  import(/* webpackChunkName: "xxr.Screen3" */ './components/Screen3')
const screen4 = () =>
  import(/* webpackChunkName: "xxr.Screen4" */ './components/Screen4')
const screen5 = () =>
  import(/* webpackChunkName: "xxr.Screen5" */ './components/Screen5')

export default {
  name: 'xxr',
  metaInfo: {
    title: '产品概览', // set a title
    meta: [
      {
        // set meta
        name: 'keyWords',
        content: 'XXR不明说是什么，全靠页面，所见即所得'
      }
    ]
  },
  mounted () {},
  methods: {
    toggle () {
      this.show = !this.show
    }
  },
  computed: {},
  components: {
    heading,
    screen1,
    screen2,
    screen3,
    screen4,
    screen5
  },
  data () {
    return {
      show: true,
      navItems: ['外观', '配置', '型号', '说明', '其他'],
      currentNavItem: 0
    }
  }
}
</script>


<style lang='scss'>
@import "../../assets/bootstrap/variables";

.container {
  a {
    color: #14191e;
    text-decoration: none;
    &:hover {
      color: $main-color;
    }
  }
  .buy {
    height: 5rem;
    padding: 120px 0px;
    background: url(./img/bg-screen-buy.png) no-repeat bottom center #2b333b;
    .button {
      width: 15rem;
      height: 5rem;
      line-height: 5rem;
      text-align: center;
      font-size: 1.5rem;
      color: #fff;
      border-radius: 0.25rem;
      margin: 0px auto;
      display: block;
      background-color: #f01414;
      transition: all 0.5s;
      &:hover {
        box-shadow: 0 0.6rem 0.6rem rgba(0, 0, 0, 0.5);
        transform: translate(0, -5px);
      }
    }
  }

  .footer {
    // outline: 1rem solid #fff;
    height: 5rem;
    line-height: 5rem;
    background-color: #07111b;
    text-align: center;
    color: #fff;
  }

  .outline {
    position: fixed;
    padding: 5px 0.6rem;
    bottom: 120px;
    right: 0;
    z-index: 1;
    background-color: #fff;
    box-shadow: 0px 4px 12px 0px rgba(7, 17, 27, 0.1);
    .item {
      display: block;
      width: 40px;
      height: 30px;
      line-height: 30px;
      padding: 5px 0;
      background: rgb(255, 255, 255);
      margin: 5px 0px 0px;
      border-top: 1px solid #eee;
      text-align: center;
      color: #93999f;
      &:first-child {
        border: none;
      }
      &.active {
        color: $main-color;
      }
    }
  }
}
</style >