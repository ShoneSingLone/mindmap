<template>
  <div>
    <div class="shopcart">
      <div class="content">
        <div class="content-left">
          <div class="logo-wrapper" :class="{highlight:isHighlight}" @click="toggleFold">
            <div class="logo">
              <i class="icon-shopping_cart"></i>
            </div>
            <div class="num">{{totalCount}}</div>
          </div>
          <!-- price -->
          <div class="price" :class="{highlight:isHighlight}">￥{{totalPrice}}</div>
          <div class="desc">另需配送费￥{{seller.deliveryPrice}}元</div>
          <!-- price -->
        </div>
        <div class="content-right">
          <div class="pay" :class="{'not-enough':!isEnough,'enough':isEnough}" @click="pay">{{payDesc}}</div>
        </div>
      </div>
      <div class="shopcart-list" v-show="isFold">
        <div class="list-header">
          <h1 class="title">购物车</h1>
          <span class="empty" @click="clearShopcart">清空</span>
        </div>
        <div class="list-content" ref="listContent">
          <ul>
            <li class="food"  v-for="food in selectedFoods">
              <span class="name">{{food.name}}</span>
              <div class="price">
                <span>￥{{food.price*food.count}}</span>
              </div>
              <div class="cartcontrol-wrapper">
                <cartcontrol :food="food"></cartcontrol>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div transition="fade" class="list-mask" v-show="isFold" @click="toggleFold"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "better-scroll";
import cartcontrol from "@c/cartcontrol/cartcontrol";

export default {
  data() {
    return {
      isFold: false,
      dropBalls: []
    };
  },
  props: {
    selectedFoods: {
      type: Array,
      default() {
        return [
          {
            name: "asd",
            price: 10,
            count: 3
          }
        ];
      }
    }
  },
  computed: {
    seller: function() {
      return this.$store.state.seller.all;
    },
    totalPrice: function() {
      let total = 0;
      this.selectedFoods.forEach(food => {
        total += food.price * food.count;
      });
      return total;
    },
    totalCount: function() {
      let total = 0;
      this.selectedFoods.forEach(food => {
        total += food.count;
      });
      return total;
    },
    isHighlight: function() {
      return this.totalCount > 0 ? true : false;
    },
    isEnough: function() {
      return this.totalPrice < this.seller.minPrice ? false : true;
    },
    payDesc() {
      if (this.totalPrice === 0) {
        return `￥${this.seller.minPrice}起送`;
      } else if (this.totalPrice < this.seller.minPrice) {
        let difference = this.seller.minPrice - this.totalPrice;
        return `还差￥${difference}起送`;
      } else {
        return "去结算";
      }
    }
  },
  methods: {
    toggleFold() {
      if (this.totalCount === 0) {
        this.isFold = false;
        return false;
      }
      this.isFold = !this.isFold;
      let isInit = true;
      if (this.isFold) {
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.listContent, { click: true });
          } else {
            this.scroll.refresh;
          }
        });
      }
    },
    clearShopcart() {
      this.selectedFoods.forEach(food => {
        food.count = 0;
      });
      this.toggleFold();
    },
    pay() {
      if (this.isEnough) {
        return console.log(this.totalPrice);
      }
    }
  },
  components: {
    cartcontrol
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./style.scss">

</style>