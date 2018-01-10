<template>
  <div class="shopcart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper" :class="{highlight:isHighlight}">
          <div class="logo">
            <i class="icon-shopping_cart"></i>
          </div>
          <div class="num">{{totalCount}}</div>
        </div>
        <!-- price -->
        <div class="price">￥{{totalPrice}}</div>
        <div class="desc">另需配送费￥{{seller.deliveryPrice}}元</div>
        <!-- price -->
      </div>
      <div class="content-right">
        <div class="pay">￥{{seller.minPrice}}起送</div>
      </div>
    </div>
  </div>
</template>


<script type="text/ecmascript-6">
import BScroll from "better-scroll";
// import cartcontrol from "components/cartcontrol/cartcontrol";

export default {
  props: {
    selectFoods: {
      type: Array,
      default() {
        return [
          {
            price: 10,
            count: 2
          }
        ];
      }
    }
  },
  data() {
    return {
      isHighlight: false
    };
  },
  computed: {
    seller: function() {
      return this.$store.state.seller.all;
    },
    totalPrice: function() {
      let total = 0;
      this.selectFoods.forEach(food => {
        total += food.price * food.count;
      });
      return total;
    },
    totalCount: function() {
      let total = 0;
      this.selectFoods.forEach(food => {
        total += food.count;
      });

      this.isHighlight = total > 0 ? true : false;
      return total;
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./style.scss">

</style>