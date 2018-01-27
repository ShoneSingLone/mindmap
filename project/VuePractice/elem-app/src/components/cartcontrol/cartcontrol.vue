<template>
<div class="cartcontrol">
  <transition name="roll">
    <button class="cart-decrease icon-remove_circle_outline" v-if="food.count>0" @click.stop.prevent="foodRemove"></button>
  </transition>
    <div class="cart-count" v-if="food.count>0">{{food.count}}</div>
    <button class="cart-add icon-add_circle" @click.stop.prevent="foodAdd"></button>
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