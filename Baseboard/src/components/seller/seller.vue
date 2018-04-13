<template>
  <div class="seller" ref="seller">
    <div class="seller-content">
      <div class="overview">
        <h1 class="title">{{seller.name}}</h1>
        <div class="desc border-1px">
          <star :size="36" :score="seller.score"></star>
          <span class="text">({{seller.ratingCount}})</span>
          <span class="text">月售{{seller.sellCount}}单</span>
        </div>
        <ul class="remark">
          <li class="block" v-for="remark in remarks">
            <h2>{{remark.key}}</h2>
            <div class="content">
              <span class="stress">{{remark.value}}</span>元 </div>
          </li>
        </ul>
        <div class="favorite" @click="toggleFavorite">
          <span class="icon-favorite" :class="{'active':favorite}"></span>
          <span class="text">{{favoriteText}}</span>
        </div>
      </div>
      <split></split>
      <div class="bulletin">
        <h1 class="title">公告与活动</h1>
        <div class="content-wrapper border-1px">
          <p class="content">{{seller.bulletin}}</p>
        </div>
        <ul v-show="seller.supports" class="supports">
          <li class="support-item border-1px" v-for="(item, index) in seller.supports">
            <supports :support="item"></supports>
            <span class="text">{{item.description}}</span>
          </li>
        </ul>
      </div>
      <split></split>
      <div class="pics">
        <h1 class="title">商家实景</h1>
        <div class="pic-wrapper" ref="picWrapper">
          <ul class="pic-list" ref="picList">
            <li class="pic-item" v-for="pic in seller.pics">
              <img :src="pic" width="120" height="90"> </li>
            <li class="pic-item" v-for="pic in seller.pics">
              <img :src="pic" width="120" height="90"> </li>
            <li class="pic-item" v-for="pic in seller.pics">
              <img :src="pic" width="120" height="90"> </li>
          </ul>
        </div>
      </div>
      <split></split>
      <div class="info">
        <h1 class="title border-1px">商家信息</h1>
        <ul>
          <li class="info-item" v-for="info in seller.infos">{{info}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script type="text/ecmascript-6">
import split from "@c/split/split";
import star from "@c/star/star";
import supports from "@c/supports/supports";
//common
import { save as LSsave, load as LSload } from "@com/js/localStorage";
// lib
import BScroll from "better-scroll";

export default {
  mounted() {
    this._initBScroll("_initBScroll mounted");
  },
  data() {
    return {
      isFavorite: false
    };
  },
  computed: {
    seller: function() {
      return this.$store.state.seller.all;
    },
    favorite: function() {
      if (!(this.seller && this.seller.id)) return this.isFavorite;
      this.isFavorite = LSload(this.seller.id, "favorite", false);
      return this.isFavorite;
    },
    remarks: function() {
      return [
        {
          key: "起送价",
          value: this.seller.minPrice
        },
        {
          key: "商家配送",
          value: this.seller.deliveryPrice
        },
        {
          key: "平均配送时间",
          value: this.seller.deliveryTime
        }
      ];
    },
    favoriteText: function() {
      return this.favorite ? "已收藏" : "收藏";
    }
  },
  watch: {
    seller: function() {
      this._initBScroll("_initBScroll watch seller");
    }
  },
  methods: {
    _initBScroll: function(info) {
      console.log(info);
      console.log(this.seller);
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.seller, {
            click: true
          });
          this.scroll = new BScroll(this.$refs.picWrapper, {
            click: true
          });
        } else {
          this.scroll.refresh();
        }
      });

      if (this.seller.pics) {
        let picWidth = 120;
        let margin = 6;
        let width = (picWidth + margin) * this.seller.pics.length * 3 - margin;
        this.$refs.picList.style.width = width + "px";
        this.$nextTick(() => {
          if (!this.picScroll) {
            this.picScroll = new BScroll(this.$refs.picWrapper, {
              scrollX: true,
              eventPassthrough: "vertical"
            });
          } else {
            this.picScroll.refresh();
          }
        });
      }
    },
    toggleFavorite: function() {
      this.isFavorite = !this.isFavorite;
      LSsave(this.seller.id, "favorite", this.isFavorite);
    }
  },
  components: {
    split,
    supports,
    star
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./style.scss">

</style>