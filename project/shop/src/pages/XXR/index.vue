<template>
  <div class="container">
    <header class="header">
      <a href="#screen-1" class="logo" @click="toggle"></a>
      <nav class="nav">
        <a href="javascript:void(0);" class="item item_i_1 active">外观</a>
        <a href="javascript:void(0);" class="item item_i_2">配置</a>
        <a href="javascript:void(0);" class="item item_i_3">型号</a>
        <a href="javascript:void(0);" class="item item_i_4">说明</a>
        <a href="javascript:void(0);" class="item item_i_5">其他产品</a>
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
      <a href="javascript:void(0);" class="outline__item outline__item_i_1">外观</a>
      <a href="javascript:void(0);" class="outline__item outline__item_i_2">配置</a>
      <a href="javascript:void(0);" class="outline__item outline__item_i_3">型号</a>
      <a href="javascript:void(0);" class="outline__item outline__item_i_4">说明</a>
      <a href="javascript:void(0);" class="outline__item outline__item_i_5">其他</a>
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
  mounted () {},
  methods: {
    toggle () {
      this.show = !this.show
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
    return { show: true }
  }
}
</script>

<style lang='scss' scoped src="./style.scss">
</style >