<template>
  <div v-show="isShowDetail">
    <div class="back-wrapper" >
      <i class="icon-close back" @click="closeFood"></i>
    </div>
    <div class="food"  ref="food">
      <div class="food-content">
        <div class="image-header">
          <img :src="foodImage" alt="image"> </div>
        <div class="content">
          <h1 class="title">{{food.name}}</h1>
          <div class="detail">
            <span class="sell-count">月售{{food.sellCount}}份</span>
            <span class="rating">好评率{{food.rating}}%</span>
          </div>
          <div class="price">
            <span class="now">￥{{food.price}}</span>
            <span class="old" v-show="food.oldPrice">{{food.oldPrice}}</span>
          </div>
          <div class="cartcontrol-wrapper">
            <cartcontrol :food="food"></cartcontrol>
          </div>
          <div class="buy" v-show="food.count===0||!food.count" @click.stop.prevent="foodAdd">加入购物车</div>
        </div>
        <split></split>
        <div class="info">
          <h1 class="title">商品信息</h1>
          <p class="text" v-show="food.info">{{food.info}}</p>
        </div>
        <split></split>
        <div class="rating">
          <h1 class="title">商品评价</h1>
          <ratingSelect :showFlag="showFlag" :selectType="selectType" :onlyContent="onlyContent" :desc="desc" :ratings="food.ratings"></ratingSelect>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import vue from "vue";
import BScroll from "better-scroll";
import cartcontrol from "@c/cartcontrol/cartcontrol";
import split from "@c/split/split";
import ratingSelect from "@c/rating/rating";

import { goods as MT } from "@/store/mutation-types";
import { goods as AT } from "@/store/action-types";

const POSITIVE = 0;
const NEGATIVE = 1;
const ALL = 2;

export default {
  props: {
    food: {
      type: Object
    }
  },
  data() {
    return {
      foodImage: "",
      showFlag: false,
      selectType: ALL,
      onlyContent: true,
      desc: { all: "全部", positive: "推荐", negative: "吐槽" }
    };
  },
  computed: {
    isShowDetail: function() {
      if (this.$store.state.goods.isShowFoodDetail) {
        this.initShowDetail();
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.food, {
              click: true
            });
          } else {
            this.scroll.refresh();
          }
        });
      }
      return this.$store.state.goods.isShowFoodDetail;
    }
  },
  methods: {
    initShowDetail() {
      this.selectType = ALL;
      this.onlyContent = true;
      this.foodImage = this.food.image;
    },
    closeFood: function() {
      this.foodImage = "";
      this.$store.commit(MT.setShowFoodFlag, { isShowFoodDetail: false });
    },
    foodAdd(event) {
      // debugger;
      // if (!event._constructed) {
      //   return;
      // }
      if (!this.food.count) {
        this.$set(this.food, "count", 1);
      } else {
        this.food.count++;
      }
    }
  },
  components: {
    cartcontrol,
    ratingSelect,
    split
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./style.scss">

</style>