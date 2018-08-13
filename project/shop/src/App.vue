<template>
  <div id="app" ref="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {}
  },
  mounted () {}
}
</script>

<style lang='scss'>
@import "./assets/bootstrap/base";
@import "./assets/style/animate";
@import "./assets/style/glyphicon";

@font-face {
  font-family: "iconfont";
  src: url("./assets/fonts/iconfont.eot");
  src: url("./assets/fonts/iconfont.eot") format("embedded-opentype"),
    url("./assets/fonts/iconfont.woff") format("woff"),
    url("./assets/fonts/iconfont.ttf") format("truetype"),
    url("./assets/fonts/iconfont.svg#iconfont") format("svg");
}

@font-face {
  font-family: "Glyphicons Halflings";
  src: url("./assets/fonts/bootstrap/glyphicons-halflings-regular.eot");
  src: url("./assets/fonts/bootstrap/glyphicons-halflings-regular.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/bootstrap/glyphicons-halflings-regular.woff2")
      format("woff2"),
    url("./assets/fonts/bootstrap/glyphicons-halflings-regular.woff")
      format("woff"),
    url("./assets/fonts/bootstrap/glyphicons-halflings-regular.ttf")
      format("truetype"),
    url("./assets/fonts/bootstrap/glyphicons-halflings-regular.svg#glyphicons_halflingsregular")
      format("svg");
}

body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

// animate
@include swing();
@include rock();
</style>
