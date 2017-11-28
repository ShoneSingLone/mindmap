<template>

  <div class="header" v-if="seller">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" heifht="64" :src="seller.avatar" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}} </span>
        </div>
      </div>
      <div class="description">
        {{seller.description}}/{{seller.deliveryTime}}分钟送达
      </div>
      <div class="support">
        <span class="icon"></span>
        <span class="text">{{seller.supports[0].description}}</span>
      </div>
    </div>
  </div>

  <div v-else>
    Now you don't
  </div>

</template>

<script>
export default {
  created() {
    console.log("header created");
    let thisCompoent = this;
    const requestOption = {
      headers: {
        "X-LC-Id": "p82PkF9h8rjUrNEwyioydpp4-gzGzoHsz",
        "X-LC-Key": "y24Ms9w7tq0zswLMdehwK2km",
        "Content-Type": "application/json"
      }
    };
    const jsonDataId = {
      seller: "5a1986508d6d81006271d0fb",
      ratings: "5a1986508d6d81006271d0fb",
      goods: "5a1986508d6d81006271d0fa"
    };

    thisCompoent.axios
      .get(
        "https://p82pkf9h.api.lncld.net/1.1/classes/json/" + jsonDataId.seller,
        requestOption
      )
      .then(function(response) {
        if (200 === response.status) {
          thisCompoent.seller = response.data.data_contents[0];
          console.log(thisCompoent.seller);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  name: "v-header",
  data() {
    return {
      seller: undefined
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../common/scss/mixin/mixin";

.header {
  color: #fff;
  background: #000;
  .content-wrapper {
    padding: 24px 12px 18px 24px;
    // font-size: 0;
    .avatar {
      // display: inline-block;
    }
    .content {
      // display: inline-block;
      margin-left: 16px;
      font-size: 14px;
      .title {
        margin: 2px 0 8px 0;
        .brand {
          // display: inline-block;
          width: 30px;    
          height: 18px;
          @include bg-image("brand");
        }
      }
    }
    .description {
      // display: inline-block;
    }
  }
}
</style>
