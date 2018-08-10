<template>
  <section class="screen-3" @click="toggleAnimate">
    <div :class="['phone',phoneDone?'done':'init']"></div>
    <div class="wrapper">
      <div :class="['heading',headingDone?'':'init']">外形小巧，功能强大的手机</div>
      <div :class="['subheading',subHeadingDone?'':'init']">
        <p>采用受欢迎的设计，让它更加出色。</p>
        <p>款式小巧、轻便手感更舒适。绚丽高清的显示屏，整个外观显得格外精致。</p>
      </div>
      <div :class="['features-wrapper',featuresWrapperDone?'':'init','bounce']">
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
  methods: {
    toggleAnimate () {
      this.toggleHeading()
      this.toggleSubHeading()
      this.togglePhone()
      this.toggleFeaturesWrapper()
    },
    toggleHeading () {
      this.headingDone = !this.headingDone
    },
    toggleSubHeading () {
      this.subHeadingDone = !this.subHeadingDone
    },
    togglePhone () {
      this.phoneDone = !this.phoneDone
    },
    toggleFeaturesWrapper () {
      this.featuresWrapperDone = !this.featuresWrapperDone
    }
  },
  computed: {},
  components: {},
  data () {
    return {
      headingDone: false,
      subHeadingDone: false,
      phoneDone: false,
      featuresWrapperDone: false
    }
  }
}
</script>

<style lang='scss' scoped >
@import "../../../assets/bootstrap/base";

.screen-3 {
  position: relative;
  color: rgb(255, 255, 255);
  height: 800px;
  background-color: #a71316;

  .phone {
    // outline: 1rem solid rebeccapurple;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url(../img/index_body_1.jpg) 25% 50% no-repeat,
      linear-gradient(90deg, #d34446 10%, #9e292f 90%);

    transition: all 3s;
    &.init {
      transition: all 1s;
      opacity: 0;
    }
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
      left: 0.6rem;
      width: 55rem;
      font-size: 36px;

      transition: all 1.5s;
      &.init {
        transform: translateY(-100%);
        opacity: 0;
      }
    }
    .subheading {
      position: absolute;
      top: 170px;
      left: 0.6rem;
      width: 55rem;
      font-size: 16px;

      transition: all 1.5s;
      &.init {
        transform: translateY(100%);
        opacity: 0;
      }
    }

    .features-wrapper {
      position: absolute;
      width: 328px;
      height: 288px;
      bottom: 140px;
      left: 5px;

      transition: all 1.5s;
      &.init {
        transform: scale(0);
        opacity: 0;
      }
      .item {
        float: left;
        width: 138px;
        height: 118px;
        border: 1px solid #d97173;
        border-radius: 0.25rem;
        text-align: center;
        line-height: 14px;
        font-size: 14px;
        margin: 0 1.5rem 1.5rem 0;
        color: #fff;
        cursor: pointer;

        &:hover {
          animation: swing 1s 1;
          @include box-shadow();
          .number {
            animation: rock 2s infinite;
            @include text-shadow();
          }
        }

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