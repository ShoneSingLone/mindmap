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
$main-color: #62b982;
$active-color: #387c50;
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
