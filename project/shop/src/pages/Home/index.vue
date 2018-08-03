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
            <li class="item-col" v-for="(col, colIndex) in subItem" :key="colIndex">
              <a href="javascript:void(0)"><img src="./img/m8-80.png" alt="" srcset="">
                <span>{{col}}</span>
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>

    <!-- carousel -->
    <div class="banner" id="banner">
      <a href="">
        <div class="slide slide1 active"></div>
      </a>
      <a href="">
        <div class="slide slide2"></div>
      </a>
      <a href="">
        <div class="slide slide3"></div>
      </a>
    </div>
    <a href="javascript:void(0)" class="button prev" id="prev"></a>
    <a href="javascript:void(0)" class="button next" id="next"></a>
    <div class="dots" id="dots">
      <span class="active"></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    menuMouseleave (index) {
      console.log('menuMouseleave', index)
      this.currentMenuItemIndex = null
    },
    menuMouseenter (index) {
      this.currentMenuItemIndex = index
    },
    subMenuMouseleave () {
      console.log('subMenuMouseleave')
      this.isInSubMenu = false
    },
    subMenuMouseenter () {
      this.isInSubMenu = true
    }
  },
  computed: {
    isSubMenuShow () {
      if (
        this.isInSubMenu ||
        this.currentMenuItemIndex ||
        this.currentMenuItemIndex === 0
      ) {
        return true
      }
      return false
    },
    isInnerBoxShow () {
      if (this.currentMenuItemIndex || this.currentMenuItemIndex === 0) {
        return true
      }
      return false
    }
  },
  components: {},
  data () {
    return {
      currentMenuItemIndex: undefined,
      isInSubMenu: false,
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
<style lang='scss' src="./style.scss">
</style >