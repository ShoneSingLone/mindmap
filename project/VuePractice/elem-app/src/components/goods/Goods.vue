<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.goods {
  display: flex;
  position: absolute;
  top: 174px;
  bottom: 46px;
  width: 100%;
  overflow: hidden;
  .menu-wrapper {
    flex: 0 0 80px;
    width: 80px;
  }
  .foods-wrapper {
    flex: 1;
  }
}
</style>

<template>

<div class="goods">
  <div class="menu-wrapper"></div>
  <div class="foods-wrapper"></div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      goods: [],
      listHeight: [],
      scrollY: 0,
      selectedFood: {}
    };
  }
};
</script>


