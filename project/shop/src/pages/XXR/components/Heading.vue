<template>
  <header class="header-wrapper">
    <a href="javascript:void(0);" class="logo" @click="toggle"></a>
    <nav class="nav">
      <a href="javascript:void(0);" :class="['item', 'item_i_'+(index+1),currentNavItem===index?'active':'']" v-for="(navItem, index) in navItems" :key="index">{{navItem}}</a>
      <a href="javascript:void(0);" class="item item_custom_button">立即购买 {{windowScrollY}}</a>
      <div class="item-tip" :class="[show?'left20':'']"></div>
    </nav>

  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'section1',
  mounted () {
    debugger
    console.log(this)
  },
  methods: {
    toggle () {
      debugger
      this.show = !this.show
      this.$router.push({
        name: 'home'
      })
    }
  },
  computed: {
    ...mapGetters(['windowScrollY'])
  },
  components: {},
  props: ['navItems', 'currentNavItem'],
  data () {
    return { show: true }
  }
}
</script>

<style lang='scss' scoped>
@import "../../../assets/bootstrap/variables";
@import "../base";

.header-wrapper {
  // outline: 0.25rem solid rebeccapurple;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 2;
  height: 4rem;
  background-color: #fafafa;
  color: #292e35;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  // justify-content: flex-start;
  align-items: center;
  min-width: 800px;
  @include box-shadow();

  .logo {
    height: 40px;
    width: 40px;
    margin-left: 1.5rem;
    background: url("../img/logo.png") center center no-repeat;
    background-color: $main-color;
    display: block;
    font-size: 18px;
    line-height: 40px;
  }

  .nav {
    // outline: 0.25rem solid cyan;
    position: relative;
    margin-right: 0.6rem;
    .item {
      padding: 0 0.75rem;
      font-size: 14px;
      display: inline-block;
      width: 60px;
      text-align: center;
      line-height: 40px;
      &:hover {
        color: $main-color;
      }
    }

    .item_custom_button {
      color: #fff;
      background: $main-color;
      width: 4rem;
      margin: 0 1.5rem;
      border-radius: 0.25rem;
      &:hover {
        color: #fff;
        background: darken($main-color, 10%);
      }
    }
    .item-tip {
      position: absolute;
      width: 60px;
      height: 2px;
      background: red;
      left: 20px;
      bottom: -2px;
      transition: all 2s;
      &.left20 {
        left: 2rem;
        transition: all 2s ease-in;
        width: 2rem;
      }
    }
  }
  .active {
    color: $main-color;
  }
}
</style>