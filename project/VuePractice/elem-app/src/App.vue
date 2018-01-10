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
      <!-- <v-content></v-content> -->
    </div>
  </main>
</template>

<script>
import "@com/scss/style.scss";
import header from "@c/header/header";
import tab from "@c/tab/tab";
import content from "@c/content/content";
import { mapGetters, mapActions } from "vuex";
import { seller as MT } from "./store/mutation-types";
import { seller as AT } from "./store/action-types";

export default {
  created() {
    // init seller data
    this.$store.dispatch(AT.init);
  },
  computed: {
    ...mapGetters(["seller"])
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
    // @include border-top-1px($main-color);
    @include border-top-1px(rgba(7, 17, 27,0.1));
    @include border-1px(rgba(7, 17, 27,0.1));
    padding: unset;
    margin: unset;
    .tab-item {
      flex: 1;
      list-style: none;
      text-align: center;
      & > a {
        display: block;
        text-decoration: none;
        color: rgb(77, 85, 93);
      }
      .router-link-active {
        color: rgb(240, 20, 20);
        font-weight: bold;
        // border-bottom: 2px solid rgb(240, 20, 20);
      }
    }
  }
}
</style>
