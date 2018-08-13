<template>
  <section class="screen-5 height800" @click="toggleAnimate">
    <div class="wrapper">
      <p :class="['heading',headingDone?'':'init']">游戏、学习、拍照、有这一部就够了</p>
      <p :class="['subheading',subHeadingDone?'':'init']">看视频、拍摄高清视频与照片、视频聊天、一机多功能，让您生活更丰富精彩。</p>
    </div>
    <div :class="['back',backDone?'':'init']"></div>
  </section>
</template>
<script>
export default {
  name: 'screen5',
  mounted () {},
  methods: {
    toggleAnimate () {
      this.toggleHeading()
      this.toggleSubHeading()
      this.toggleBackDone()
    },
    toggleHeading () {
      this.headingDone = !this.headingDone
    },
    toggleSubHeading () {
      this.subHeadingDone = !this.subHeadingDone
    },
    toggleBackDone () {
      this.backDone = !this.backDone
    }
  },
  computed: {},
  components: {},
  data () {
    return {
      headingDone: false,
      subHeadingDone: false,
      backDone: false
    }
  }
}
</script>

<style lang='scss' scoped >
.screen-5 {
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

      transition: all 1.5s;
      &.init {
        transform: translateY(-100%);
        opacity: 0;
      }
    }
    .subheading {
      position: absolute;
      top: 20rem;
      width: 100%;
      font-size: 16px;

      transition: all 1.5s;
      &.init {
        transform: translateY(100%);
        opacity: 0;
      }
    }
  }

  .back {
    width: 100%;
    height: 370px;
    background: url(../img/bg-screen-5.png) no-repeat bottom center;
    background-size: cover;
    position: absolute;
    bottom: -100px;

    transition: all 1.5s;
    &.init {
      transform: translateY(100%);
      opacity: 0;
    }
  }
}
</style >