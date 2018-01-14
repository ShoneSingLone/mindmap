<template>
    <div class="food" v-show="isShowDetail" @click="closeFood">
        勒是food
    </div>
</template>

<script type="text/ecmascript-6">
import vue from "vue";
import { goods as MT } from "@/store/mutation-types";
import { goods as AT } from "@/store/action-types";

export default {
  props: {
    food: {
      type: Object
    }
  },
  data() {
    return {};
  },
  computed: {
    isShowDetail: function() {
      return this.$store.state.goods.isShowFoodDetail;
    }
  },
  methods: {
    closeFood: function() {
      this.$store.commit(MT.setShowFoodFlag, { isShowFoodDetail: false });
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./style.scss">

</style>