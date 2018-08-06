<template>
  <div class="main" id="main">
    <ul class="category-list">
      <li class="category-item" v-for="(categoryItem, index) in menuList" :key="index">
        <div class="item-wrapper">
          <a href="javascript:void(0)">{{categoryItem.title}}</a>
          <span class="iconfont">></span>
        </div>
        <div class="sub-item-wrapper">
          <ul class="item-row" v-for="(subItem, subIndex) of categoryItem.subRow" :key="subIndex">
            <li class="item-col" v-for="(col, colIndex) in subItem" :key="colIndex" @click="goTo(col)">
              <a href="javascript:void(0)"><img src="./img/m8-80.png" alt="" srcset="">
                <span>{{col}}</span>
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <!-- carousel -->
    <div class="banner" id="banner" v-on:mouseover="carousel.mouseover" v-on:mouseout="carousel.mouseout">
      <a href="" v-for="(slideItem, index) in carousel.slides" :key="index">
        <div :class="['slide',slideItem.imgClass, (carousel.currentSlide===index?'active':'')]"></div>
      </a>
    </div>
    <a href="javascript:void(0)" class="button prev" id="prev" @click="carousel.clickPrev"></a>
    <a href="javascript:void(0)" class="button next" id="next" @click="carousel.clickNext"></a>
    <div class="dots" id="dots">
      <span :class="{active:carousel.currentSlide === index}" v-for="(dotItem, index) in carousel.slides" :key="index" @click="carousel.clickDots(index)"></span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'index',
  metaInfo: {
    title: '首页', // set a title
    meta: [
      {
        // set meta
        name: 'keyWords',
        content: '首页入口'
      }
    ]
  },
  mounted () {
    this.carousel.startAutoPlay()
  },
  methods: {
    goTo (item) {
      this.$router.push({
        name: 'xxr',
        params: item
      })
    }
  },
  computed: {},
  components: {},
  data () {
    return {
      isInSubMenu: false,
      menuCurrentItemIndex: undefined,
      carousel: (function (vm) {
        let slides = [
          { imgClass: 'slide1' },
          { imgClass: 'slide2' },
          { imgClass: 'slide0' },
          { imgClass: 'slide2' },
          { imgClass: 'slide1' },
          { imgClass: 'slide2' },
          { imgClass: 'slide0' }
        ]
        function clickNext () {
          vm.carousel.currentSlide++
          if (vm.carousel.currentSlide >= slides.length) {
            vm.carousel.currentSlide = 0
          }
        }
        function clickPrev () {
          vm.carousel.currentSlide--
          if (vm.carousel.currentSlide <= -1) {
            vm.carousel.currentSlide = slides.length - 1
          }
        }

        function clickDots (index) {
          vm.carousel.currentSlide = index
        }

        // 图片自动轮播
        let timer
        // handle event
        function mouseover () {
          stopAutoPlay()
        }
        function mouseout () {
          startAutoPlay()
        }
        function startAutoPlay () {
          timer = setInterval(function () {
            clickNext()
          }, 1000 * 3)
        }
        // 清除定时器,停止自动播放
        function stopAutoPlay () {
          if (timer) {
            clearInterval(timer)
          }
        }
        return {
          currentSlide: 0,
          slides,
          clickPrev,
          clickNext,
          clickDots,
          mouseover,
          mouseout,
          startAutoPlay
        }
      })(this),
      menuList: [
        {
          title: '手机、配件',
          subRow: [
            ['手机', '手机维修', '以旧换新'],
            ['手机壳', '手机存储卡', '数据线', '充电器'],
            ['中国联通', '中国移动', '中国电信'],
            ['智能手环', '智能家居', '智能手表'],
            ['耳机', '音响', '收音机', '麦克风']
          ]
        },
        {
          title: '电脑',
          subRow: [
            ['笔记本', '平板', '一体机'],
            ['显示器', 'CPU', '主板', '硬盘'],
            ['游戏机', '耳机', '游戏软件'],
            ['路由器', '网络机顶盒', '交换机', '存储卡'],
            ['鼠标', '键盘', 'U盘', '移动硬盘']
          ]
        },
        {
          title: '家用电器',
          subRow: [
            ['电视：', '国产品牌', '韩国品牌', '欧美品牌'],
            ['空调：', '柜式', '中央', '壁挂式'],
            ['冰箱：', '多门', '对开门', '双门'],
            ['洗衣机：', '滚筒式洗衣机', '迷你洗衣机', '洗烘一体机'],
            ['厨房电器：', '油烟机', '洗碗机', '燃气灶']
          ]
        },
        {
          title: '家具',
          subRow: [
            ['被子', '枕头', '四件套', '床垫'],
            ['台灯', '顶灯', '节能灯', '应急灯'],
            ['厨具：', '烹饪锅具', '餐具', '菜板刀具'],
            ['家装：', '地毯', '沙发垫套', '装饰字画'],
            ['生活日用：', '收纳用品', '浴室用品', '雨伞雨衣']
          ]
        }
      ]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
@mixin text-shadow {
  text-shadow: 5px 5px 5px rgba(53, 24, 24, 0.5);
}

@mixin box-shadow {
  box-shadow: 5px 5px 5px rgba(53, 24, 24, 0.5);
  transition: all 0.5s;
}

$height: 440px;
$listWidth: 244px;

ul.category-list {
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  height: $height;
  width: $listWidth;
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;

  li.category-item {
    &:hover {
      cursor: pointer;
      background: #ff6700;
      color: #fff;

      div.sub-item-wrapper {
        display: flex;
        flex-flow: row nowrap;
        height: $height;
        position: absolute;
        left: $listWidth;
        top: 0;
        z-index: 2;
        border: 1px solid #e0e0e0;
        border-left: 0;

        @include box-shadow;

        ul.item-row {
          display: flex;
          flex-flow: column wrap;
          height: $height;
          justify-content: flex-start;
          background-color: #f0f0f0;

          li.item-col {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 5px 5px;
            height: 100px;
            width: 140px;
            transition: all 1s;

            &:hover {
              background-color: #fff;

              @include box-shadow;

              z-index: 2;
            }

            a {
              color: #000;
              padding: 0;
              display: flex;
              align-items: center;

              img {
                height: 20px;
                width: 20px;
              }
            }
          }
        }
      }
    }
  }

  li.category-item {
    div.item-wrapper {
      &:hover {
        @include box-shadow;
      }

      position: relative;

      @include text-shadow;

      padding-left: 3rem;

      .iconfont {
        border-radius: 50%;
        font-weight: 900;
        position: absolute;
        top: 25px;
        right: 2rem;
      }
    }

    div.sub-item-wrapper {
      display: none;
    }

    a {
      position: relative;
      color: #fff;
      line-height: 4rem;
      text-decoration: none;

      &:link,
      &:visited {
        color: #fff;
      }
    }
  }
}

body {
  font-family: "微软雅黑";
  color: #14191e;
}

.main {
  width: 1200px;
  height: $height;
  margin: 30px auto;
  position: relative; //   overflow: hidden;
}

.banner {
  //   outline: 1px solid #f01414;
  width: 1200px;
  height: $height;
  // overflow: hidden;
  position: relative;

  .slide {
    position: absolute;
    width: 1200px;
    height: $height;
    background-repeat: no-repeat;
    background-size: 100%;
    float: left;
    opacity: 0;
    transition: all 2s 1s;

    &.active {
      opacity: 1;
      transition: all 1s;
    }

    &.slide1 {
      background-image: url(./img/bg1.jpg);
    }

    &.slide2 {
      background-image: url(./img/bg2.jpg);
    }

    &.slide0 {
      background-image: url(./img/bg3.jpg);
    }
  }
}

.button {
  position: absolute;
  top: 50%;
  left: $listWidth;
  height: 80px;
  width: 40px;
  margin-top: -40px;
  background: url(./img/arrow.png) center center no-repeat;

  &:hover {
    background-color: #333;
    opacity: 0.8;
    filter: alpha(opacity = 80);
  }

  &.prev {
    transform: rotate(180deg);
  }

  &.next {
    left: auto;
    right: 0;
  }
}

.dots {
  position: absolute;
  bottom: 24px;
  right: 0;
  text-align: right;
  padding-right: 24px;
  line-height: 12px;

  span {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-left: 8px;
    background-color: rgba(7, 17, 27, 0.4);
    cursor: pointer;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8) inset;

    &.active {
      box-shadow: 0 0 0 2px rgba(7, 17, 27, 0.4) inset;
      background-color: #ffffff;
    }
  }
}

.show {
  display: block;
}

.hide {
  display: none;
}
</style >