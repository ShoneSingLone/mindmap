<template>
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

<style lang='scss' scoped >
</style >