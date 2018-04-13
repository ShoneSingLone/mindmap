<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../common/scss/mixin/mixin";

.icon {
  display: inline-block;
  vertical-align: top;
  width: 16px;
  height: 16px;
  margin-right: 4px;
  background-size: 12px 12px;
  background-repeat: no-repeat;

  &.decrease {
    @include bg-image("decrease_1");
  }

  &.discount {
    @include bg-image("discount_1");
  }

  &.guarantee {
    @include bg-image("guarantee_1");
  }

  &.invoice {
    @include bg-image("invoice_1");
  }

  &.special {
    @include bg-image("special_1");
  }
}
</style>

<template>
  <span :class="typeClass" v-if="support.type>-1"></span>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    support: {
      type: Object,
      required: true
    }
  },
  computed: {
    typeClass: function() {
      const SUPPORTS_TYPE = {
        0: "decrease",
        1: "discount",
        2: "special",
        3: "invoice",
        4: "guarantee"
      };
      return "icon " + SUPPORTS_TYPE[this.support.type];
    }
  }
};
</script>


