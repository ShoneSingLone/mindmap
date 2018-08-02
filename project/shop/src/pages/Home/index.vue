<template>
    <div class="main" id="main">
        <div class="menu-box" />
        <!--内容-->
        <sub-menu/>
        <!-- 菜单 -->
        <menu-content/>
        <carousel/>
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
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
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
</style>