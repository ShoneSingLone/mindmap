<template>
<div class="cartcontrol">
  <transition name="roll">
    <div class="cart-decrease icon-remove_circle_outline" v-if="food.count>0" @click.stop.prevent="foodRemove"></div>
  </transition>
    <div class="cart-count" v-if="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click.stop.prevent="foodAdd"></div>
</div>
</template>

<script type="text/ecmascript-6">
import vue from "vue";
export default {
  props: {
    food: {
      type: Object
    }
  },
  created() {},
  methods: {
    foodAdd(event) {
      // debugger;
      // if (!event._constructed) {
      //   return;
      // }
      if (!this.food.count) {
        this.$set(this.food, "count", 1);
      } else {
        this.food.count++;
      }
    },
    foodRemove(event) {
      this.food.count--;
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./style.scss">

</style>