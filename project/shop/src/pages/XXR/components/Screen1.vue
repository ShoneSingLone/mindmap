<template>
  <section class="screen-1 height800">
    <div class="heading">
      <h1 class="webfont">
        <p>XXR</p>
        <p>AI双摄 小屏高性能</p>
      </h1>
      <p>后置1200万 AI双摄 / 12nm八核处理器 / 5.45”高清全面屏 / AI 人脸解锁</p>
      <div class="move">
        <div class="price J_priceWrapper wenfont" data-gid="2182300119">
          <span class="J_currentPrice ft-Avenir currentPrice">
            <i class="price-num num">769</i>
            <span class="price-per"> 元起</span>
          </span>
          <del class="originalPrice">
            <i class="num">799</i>
            <span class="price-per"> 元起</span>
          </del>
        </div>
      </div>
    </div>
    <div class="phone"></div>
    <div class="shadow"></div>
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

<style lang='scss' scoped>
@import "../../../assets/bootstrap/variables";

* {
  outline: 1px solid cyan;
}
.screen-1 {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: rgb(255, 255, 255);
  text-align: center;
  background: url(../img/bg-screen-1.png) no-repeat center bottom/cover;
  // width: $width;

  .heading {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

  }

  .phone {
    display: none;
    position: absolute;
    bottom: 180px;
    width: $width;
    height: 305px;
    left: 50%;
    margin-left: -687px;
    background: url(../img/screen-1-phone.png) no-repeat center/100% 100%;
    z-index: 1;
  }

  .shadow {
    display: none;
    position: absolute;
    bottom: 30px;
    width: 1233px;
    height: 411px;
    left: 50%;
    margin-left: -616px;
    background: url(../img/screen-1-shadow.png) no-repeat center;
  }
}
</style >