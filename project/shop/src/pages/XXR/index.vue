<template>
  <div class="container">
    <header class="header">
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
    </div>
  </div>

</template>

<script>
import screen1 from './components/Screen1'
import screen2 from './components/Screen2'
import screen3 from './components/Screen3'
import screen4 from './components/Screen4'
import screen5 from './components/Screen5'

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

<style lang='scss' scoped src="./style.scss">
</style >