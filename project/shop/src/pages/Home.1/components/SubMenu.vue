<template>
  <div class="menu hide" id="menu">
    <inner-wrapper/>
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
    'inner-wrapper': InnerBox
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
</style>