<template>

  <section class="screen-4 height800" @click="toggleAnimate">
    <div class="heading-wrapper">
      <div :class="['heading',headingDone?'':'init']">丰富的手机型号</div>
      <div :class="['subheading',subHeadingDone?'':'init']">找到适合你的手机</div>
      <div class="type-wrapper ">
        <div v-for="(type, index) in types" :key="index" :class="['item','item_i_'+index,types[index].done?'':'init']">
          <div class="name">{{type.name}}</div>
          <div class="storage ">{{type.storage}}</div>
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
      for (let index = 0; index < this.types.length; index++) {
        setTimeout(() => {
          this.types[index].done = !this.types[index].done
          this.types.splice(index, 1, this.types[index])
          console.log(index, this.types[index])
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
      types: [
        {
          name: '红',
          storage: '16G/32G/64G',
          done: false
        },
        {
          name: '金',
          storage: '16G/32G/64G',
          done: false
        },
        {
          name: '灰',
          storage: '16G/32G/64G',
          done: false
        },
        {
          name: '黑',
          storage: '16G/32G/64G',
          done: false
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped >
// @import "../../../assets/bootstrap/base";

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
        &:hover {
          // @include box-shadow();
          cursor: pointer;
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
        &.item_i_0 {
          background: url("../img/phone-1.png") center left no-repeat;
        }

        &.item_i_1 {
          background: url("../img/phone-2.png") center left no-repeat;
        }

        &.item_i_2 {
          background: url("../img/phone-3.png") center left no-repeat;
        }

        &.item_i_3 {
          background: url("../img/phone-4.png") center left no-repeat;
        }
      }
    }
  }
}
</style >