<template>
  <ul class="category">
    <li class="category-item" v-for="(categoryItem, index) in menuList" :key="index">
      <div class="item-wrapper">
        <a href="javascript:void(0)">{{categoryItem.title}}</a>
        <span class="iconfont">></span>
      </div>
      <div class="sub-item-wrapper">
        <ul class="item-row" v-for="(subItem, subIndex) of categoryItem.subRow" :key="subIndex">
          <li class="item-col" v-for="(col, colIndex) in subItem" :key="colIndex">
            <a href="javascript:void(0)"><img src="https://i1.mifile.cn/f/i/g/2015/cn-index/m8-80.png?width=80&height=80" alt="" srcset="">
              <span>{{col}}</span>
            </a>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'category',
  props: {
    menuList: {
      type: Array,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import "../../../assets/bootstrap/variables";

$height: 440px;
$listWidth: 15rem;

.category {
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
</style>