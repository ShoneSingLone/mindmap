<template>
  <section class="buy">
    <a href="#" class="button">立即购买</a>
  </section>
</template>
<script>
export default {
  name: 'buy',
  mounted () {},
  methods: {},
  computed: {},
  components: {},
  data () {
    return {}
  }
}
</script>

<style lang='scss' scoped >
.buy {
  position: relative;
  height: 5rem;
  padding: 120px 0px;
  background: url(../img/bg-screen-buy.png) no-repeat bottom center #2b333b;
  .button {
    width: 15rem;
    height: 5rem;
    line-height: 5rem;
    text-align: center;
    font-size: 1.5rem;
    color: #fff;
    border-radius: 0.25rem;
    margin: 0px auto;
    display: block;
    background-color: #f01414;
    transition: all 0.5s;
    &:hover {
      box-shadow: 0 0.6rem 0.6rem rgba(0, 0, 0, 0.5);
      transform: translate(0, -5px);
    }
  }
}
</style >