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

@font-face {
  font-family: "iconfont"; /* project id 345452 */
  src: url("//at.alicdn.com/t/font_bqfikrcdba4kuik9.eot");
  src: url("//at.alicdn.com/t/font_bqfikrcdba4kuik9.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_bqfikrcdba4kuik9.woff") format("woff"),
    url("//at.alicdn.com/t/font_bqfikrcdba4kuik9.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_bqfikrcdba4kuik9.svg#iconfont") format("svg");
}
html,
body,
app {
  height: 100%;
  overflow: hidden;
}
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

// animate
@include swing();
@include rock();
</style>
