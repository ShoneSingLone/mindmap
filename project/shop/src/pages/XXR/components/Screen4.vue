<template>

  <section class="screen-4 height800" @click="toggleAnimate">
    <div class="heading-wrapper">
      <div :class="['heading',headingDone?'':'init']">丰富的手机型号</div>
      <div :class="['subheading',subHeadingDone?'':'init']">找到适合你的手机</div>
      <div class="type-wrapper ">
        <div :class="['item','item_i_1',type[0]?'':'init']">
          <div class="name">红</div>
          <div class="storage ">16G/32G/64G</div>
        </div>

        <div :class="['item','item_i_2',type[1]?'type[1]':'init']">
          <div class="name">金</div>
          <div class="storage ">16G/32G/64G</div>
        </div>

        <div :class="['item','item_i_3',type[2]?'':'init']">
          <div class="name">灰</div>
          <div class="storage ">16G/32G/64G</div>
        </div>

        <div :class="['item','item_i_4',type[3]?'':'init']">
          <div class="name">黑</div>
          <div class="storage ">16G/32G/64G</div>
        </div>

      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'screen4',
  mounted () {},
  methods: {
    toggleAnimate () {
      this.toggleHeading()
      this.toggleSubHeading()
      this.toggleType()
    },
    toggleHeading () {
      this.headingDone = !this.headingDone
    },
    toggleSubHeading () {
      this.subHeadingDone = !this.subHeadingDone
    },
    toggleType () {
      for (let index = 0; index < this.type.length; index++) {
        setTimeout(() => {
          this.type.splice(index, 1, !this.type[index])
          console.log(index, this.type[index])
        }, 260 * index)
      }
    }
  },
  computed: {},
  components: {},
  data () {
    return {
      headingDone: false,
      subHeadingDone: false,
      type: [false, false, false, false]
    }
  }
}
</script>

<style lang='scss' scoped >
.screen-4 {
  background-color: #fff;
  text-align: center;

  .heading-wrapper {
    max-width: 1200px;
    min-width: 800px;
    margin: 0px auto;
    height: 100%;
    position: relative;
    overflow: hidden;

    .heading {
      position: absolute;
      top: 5rem;
      width: 100%;
      font-size: 42px;
      color: #f01414;

      transition: all 1.5s;
      &.init {
        transform: translateY(-100%);
        opacity: 0;
      }
    }
    .subheading {
      position: absolute;
      top: 15rem;
      width: 100%;
      font-size: 16px;

      transition: all 1.5s;
      &.init {
        transform: translateY(100%);
        opacity: 0;
      }
    }
    .type-wrapper {
      width: 1300px;
      margin-left: 30px;
      height: 270px;
      bottom: 220px;
      position: absolute;
      font-size: 16px;
      text-align: center;

      .item {
        // outline: 1rem dashed rebeccapurple;
        width: 220px;
        height: 270px;
        float: left;
        margin-right: 90px;
        position: relative;

        transition: all 1.5s;
        &.init {
          transform: translateY(100%);
          opacity: 0;
        }

        .name {
          width: 100%;
          height: 40px;
          position: absolute;
          top: 300px;
          font-size: 16px;
          height: 16px;
          line-height: 16px;
          color: #2c3238;
        }
        .storage {
          width: 100%;
          height: 40px;
          position: absolute;
          top: 328px;
          font-size: 9px;
          height: 9px;
          line-height: 9px;
          color: #93999f;
        }
        &.item_i_1 {
          background: url("../img/phone-1.png") center left no-repeat;
        }

        &.item_i_2 {
          background: url("../img/phone-2.png") center left no-repeat;
        }

        &.item_i_3 {
          background: url("../img/phone-3.png") center left no-repeat;
        }

        &.item_i_4 {
          background: url("../img/phone-4.png") center left no-repeat;
        }
      }
    }
  }
}
</style >