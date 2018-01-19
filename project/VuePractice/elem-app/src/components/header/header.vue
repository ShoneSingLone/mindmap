<template>
  <div class="header" v-if="seller">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" heifht="64" :src="seller.avatar" alt=""> </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}} </span>
        </div>
        <div class="description"> {{seller.description}}/{{seller.deliveryTime}}分钟送达 </div>
        <div class="supports" v-if="seller.supports">
          <supports :support="seller.supports[0]"></supports>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="support-count" v-if="sellerDescription">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="toggleDetail">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right" ></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%"> </div>
    <!-- <header-detail :isShowDetail="isShowDetail"> </header-detail> -->
    <transition name="fade">
      <div class="detail" v-if="isShowDetail">
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <h1 class="name">{{seller.name}}</h1>
            <div class="star-wrapper">
              <star :size="48" :score="seller.score"></star>
            </div>
            <div class="title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <ul v-show="seller.supports" class="supports">
              <li class="support-item" v-for="(item, index) in seller.supports">
                <supports :support="item"></supports>
                <span class="text">{{item.description}}</span>
              </li>
            </ul>
            <div class="title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="bulletin">
              <p class="content">{{seller.bulletin}}</p>
            </div>
          </div>
        </div>
        <div class="detail-close" @click="toggleDetail">
          <i class="icon-close"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
import star from "@c/star/star";
import supports from "@c/supports/supports";

export default {
  name: "v-header",
  created: function() {
    console.log("v-header ");
    console.dir(this.seller);
  },
  data() {
    return {
      isShowDetail: false
    };
  },
  methods: {
    toggleDetail: function() {
      this.isShowDetail = !this.isShowDetail;
    },
    test() {
      this.axios
        .get("http://localhost:3000/ajax")
        .then(response => {
          if (200 === response.status) {
            let seller = response.data;
            debugger;
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  computed: {
    seller: function() {
      return this.$store.state.seller.all;
    },
    sellerDescription: function() {
      return this.seller && this.seller.supports
        ? this.seller.supports[0].description
        : "";
    }
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    seller: function(newValue, oldValue) {
      console.dir(newValue);
      console.dir(oldValue);
    }
  },
  components: {
    star,
    supports
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./style.scss">

</style>