<template>
  <div class="container">
    <!-- <img id="img1" style="position:absolute;visibility:hidden" src="http://pic1.win4000.com/wallpaper/f/51c3bb99a21ea.jpg"> -->
    <header ref="header" :class="['header-wrapper',{'hide':isHeaderHide},{'none':isHeaderNone}]">
      <a href="javascript:void(0);" class="logo" @click="toggle"></a>
      <nav class="nav">
        <a href="javascript:void(0);" :class="['item', 'item_i_'+(index+1),currentNavItem===index?'active':'']" v-for="(navItem, index) in navItems" :key="index">{{navItem}}</a>
        <a href="javascript:void(0);" class="item item_custom_button">立即购买</a>
        <!-- <div class="item-tip" :class="[show?'left20':'']"></div> -->
      </nav>
    </header>
    <screen1 id="screen1" />
    <screen2 id="screen2" />
    <screen3 id="screen3" />
    <screen4 id="screen4" />
    <screen5 id="screen5" />
    <buy/>

    <div :class="['back',{'hide':isOutlineHide},{'none':isOutlineNone}]">
      <a href="javascript:void(0)" class="glyphicon glyphicon-arrow-up"></a>
    </div>

    <footer class=" footer ">
      © 8102 这不是网站只是些可预览的代码
    </footer>

    <div :class="[ 'outline',{ 'hide':isOutlineHide},{ 'none':isOutlineNone}] ">
      <a href="javascript:void(0); " :class="[ 'item', 'item_i_'+(index+1),currentNavItem===index? 'active': ''] " v-for="(navItem, index) in navItems " :key="index ">{{navItem}}</a>
    </div>
  </div>

</template>

<script>
import heading from './components/Heading'
import screen1 from './components/Screen1'
import screen2 from './components/Screen2'
import screen3 from './components/Screen3'
import screen4 from './components/Screen4'
import screen5 from './components/Screen5'

import _ from 'lodash'
import { mapActions, mapGetters } from 'vuex'

const buy = () =>
  import(/* webpackChunkName: "xxr.Screen5" */ './components/Buy')

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
  mounted () {
    let vm = this
    /*
    let img1 = document.getElementById('img1')
    debugger
    img1.onload = function () {
      console.log('loaded')
      img1.style.visibility = 'visible'
    }
   */
    console.log(this.$store)
    console.log(this.$route)
    let xxrDOM = {
      header: {},
      screen1: {},
      screen2: {},
      screen3: {},
      screen4: {},
      screen5: {}
    }
    function getDom (/* by ID */ domId) {
      return document.getElementById(domId)
    }
    for (const id in xxrDOM) {
      try {
        xxrDOM[id].dom = getDom(id)
        xxrDOM[id] = Object.assign(xxrDOM[id], {
          ...xxrDOM[id].dom.getBoundingClientRect()
        })
        console.log('xxrDOM["' + id + '"]', xxrDOM[id])
      } catch (error) {
        console.log(error, '\n', xxrDOM)
      }
    }
    // xxrDOM.header.top
    window.scrollTo({
      top: 2000,
      behavior: 'smooth'
    })

    // const clientHeight = window.innerHeight
    // console.log(clientHeight)
    function whenScroll (event) {
      vm.setWindowScrollY(window.scrollY)
    }
    window.onscroll = _.throttle(whenScroll, 1000 * 0.5, { trailing: true })
  },
  methods: {
    ...mapActions(['setWindowScrollY']),
    toggle () {
      this.$router.push({
        name: 'home'
      })
    },
    show (component) {
      let isHide = 'is' + component + 'Hide'
      let isNone = 'is' + component + 'None'
      // header之前为隐藏（true），转为show
      this[isNone] = false
      // 立马变为block但是opacity为0
      setTimeout(() => {
        this[isHide] = false
      }, 1)
      return this
    },
    hide (component) {
      let isHide = 'is' + component + 'Hide'
      let isNone = 'is' + component + 'None'
      // header之前为Show转为渐隐
      this[isHide] = true
      // hide过程1s，1s之后display为none
      setTimeout(() => {
        this[isNone] = true
      }, 1000 * 1)
      return this
    },
    toggleHeader () {
      if (this.isHeaderHide) {
      } else {
      }
    }
  },
  computed: {
    ...mapGetters(['windowScrollY'])
  },
  watch: {
    windowScrollY: function (newV, oldV) {
      console.log(this.$refs.header.getBoundingClientRect())
      if (this.windowScrollY <= 100) {
        if (oldV <= 100) return false
        this.show('Header').hide('Outline')
      } else {
        if (oldV > 100) return false
        this.show('Outline').hide('Header')
      }
    }
  },
  components: {
    heading,
    screen1,
    screen2,
    screen3,
    screen4,
    screen5,
    buy
  },
  data () {
    return {
      isHeaderHide: false,
      isHeaderNone: false,
      isOutlineHide: true,
      isOutlineNone: true,
      navItems: ['外观', '配置', '型号', '说明', '其他'],
      currentNavItem: 0
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('    // 在渲染该组件的对应路由被 confirm 前调用 ')
    next()
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate (to, from, next) {
    console.log('    // 在当前路由改变，但是该组件被复用时调用 ')
    next()
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave (to, from, next) {
    console.log('    // 导航离开该组件的对应路由时调用 ')
    next()
    // 可以访问组件实例 `this`
  }
}
</script>


<style lang='scss'>
@import "../../assets/bootstrap/variables";
@import "./base";

.container {
  a {
    color: #14191e;
    text-decoration: none;
    &:hover {
      color: $main-color;
    }
  }

  .header-wrapper {
    // outline: 0.25rem solid rebeccapurple;
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
    align-items: center;
    min-width: 800px;
    @include box-shadow();
    transition: all 1s;
    opacity: 1;

    &.hide {
      opacity: 0;
      transform: translateY(-100%);
    }
    &.none {
      display: none;
    }

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
      // outline: 0.25rem solid cyan;
      position: relative;
      margin-right: 0.6rem;
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
  .back {
    position: fixed;
    border-radius: 0.1rem;
    a {
      width: 2rem;
      height: 2rem;
      font-size: 2rem;
    }

    bottom: 5rem;
    right: 1rem;
    z-index: 1;
    @include box-shadow();
    box-shadow: 0px 4px 12px 0px rgba(7, 17, 27, 0.1);
    transition: all 1s;
    opacity: 1;

    &.hide {
      opacity: 0;
    }
    &.none {
      display: none;
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
    transition: all 1s;
    @include box-shadow();
    opacity: 1;

    &.hide {
      opacity: 0;
      transform: translateX(100%);
    }
    &.none {
      display: none;
    }

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