<template>
  <div class="carousel">
    <div class="banner" id="banner">
      <a href="">
        <div class="banner-slide slide1 slide-active"></div>
      </a>
      <a href="">
        <div class="banner-slide slide2"></div>
      </a>
      <a href="">
        <div class="banner-slide slide3"></div>
      </a>
    </div>
    <a href="javascript:void(0)" class="button prev" id="prev"></a>
    <a href="javascript:void(0)" class="button next" id="next"></a>

    <div class="dots" id="dots">
      <span class="active"></span>
      <span></span>
      <span></span>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Carousel',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
</style>