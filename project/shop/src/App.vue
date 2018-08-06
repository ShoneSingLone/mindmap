<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang='scss'>
@import "./assets/bootstrap/base";

@font-face {
  font-family: "iconfont";
  src: url("./assets/font/iconfont.eot");
  src: url("./assets/font/iconfont.eot") format("embedded-opentype"),
    url("./assets/font/iconfont.woff") format("woff"),
    url("./assets/font/iconfont.ttf") format("truetype"),
    url("./assets/font/iconfont.svg#iconfont") format("svg");
}

body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
