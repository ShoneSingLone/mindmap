<template>
  <section class="buy">
    <a href="#" class="button">Buy It!</a>
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

<style lang='scss' scoped>
@import "../../../assets/bootstrap/variables";

.buy {
  position: relative;
  // outline: inset 1rem solid rebeccapurple;
  height: 12.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
    background-color: $main-color;
    transition: all 0.5s;
    &:hover {
      box-shadow: 0 0.6rem 0.6rem rgba(0, 0, 0, 0.5);
      background-color: darken($main-color, 10%);
      @include text-shadow();
      @include box-shadow();
    }
  }
}
</style >