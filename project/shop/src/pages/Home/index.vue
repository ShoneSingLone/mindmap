<template>
    <div class="main" id="main">
        <div class="menu-box">
        </div>
        <!--内容-->
        <div class="sub-menu hide" id="sub-menu">
            <div class="inner-box" v-for="(menuItem, index) in menuList" :key="index">
                <div class="sub-inner-box">
                    <div class="title">{{menuItem.title}}</div>
                    <div v-for="(row, subIndex) of menuItem.subRow" :key="subIndex">
                        <div class="sub-row" v-for="(col, colIndex) in row" :key="colIndex">
                            <span class="bold mr10" v-if="colIndex===0">{{col}}</span>
                            <a href="javascript:void(0)" v-if="colIndex>0">{{col}}</a>
                            <span class="ml10 mr10" v-if="(colIndex+1)!==row.length&&colIndex>0">|</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 菜单 -->
        <div class="menu-content" id="menu-content">
            <div class="menu-item" v-for="(subMenu, index) in menuList" :key="index">
                <a href="javascript:void(0)">
                    <span>{{subMenu.title}}</span>
                    <i class="icon">&#xe665;</i>
                </a>
            </div>
        </div>

        <!-- carousel -->
        <div class="banner" id="banner">
            <a href="">
                <div class="banner-slide slide1 slide-active"></div>
            </a>
            <a href="">
                <div class="banner-slide slide2"></div>
            </a>
            <a href="">
                <div class="banner-slide slide3"></div>
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
/*
let timer = null
let index = 0
let pics = byId('banner').getElementsByTagName('div')
let dots = byId('dots').getElementsByTagName('span')
let size = pics.length
let prev = byId('prev')
let next = byId('next')
let menuItems = byId('menu-content').getElementsByTagName('div')
let subMenu = byId('sub-menu')
let subItems = subMenu.getElementsByClassName('inner-box')

function byId (id) {
  return typeof id === 'string' ? document.getElementById(id) : id
}

// 清除定时器,停止自动播放
function stopAutoPlay () {
  if (timer) {
    clearInterval(timer)
  }
}

// 图片自动轮播
function startAutoPlay () {
  timer = setInterval(function () {
    index++
    if (index >= size) {
      index = 0
    }
    changeImg()
  }, 3000)
}

function changeImg () {
  for (var i = 0, len = dots.length; i < len; i++) {
    dots[i].className = ''
    pics[i].style.display = 'none'
  }
  dots[index].className = 'active'
  pics[index].style.display = 'block'
}

function slideImg () {
  var main = byId('main')
  var banner = byId('banner')
  var menuContent = byId('menu-content')
  main.onmouseover = function () {
    stopAutoPlay()
  }
  main.onmouseout = function () {
    startAutoPlay()
  }
  main.onmouseout()

  // 点击导航切换
  for (var i = 0, len = dots.length; i < len; i++) {
    dots[i].id = i
    dots[i].onclick = function () {
      index = this.id
      changeImg()
    }
  }

  // 下一张
  next.onclick = function () {
    index++
    if (index >= size) index = 0
    changeImg()
  }

  // 上一张
  prev.onclick = function () {
    index--
    if (index < 0) index = size - 1
    changeImg()
  }

  // 菜单
  for (var m = 0, mlen = menuItems.length; m < mlen; m++) {
    menuItems[m].setAttribute('data-index', m)
    menuItems[m].onmouseover = function () {
      subMenu.className = 'sub-menu'
      var idx = this.getAttribute('data-index')
      for (var j = 0, jlen = subItems.length; j < jlen; j++) {
        subItems[j].style.display = 'none'
        menuItems[j].style.background = 'none'
      }
      subItems[idx].style.display = 'block'
      menuItems[idx].style.background = 'rgba(0,0,0,0.1)'
    }
  }

  subMenu.onmouseover = function () {
    this.className = 'sub-menu'
  }

  subMenu.onmouseout = function () {
    this.className = 'sub-menu hide'
  }

  banner.onmouseout = function () {
    subMenu.className = 'sub-menu hide'
  }

  menuContent.onmouseout = function () {
    subMenu.className = 'sub-menu hide'
  }
}

slideImg() */

import SubMenu from './components/SubMenu'
import MenuContent from './components/MenuContent'
import Carousel from './components/Carousel'

export default {
  name: 'index',
  data () {
    return {
      menuList: [
        {
          title: '手机、配件',
          subRow: [
            ['手机通讯：', '手机', '手机维修', '以旧换新'],
            ['手机配件：', '手机壳', '手机存储卡', '数据线', '充电器', '电池'],
            ['运营商：', '中国联通', '中国移动', '中国电信'],
            ['智能设备：', '智能手环', '智能家居', '智能手表', '其他配件'],
            ['娱乐：', '耳机', '音响', '收音机', '麦克风']
          ]
        },
        {
          title: '电脑',
          subRow: [
            ['电脑：', '笔记本', '平板', '一体机'],
            [
              '电脑配件：',
              '显示器',
              'CPU',
              '主板',
              '硬盘',
              '电源',
              '显卡',
              '其它配件'
            ],
            ['游戏设备：', '游戏机', '耳机', '游戏软件'],
            ['网络产品：', '路由器', '网络机顶盒', '交换机', '存储卡', '网卡'],
            [
              '外部产品：',
              '鼠标',
              '键盘',
              'U盘',
              '移动硬盘',
              '鼠标垫',
              '电脑清洁'
            ]
          ]
        },
        {
          title: '家用电器',
          subRow: [
            ['电视：', '国产品牌', '韩国品牌', '欧美品牌'],
            ['空调：', '柜式', '中央', '壁挂式'],
            ['冰箱：', '多门', '对开门', '三门', '双门'],
            ['洗衣机：', '滚筒式洗衣机', '迷你洗衣机', '洗烘一体机'],
            ['厨房电器：', '油烟机', '洗碗机', '燃气灶']
          ]
        },
        {
          title: '家具',
          subRow: [
            ['家纺：', '被子', '枕头', '四件套', '床垫'],
            ['灯具：', '台灯', '顶灯', '节能灯', '应急灯'],
            ['厨具：', '烹饪锅具', '餐具', '菜板刀具'],
            ['家装：', '地毯', '沙发垫套', '装饰字画', '照片墙', '窗帘'],
            ['生活日用：', '收纳用品', '浴室用品', '雨伞雨衣']
          ]
        }
      ]
    }
  },
  components: {
    'sub-menu': SubMenu,
    'menu-content': MenuContent,
    carousel: Carousel
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' src="./style.scss">
/* <style lang='scss'>
 */
</style>