<template>
  <div class="food" v-show="isShowDetail">
    <div class="food-content">
      <div class="image-header">
        <img :src="food.image" alt="image">
        <div class="back-wrapper">
          <i class="icon-close back" @click="closeFood"></i>
        </div>
      </div>
    </div>
    <ol>
      <li v-for="(item,key) of food">
        <h5>{{key}}: </h5>
          <div style="margin-left:10px;width='100%'">{{item}}</div>
      </li>
    </ol>
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