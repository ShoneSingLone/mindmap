<style scoped lang="scss">
.detail {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  //   width: 100%;
  //   height: 100%;
  overflow: auto;
  transition: all 0.5s;
  backdrop-filter: blur(10px);
  background: rgba(7, 17, 28, 0.8);
}
</style>

<template>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    isShowDetail: {
      type: Boolean
    }
  },

  data() {
    return { showDetail: false };
  },
  computed: {
    asdfasdfasdf: function() {
      return this.isClickDetail;
    }
  },
  methods: {
    toggleDetail: function() {
      this.isShowDetail = !this.isShowDetail;
    }
  }
};
</script>
  
