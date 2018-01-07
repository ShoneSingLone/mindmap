<template>
  <div class="goods">
    <!--     menu-wrapper -->
    <ul class="menu-wrapper">
      <li class="menu-item" v-for="(item,key,index) in goods">
        <div class="text">
          <supports :support="item" style="margin: 0;"></supports>
          <span class=" border-1px"> {{item.name|stringTrim}} </span>
        </div>
      </li>
    </ul>
    <!--     menu-wrapper -->
    <!--     foods-wrapper -->
    <ul class="foods-wrapper" v-el:foods-wrapper>
      <li v-for="item in goods" class="food-list food-list-hook">
        <h1 class="title">{{item.name}}</h1>
        <ul>
          <li @click="selectFood(food,$event)" v-for="food in item.foods" class="food-item border-1px">
            <div class="icon">
              <img width="57" height="57" :src="food.icon"> </div>
            <div class="content">
              <h2 class="name">{{food.name}}</h2>
              <p class="desc">{{food.description}}</p>
              <div class="extra">
                <span class="count">月售{{food.sellCount}}份</span>
                <span>好评率{{food.rating}}%</span>
              </div>
              <div class="price">
                <span class="now">￥{{food.price}}</span>
                <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
              </div>
              <div class="cartcontrol-wrapper">
                <cartcontrol :food="food"></cartcontrol>
              </div>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <!--     foods-wrapper -->
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
  filters: {
    stringTrim: function(value) {
      return value.trim();
    }
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


