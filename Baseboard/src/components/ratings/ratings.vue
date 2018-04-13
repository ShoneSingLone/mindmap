<template>
  <div class="ratings" ref="ratings">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{seller.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家{{seller.rankRate}}%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <star :size="36" :score="seller.serviceScore"></star>
            <span class="score">{{seller.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <star :size="36" :score="seller.foodScore"></star>
            <span class="score">{{seller.foodScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
      <split></split>
      <ratingSelect :showFlag="showFlag" :selectType.sync="selectType" :onlyContent.sync="onlyContent" :desc="desc"
        :ratings="ratings"></ratingSelect>
      <div class="rating-wrapper" ref="ratingWrapper">
        <ul>
          <li v-for="rating in ratings" v-show="needShow(rating)" class="rating-item">
            <div class="avatar">
              <img width="28" height="28" :src="rating.avatar"> </div>
            <div class="content">
              <h1 class="name">{{rating.username}}</h1>
              <div class="star-wrapper">
                <star :size="24" :score="rating.score"></star>
                <span class="delivery" v-show="rating.deliveryTime">{{rating.deliveryTime}}</span>
              </div>
              <p class="text">{{rating.text}}</p>
              <div class="recommend" v-show="rating.recommend && rating.recommend.length">
                <span class="icon-thumb_up"></span>
                <span class="item" v-for="item in rating.recommend">{{item}}</span>
              </div>
              <div class="time"> {{rating.rateTime | formatDate}} </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>



<script type="text/ecmascript-6">
//component
import split from "@c/split/split";
import star from "@c/star/star";
import cartcontrol from "@c/cartcontrol/cartcontrol";
import ratingSelect from "@c/rating/rating";
// lib
import BScroll from "better-scroll";
// vuex
import { ratings as MT } from "@/store/mutation-types";
import { ratings as AT } from "@/store/action-types";
// tools
import { formatDate } from "@com/js/date";

const POSITIVE = 0;
const NEGATIVE = 1;
const ALL = 2;

export default {
  beforeCreate() {
    console.log("Ratings.vue beforeCreate");
    this.$store.dispatch(AT.init);
  },
  created() {
    this.$nextTick(() => {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.ratings, {
          click: true
        });
      } else {
        this.scroll.refresh();
      }
    });
  },
  data() {
    return {
      showFlag: false,
      selectType: ALL,
      onlyContent: true,
      desc: { all: "全部", positive: "推荐", negative: "吐槽" }
    };
  },
  methods: {
    needShow(rating) {
      if (this.onlyContent && !rating.text) {
        //只看有内容，并且没有内容
        return false;
      }
      if (this.selectType === ALL) {
        return true;
      } else {
        return rating.rateType === this.selectType;
      }
    }
  },
  computed: {
    ratings: function() {
      return this.$store.state.ratings.all;
    },

    seller: function() {
      return this.$store.state.seller.all;
    }
  },
  filters: {
    formatDate(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    }
  },
  components: {
    split,
    star,
    cartcontrol,
    ratingSelect
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./style.scss">

</style>