<template>
  <section class="screen-5">
    <div class="wrapper">
      <p class="heading">游戏、学习、拍照、有这一部就够了</p>
      <p class="subheading">看视频、拍摄高清视频与照片、视频聊天、一机多功能，让您生活更丰富精彩。</p>
    </div>
    <div class="back"></div>
  </section>
</template>
<script>
export default {
  name: 'screen5',
  mounted () {},
  methods: {},
  computed: {},
  components: {},
  data () {
    return {}
  }
}
</script>

<style lang='scss' scoped >
.screen-5 {
  height: 800px;
  text-align: center;
  overflow: hidden;
  background: #d9dde1;
  position: relative;
  .wrapper {
    max-width: 1200px;
    min-width: 800px;
    margin: 0px auto;
    height: 100%;
    position: relative;
    overflow: hidden;

    .heading {
      position: absolute;
      top: 15rem;
      width: 100%;
      font-size: 3rem;
      color: #f01414;
    }
    .subheading {
      position: absolute; top: 20rem;
      width: 100%;
      font-size: 16px;
    }
  }

  .back {
    width: 100%;
    height: 370px;
    background: url(../img/bg-screen-5.png) no-repeat bottom center;
    background-size: cover;
    position: absolute;
    bottom: -100px;
  }
}
</style >