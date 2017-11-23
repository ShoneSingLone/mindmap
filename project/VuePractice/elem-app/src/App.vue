<template>
  <main id="app">
    <div class="header">
      <v-header></v-header>
    </div>
    <ul class="tab">
      <li class="tab-item">
        <router-link to="/login">商品</router-link>
      </li>
      <li class="tab-item">
        <router-link to="/login">评论</router-link>
      </li>
      <li class="tab-item">
        <router-link to="/login">商家</router-link>
      </li>
    </ul>
    <div class="content">
      <v-content></v-content>
    </div>
  </main>
</template>

<script>
import header from "@/components/header/header";
import tab from "@/components/header/header";
import content from "@/components/header/header";

export default {
  components: {
    "v-header": header,
    "v-tab": tab,
    "v-content": content
  }
};
</script>

<style scoped lang="scss">
#app {
  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding: unset;
    margin: unset;
    .tab-item {
      flex: 1;
      list-style: none;
      text-align: center;
    }
  }
}

a {
  text-decoration: none;
  &:hover {
    color: #62b982;
    border-bottom: 1px solid #62b982;
  }
  &:link {
    color: #62b982;
  }
  &:visited {
    color: #62b982;
  }
}
</style>
