<template>
  <section class="screen-1">
    <div class="screen-1__wrap">
      <div class="screen-1__heading">
        <p>
          <span>慕课手机</span> 让你的生活更精彩
        </p>
      </div>
    </div>
    <div class="screen-1__phone"></div>
    <div class="screen-1__shadow"></div>
  </section>
</template>

<script>
export default {
  name: 'section1',
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