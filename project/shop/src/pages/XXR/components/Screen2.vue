<template>
  <section class="screen-2">
    <div class="heading-wrapper">
      <div class="heading">精彩，尽在掌握</div>
      <div class="subheading">采用受欢迎的设计，让它更加出色。
        <br>款式小巧、轻便手感更舒适。绚丽高清的显示屏，整个外观显得格外精致。</div>

      <div class="phone">
        <div class="point point_i_1">高清摄像</div>
        <div class="point point_i_2">超薄机身</div>
        <div class="point point_i_3">大屏显示</div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'section2',
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
@import "../../../assets/bootstrap/variables";
@import "../../../assets/bootstrap/base";
@import "../base";

.screen-2 {
  // outline: 1px dashed rebeccapurple;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  color: rgb(0, 0, 0);
  text-align: center;
  // background-color: rgb(129, 179, 228);
  // background: linear-gradient( 145deg, rgb(129, 179, 228) 0%, #85bbe9 25%, #8ec2ee 50%, #88bbe9 75%, white );
  background: url(../img/bg-screen-2.jpg) center center/cover no-repeat;

  position: relative;
  overflow: hidden;

  .wrapper {
    // outline: 1px solid rgb(51, 150, 153);
    position: relative;
    @include width();
    height: 100%;

    .heading {
      // outline: 2px solid rgb(153, 51, 110);
      margin-top: 5rem;
      width: 100%;
      font-size: 42px;
      color: #000;
    }
    .subheading {
      // outline: 3px dotted rgb(51, 153, 122);
      width: 100%;
      margin-top: 2rem;
      font-size: 1rem;
      p {
        margin: 0.5rem;
      }
    }
    .phone {
      display: none;
      outline: 4px solid rgb(176, 116, 236);

      position: relative;
      width: 100%;
      height: 873px;
      .point {
        font-size: 1.5rem;
        color: #4d555d;
        position: absolute;
        width: 100px;

        &.point_i_1 {
          top: 180px;
          left: -120px;
          padding-right: 112px;
          background: url(../img/icon-point-right.png) no-repeat center right;
        }

        &.point_i_2 {
          top: 37px;
          left: 584px;
          padding-left: 112px;
          background: url(../img/icon-point-left.png) no-repeat center left;
        }

        &.point_i_3 {
          top: 340px;
          left: 680px;
          padding-left: 112px;
          background: url(../img/icon-point-left.png) no-repeat center left;
        }
      }
    }
  }
}
</style >