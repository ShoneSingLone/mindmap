
<template>

<div class="goods">
<div class="menu-wrapper">
  <ul>
    <li v-for="(item,key,index) in goods" 　class="menu-item">
      <div class="text border-1px">
        suppor
        {{item.name}} 
        </div>
    </li>
  </ul>
</div>

<div class="foods-wrapper"></div>
</div>
</template>


<script type="text/ecmascript-6">
import supports from "@c/supports/supports";

const ERR_OK = 0,
  STATUS_SUCCESS = 200;

export default {
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      goods: [],
      listHeight: [],
      scrollY: 0,
      selectedFood: {}
    };
  },
  beforeCreate() {
    console.log("Goods.vue beforeCreate");

    this.axios
      .get("https://shonesinglone.leanapp.cn/elem/goods")
      .then(response => {
        if (STATUS_SUCCESS === response.status) {
          this.goods = response.data;
          console.log(this.goods);
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  components: {
    supports
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only --> 
<style scoped lang="scss" src="./style.scss">

</style>


