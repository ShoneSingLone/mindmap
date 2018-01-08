<template>
  <ul class="tab">
    <li class="tab-item">
      <router-link to="{ name: 'goods', params: { userId: 123 }}">商品</router-link>
    </li>
    <li class="tab-item">
      <router-link to="{ name: 'ratings', params: { userId: 123 }}">评论</router-link>
    </li>
    <li class="tab-item">
      <router-link to="{ name: 'seller', params: { userId: 123 }}">商家</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "v-tab",
  data() {
    return {
      userId: "shone"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$main-color: #62b982;

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
    & > a {
      display: block;
      text-decoration: none;
      &:hover {
        color: $main-color;
        // border-bottom: 2px solid $main-color;
      }
      &:link {
        color: $main-color;
      }
      &:visited {
        color: $main-color;
      }
    }
  }
}
</style>
