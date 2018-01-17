<template>
  <div v-show="isShowDetail">
    <div class="back-wrapper">
      <i class="icon-close back" @click="closeFood"></i>
    </div>
    <div class="food" ref="food">
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
          <ratingSelect :showFlag="showFlag" :selectType.sync="selectType" :onlyContent.sync="onlyContent" :desc="desc"
            :ratings="food.ratings"></ratingSelect>
          <div class="ratings-wrapper">
            <ul v-if="food.ratings && food.ratings.length>0">
              <li class="rating-list" v-for="rating in food.ratings"  v-show="needShow(rating,selectType)" >
                <div class="user">
                  <span class="name">{{rating.username}} </span>
                  <img :src="rating.avatar" alt="" class="avatar"> </div>
                <div class="time">
                  <span>{{rating.rateTime|formatDate}}</span>
                </div>
                <p class="text">
                  <i :class="{'icon-thumb_up':rating.rateType===0,'icon-thumb_down':rating.rateType===1}"></i> {{rating.text}} </p>
              </li>
            </ul>
            <ul v-else >
              <li class="no-rating ">暂无评价</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import vue from "vue";
import BScroll from "better-scroll";
import moment from "moment";
import { formatDate } from "@com/js/date";
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
    },
    needShow(rating) {
      if (this.onlyContent && !rating.text) {
        //只看有内容，并且没有内容
        return false;
      }
      ``;
      if (this.selectType === ALL) {
        return true;
      } else {
        return rating.rateType === this.selectType;
      }
    }
  },
  filters: {
    formatDate(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    },
    dateFormat(time) {
      let date = new Date(time);
      return moment(date, "yyyy-MM-dd hh:mm");
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