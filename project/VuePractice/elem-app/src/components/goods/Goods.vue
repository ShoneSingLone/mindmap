
<template>

<div class="goods" v-if="false">
  <div class="menu-wrapper" >
    <ul>
      <li v-for="(item,key,index) in goods">
        <span class="text">
          <span v-show="item.type>0"></span>
        </span>
        {{item.name}}
      </li>
    </ul>
  </div>
  <div class="foods-wrapper"></div>
</div>
</template>

<script type="text/ecmascript-6">
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
    let thisCompoent = this;

    thisCompoent.axios
      .get("https://shonesinglone.leanapp.cn/elem/goods")
      .then(response => {
        if (STATUS_SUCCESS === response.status) {
          thisCompoent.goods = response.data;
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only --> 
<style scoped lang="scss" src="./style.scss">

</style>


