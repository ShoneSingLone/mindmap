<template>
  <section class="screen-3">
    <div class="wrapper">
      <div class="heading">外形小巧，功能强大的手机</div>
      <div class="subheading">
        <p>采用受欢迎的设计，让它更加出色。</p>
        <p>款式小巧、轻便手感更舒适。绚丽高清的显示屏，整个外观显得格外精致。</p>
      </div>
      <div class="phone"></div>
      <div class="features-wrapper">
        <div class="item">
          <span class="number item_i_1">
            5.7
          </span>英寸大屏
        </div>
        <div class="item">
          <span class="number item_i_2">
            1200
          </span>万像素
        </div>
        <div class="item">
          <span class="number item_i_3">
            3D
          </span>touch
        </div>
        <div class="item">
          <span class="number item_i_4">
            A9
          </span>处理器
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'screen3',
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
.screen-3 {
  color: rgb(255, 255, 255);
  height: 800px;
  background-color: #a71316;
  transition: all 1s ease-out;
  &:hover {
    background: url(../img/index_body_1.jpg) 25% 50% no-repeat,
      linear-gradient(90deg, #d34446 10%, #9e292f 90%);
  }
  .wrapper {
    max-width: 1200px;
    min-width: 800px;
    margin: 0px auto;
    height: 100%;
    position: relative;
    overflow: hidden;
    .heading {
      position: absolute;
      top: 90px;
      left: 10px;
      width: 580px;
      font-size: 36px;
    }
    .subheading {
      position: absolute;
      top: 170px;
      left: 10px;
      width: 580px;
      font-size: 16px;
    }
    .phone {
      width: 729px;
      height: 900px;
      position: absolute;
      top: 200px;
      left: 465px;
    }
    .features-wrapper {
      position: absolute;
      width: 328px;
      height: 288px;
      bottom: 140px;
      left: 5px;
      .item {
        float: left;
        width: 138px;
        height: 118px;
        border: 1px solid #d97173;
        border-radius: 3px;
        text-align: center;
        line-height: 14px;
        font-size: 14px;
        margin: 0 24px 24px 0;
        color: #fff;
        .number {
          height: 36px;
          font-size: 36px;
          line-height: 36px;
          padding: 32px 0 9px 0;
          display: block;
        }
      }
    }
  }
}
</style >