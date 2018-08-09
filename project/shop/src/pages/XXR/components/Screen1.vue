<template>
  <section class="screen-1 height800" @click="toggleAnimate">
    <div class="heading-wrapper">
      <div :class="['heading',headingDone?'fadeOutDown':'init']">
        <p>
          <b>AI双摄</b>小屏高性能</p>
        <p class="webfont">后置1200万 AI双摄 / 12nm八核处理器 / 5.45”高清全面屏 / AI 人脸解锁</p>
      </div>
    </div>
    <div class="phone-wrapper">
      <div class="phone"></div>
      <div class="shadow"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'section1',
  mounted () {},
  methods: {
    toggleAnimate () {
      this.toggleHeading()
    },
    toggleHeading () {
      console.log('toggleHeading', this.headingDone)
      this.headingDone = !this.headingDone
    }
  },
  computed: {},
  components: {},
  data () {
    return { headingDone: false }
  }
}
</script>

<style lang='scss' scoped>
@import "../../../assets/bootstrap/variables";
@import "../../../assets/bootstrap/base";
@import "../base";

.screen-1 {
  // outline: 1px solid rebeccapurple;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  color: rgb(0, 0, 0);
  text-align: center;
  background: linear-gradient(135deg, white 10%, rgb(236, 236, 236) 50%);
  position: relative;
  overflow: hidden;

  .heading-wrapper {
    position: relative;

    @include width();

    margin: 6rem auto 0;
    height: 12rem;
    // overflow: hidden;

    .heading {
      transition: all 3s;
      &.init {
        transform: translate(0, -300%);
        opacity: 0;
      }
      margin-top: 5rem;
      width: 100%;
      font-size: 2.5rem;
      opacity: 1;

      p {
        margin-bottom: 1rem;
        b {
          color: $main-color;
        }
        &.webfont {
          @include text-shadow();
          font-size: 1rem;
        }
      }
    }
  }

  .phone-wrapper {
    flex: 1;
    position: relative;
    @include width();
    margin: 0 auto;

    height: 100%;

    .phone {
      position: absolute;
      top: 0;
      width: 100%;
      height: 20rem;
      background: url(../img/screen-1-phone.png) center center/contain no-repeat;
      z-index: 1;
    }
    .shadow {
      position: absolute;
      top: 8rem;
      width: 100%;
      height: 20rem;
      background: url(../img/screen-1-shadow.png) center center/contain
        no-repeat;
    }
  }
}
</style >