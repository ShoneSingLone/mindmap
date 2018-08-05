<template>
  <div class="menu-content" id="menu-content" >
    <div class="menu-item" v-for="item in menuList">
      <a href="javascript:void(0)">
        <span>{{item}}</span>
        <i class="icon">&#xe665;</i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuContent',
  data () {
    return {
      menuList: ['手机、配件', '电脑', '家用电器', '家具']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
</style>