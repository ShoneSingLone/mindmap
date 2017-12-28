<template>
  <main id="app">
    <div class="header">
      <v-header :seller="seller"></v-header>
    </div>
    <ul class="tab border-1px">
      <li class="tab-item">
        <router-link :to="{ name: 'goods', params: { userId: 123 }}">商品</router-link>
      </li>
      <li class="tab-item">
        <router-link :to="{ name: 'ratings', params: { userId: 123 }}">评论</router-link>
      </li>
      <li class="tab-item">
        <router-link :to="{ name: 'seller', params: { userId: 123 }}">商家</router-link>
      </li>
    </ul>
    <router-view></router-view>

    <div class="content">
      <v-content></v-content>
    </div>
  </main>
</template>

<script>
import "@com/scss/style.scss";
import header from "@c/header/header";
import tab from "@c/tab/tab";
import content from "@c/content/header";

export default {
  data() {
    return {
      seller: {}
    };
  },
  beforeCreate() {
    console.log("App beforeCreate");
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
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  created() {
    console.log("App created");
  },
  components: {
    "v-header": header,
    "v-tab": tab,
    "v-content": content
  }
};
</script>

<style lang="scss">
@import "./common/scss/mixin/mixin";

#app {
  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    @include border-top-1px($main-color);
    @include border-1px($main-color);
    padding: unset;
    margin: unset;
    .tab-item {
      flex: 1;
      list-style: none;
      text-align: center;
      & > a {
        display: block;
        text-decoration: none;
        color: $main-color;
      }
      .router-link-active {
        color: $active-color;
        font-weight: bold;
        border-bottom: 2px solid $active-color;
      }
    }
  }
}
</style>
