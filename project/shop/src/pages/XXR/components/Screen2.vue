<template>
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