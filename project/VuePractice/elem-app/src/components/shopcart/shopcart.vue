<template>
  <div class="shopcart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo">
            <span class="icon-shopping_cart"></span>
          </div>
        </div>
        <!-- price -->
        <div class="price">円10</div>
        <div class="desc">另需配送费￥{{seller}}元</div>
        <!-- price -->


      </div>
      <div class="content-wrapper"></div>
    </div>
  </div>
</template>


<script type="text/ecmascript-6">
import BScroll from "better-scroll";
// import cartcontrol from "components/cartcontrol/cartcontrol";

export default {
  props: {
    seller: {
      type: Object
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./style.scss">

</style>