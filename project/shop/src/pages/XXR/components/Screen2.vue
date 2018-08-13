<template>
  <section class="screen-2" @click="toggleAnimate">
    <div class="heading-wrapper">
      <div :class="['heading',headingDone?'':'init']">精彩，尽在掌握</div>
      <div :class="['subheading',subHeadingDone?'':'init']">
        <p>采用受欢迎的设计，让它更加出色。</p>
        <p>款式小巧、轻便手感更舒适。绚丽高清的显示屏，整个外观显得格外精致。</p>
      </div>
      <div :class="['phone',{init:!phoneDone}]">
        <div :class="['point','point_i_1',point1Done?'':'init']">高清摄像</div>
        <div :class="['point','point_i_2',point2Done?'':'init']">超薄机身</div>
        <div :class="['point','point_i_3',point3Done?'':'init']">大屏显示</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'section2',
  mounted () {},
  methods: {
    toggleAnimate () {
      this.headingDone = !this.headingDone
      this.subHeadingDone = !this.subHeadingDone
      this.phoneDone = !this.phoneDone
      this.point1Done = !this.point1Done
      this.point2Done = !this.point2Done
      this.point3Done = !this.point3Done
    }
  },
  computed: {},
  components: {},
  data () {
    return {
      headingDone: false,
      subHeadingDone: false,
      phoneDone: false,
      shadowDone: false,
      point1Done: false,
      point2Done: false,
      point3Done: false
    }
  }
}
</script>

<style lang='scss' scoped >
@import "../../../assets/bootstrap/variables";
@import "../../../assets/bootstrap/base";
@import "../base";

.screen-2 {
  // outline: 1px dashed rebeccapurple;
  color: rgb(7, 17, 27);
  height: 800px;
  background-color: #fafafa;
  text-align: center;

  .heading-wrapper {
    // outline: 1px solid rgb(51, 150, 153);
    max-width: 1200px;
    min-width: 800px;
    margin: 0px auto;
    height: 100%;
    position: relative;
    overflow: hidden;

    .heading {
      // outline: 2px solid rgb(153, 51, 110);
      position: absolute;
      top: 5rem;
      width: 100%;
      font-size: 42px;
      color: #f01414;

      transition: all 1.2s ease-in-out;
      &.init {
        transform: translate(0, -300%);
        opacity: 0;
      }
    }

    .subheading {
      // outline: 0.25rem dotted rgb(51, 153, 122);
      width: 100%;
      top: 190px;
      position: absolute;
      font-size: 16px;
      transition: all 1.2s ease-in-out;

      &.init {
        transform: translate(0, -300%);
        opacity: 0;
      }

      p {
        margin: 0.5rem;
      }
    }

    .phone {
      width: 800px;
      height: 870.25rem;
      background: url(../img/bg-screen-2.png) no-repeat;
      position: absolute;
      left: 50%;
      margin-left: -464px;
      top: 270px;

      transition: all 1.2s;
      &.init {
        transform: translateY(10%);
        opacity: 0;
      }

      .point {
        font-size: 1.5rem;
        color: #4d555d;
        position: absolute;
        width: 100px;

        &.point_i_1 {
          top: 9rem;
          left: -120px;
          padding-right: 112px;
          background: url(../img/icon-point-right.png) no-repeat center right;

          transition: all 1.5s ease-in-out 0.5s;
          &.init {
            transform: translate(-200%, 0);
            opacity: 0;
          }
        }

        &.point_i_2 {
          top: 37px;
          left: 584px;
          padding-left: 112px;
          background: url(../img/icon-point-left.png) no-repeat center left;

          transition: all 1.5s ease-in-out 0.6s;
          &.init {
            transform: translate(200%, 0);
            opacity: 0;
          }
        }

        &.point_i_3 {
          top: 340px;
          left: 42rem;
          padding-left: 112px;
          background: url(../img/icon-point-left.png) no-repeat center left;

          transition: all 1.5s ease-in-out 0.7s;
          &.init {
            transform: translate(200%, 0);
            opacity: 0;
          }
        }
      }
    }
  }
}
</style >