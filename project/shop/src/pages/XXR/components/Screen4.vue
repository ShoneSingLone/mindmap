<template>

  <section class="screen-4">
    <div class="screen-4__wrap">
      <div class="screen-4__heading">丰富的手机型号</div>
      <div class="screen-4__subheading">找到适合你的手机</div>
      <div class="screen-4__type">

        <div class="screen-4__type-item screen-4__type-item_i_1">
          <div class="screen-4__type-item-name">慕课红</div>
          <div class="screen-4__type-item-storage">16G/32G/64G</div>
        </div>

        <div class="screen-4__type-item screen-4__type-item_i_2">
          <div class="screen-4__type-item-name">土豪金</div>
          <div class="screen-4__type-item-storage">16G/32G/64G</div>
        </div>

        <div class="screen-4__type-item screen-4__type-item_i_3">
          <div class="screen-4__type-item-name">太空灰</div>
          <div class="screen-4__type-item-storage">16G/32G/64G</div>
        </div>

        <div class="screen-4__type-item screen-4__type-item_i_4">
          <div class="screen-4__type-item-name">绅士黑</div>
          <div class="screen-4__type-item-storage">16G/32G/64G</div>
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