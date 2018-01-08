<template>
  <div class="goods">
    <!--     menu-wrapper -->
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li class="menu-item" v-for="(item,index) in goods" :class="{'current':currentIndex===index}" :data-id="index" @click="selectMenu(index,$event)"
          ref="menuList">
          <div class="text">
            <supports :support="item" style="margin: 0;"></supports>
            <span class=" border-1px"> {{item.name|stringTrim}} </span>
          </div>
        </li>
      </ul>
    </div>
    <!--     menu-wrapper -->
    <!--     foods-wrapper -->
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <li v-for="item in goods" class="food-list food-list-hook" ref="foodList">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li @click="selectFood(food,$event)" v-for="food in item.foods" class="food-item border-1px">
              <div class="icon">
                <img :src="food.icon"> </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc" v-if="food.description">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">{{food.price|foodPrice}}</span>
                  <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <!-- <cartcontrol :food="food"></cartcontrol> -->
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <!--     foods-wrapper -->
</template>

<script type="text/ecmascript-6">
import supports from "@c/supports/supports";
import bScroll from "better-scroll";

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
    },
    foodPrice: function(value) {
      return "￥" + value;
    }
  },
  beforeCreate() {
    console.log("Goods.vue beforeCreate");
    this.axios
      .get("https://shonesinglone.leanapp.cn/elem/goods")
      .then(response => {
        if (STATUS_SUCCESS === response.status) {
          this.goods = response.data;
          this.$nextTick(() => {
            this.initScroll();
            this.calulateHeight();
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    initScroll() {
      this.menuScroll = new bScroll(this.$refs.menuWrapper, {
        click: true
      });
      this.foodsScroll = new bScroll(this.$refs.foodsWrapper, {
        click: true,
        probeType: 3
      });

      this.foodsScroll.on("scroll", pos => {
        this.scrollY = Math.abs(Math.round(pos.y));
      });
    },
    selectMenu(index, event) {
      if (!event._constructed) {
        return;
      }
      let foodList = this.$refs.foodList;
      let el = foodList[index];
      this.foodsScroll.scrollToElement(el, 300);
    },
    selectFood(food, event) {
      console.log(food);
    },
    calulateHeight() {
      let foodList = this.$refs.foodsWrapper.getElementsByClassName(
        "food-list-hook"
      );
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i];
        height += item.clientHeight;
        this.listHeight.push(height);
      }
    }
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i;
        }
      }
      return 0;
    }
  },
  components: {
    supports
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only --> 
<style scoped lang="scss" src="./style.scss">

</style>


