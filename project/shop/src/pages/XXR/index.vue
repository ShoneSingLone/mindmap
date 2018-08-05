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

    <section class="screen-1">
      <div class="screen-1__wrap">
        <div class="screen-1__heading">
          <b>慕课手机</b> 让你的生活更精彩</div>
      </div>
      <div class="screen-1__phone"></div>
      <div class="screen-1__shadow"></div>
    </section>

    <section class="screen-2">
      <div class="screen-2__wrap">
        <div class="screen-2__heading">优美的设计，更令人着迷</div>
        <div class="screen-2__subheading">
          <p>采用受欢迎的设计，让它更加出色。</p>
          <p>款式小巧、轻便手感更舒适。绚丽高清的显示屏，整个外观显得格外精致。</p>
        </div>
        <div class="screen-2__phone">
          <p class="screen-2__point screen-2__point_i_1">高清摄像</p>
          <p class="screen-2__point screen-2__point_i_2">超薄机身</p>
          <p class="screen-2__point screen-2__point_i_3">大屏显示</p>
        </div>
      </div>
    </section>

    <section class="screen-3">
      <div class="screen-3__wrap">
        <div class="screen-3__heading">外形小巧，功能强大的手机</div>
        <div class="screen-3__subheading">
          <p>采用受欢迎的设计，让它更加出色。</p>
          <p>款式小巧、轻便手感更舒适。绚丽高清的显示屏，整个外观显得格外精致。</p>
        </div>
        <div class="screen-3__phone"></div>
        <div class="screen-3__features">
          <div class="screen-3__features-item">
            <span class="screen-3__features-item-number screen-3__features-item_i_1">
              5.7
            </span>英寸大屏
          </div>
          <div class="screen-3__features-item">
            <span class="screen-3__features-item-number screen-3__features-item_i_2">
              1200
            </span>万像素
          </div>
          <div class="screen-3__features-item">
            <span class="screen-3__features-item-number screen-3__features-item_i_3">
              3D
            </span>touch
          </div>
          <div class="screen-3__features-item">
            <span class="screen-3__features-item-number screen-3__features-item_i_4">
              A9
            </span>处理器
          </div>
        </div>
      </div>
    </section>

    <section class="screen-5">

      <div class="screen-5__wrap">
        <p class="screen-5__heading">游戏、学习、拍照、有这一部就够了</p>
        <p class="screen-5__subheading">看视频、拍摄高清视频与照片、视频聊天、一机多功能，让您生活更丰富精彩。</p>
      </div>

      <div class="screen-5__back">
      </div>

    </section>

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
export default {
  name: 'xxr',
  mounted () {},
  methods: {
    toggle () {
      this.show = !this.show
    }
  },
  computed: {},
  components: {},
  data () {
    return { show: true }
  }
}
</script>

<style lang='scss' scoped src="./style.scss">
</style >