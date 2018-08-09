<template>

  <section class="screen-4 height800">
    <div class="heading-wrapper">
      <div class="heading">丰富的手机型号</div>
      <div class="subheading">找到适合你的手机</div>
      <div class="type-wrapper">
        <div class="item item_i_1">
          <div class="name">慕课红</div>
          <div class="storage">16G/32G/64G</div>
        </div>

        <div class="item item_i_2">
          <div class="name">土豪金</div>
          <div class="storage">16G/32G/64G</div>
        </div>

        <div class="item item_i_3">
          <div class="name">太空灰</div>
          <div class="storage">16G/32G/64G</div>
        </div>

        <div class="item item_i_4">
          <div class="name">绅士黑</div>
          <div class="storage">16G/32G/64G</div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'screen4',
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
    }
    .subheading {
      position: absolute;
      top: 15rem;
      width: 100%;
      font-size: 16px;
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