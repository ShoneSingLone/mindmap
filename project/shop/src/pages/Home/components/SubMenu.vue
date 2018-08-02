<template>
  <div class="sub-menu hide" id="sub-menu">
    <inner-box/>
  </div>
</template>

<script>
import InnerBox from './InnerBox'

export default {
  name: 'SubMenu',
  data () {
    return {}
  },
  components: {
    'inner-box': InnerBox
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
</style>