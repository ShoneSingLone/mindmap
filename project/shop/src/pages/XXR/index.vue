<template>
  <div class="container">
    <header class="header-wrapper">
      <a href="#screen-1" class="logo" @click="toggle"></a>
      <nav class="nav">
        <a href="javascript:void(0);" :class="['item', 'item_i_'+(index+1),currentNavItem===index?'active':'']" v-for="(navItem, index) in navItems" :key="index">{{navItem}}</a>
        <a href="javascript:void(0);" class="item item_custom_button">立即购买</a>
        <div class="item-tip" :class="[show?'left20':'']"></div>
      </nav>
    </header>

    <screen1/>
    <screen2/>
    <screen3/>
    <!-- 
    <screen4/>
    <screen5/> 

    <section class="buy">
      <a href="#" class="buy__button">立即购买</a>
    </section>

    <footer class="footer">
      © 2016 imooc.com 京ICP备13046642号
    </footer>

    <div class="outline">
      <a href="javascript:void(0);" :class="['outline__item', 'outline__item_i_'+(index+1),currentNavItem===index?'active':'']" v-for="(navItem, index) in navItems" :key="index">{{navItem}}</a>
    </div>-->
  </div>

</template>

<script>
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
      this.$router.push({
        name: 'home'
      })
    }
  },
  computed: {},
  components: {
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


<style lang='scss' scoped>
@import "../../assets/bootstrap/variables";
@import "../../assets/bootstrap/base";

a {
  color: #14191e;
  text-decoration: none;
  &:hover {
    color: $main-color;
  }
}
.header-wrapper {
  // outline: 3px solid rebeccapurple;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 2;
  height: 4rem;
  background-color: #fafafa;
  color: #292e35;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  // justify-content: flex-start;
  align-items: center;
  min-width: 800px;
  @include box-shadow();

  .logo {
    height: 40px;
    width: 40px;
    margin-left: 1.5rem;
    background: url("./img/logo.png") center center no-repeat;
    background-color: $main-color;
    display: block;
    font-size: 18px;
    line-height: 40px;
  }

  .nav {
    // outline: 3px solid cyan;
    position: relative;
    margin-right: 10px;
    .item {
      padding: 0 0.75rem;
      font-size: 14px;
      display: inline-block;
      width: 60px;
      text-align: center;
      line-height: 40px;
      &:hover {
        color: $main-color;
      }
    }

    .item_custom_button {
      color: #fff;
      background: $main-color;
      width: 4rem;
      margin: 0 1.5rem;
      border-radius: 0.25rem;
      &:hover {
        color: #fff;
        background: darken($main-color, 10%);
      }
    }
    .item-tip {
      position: absolute;
      width: 60px;
      height: 2px;
      background: red;
      left: 20px;
      bottom: -2px;
      transition: all 2s;
      &.left20 {
        left: 2rem;
        transition: all 2s ease-in;
        width: 2rem;
      }
    }
  }
  .active {
    color: $main-color;
  }
}
</style >