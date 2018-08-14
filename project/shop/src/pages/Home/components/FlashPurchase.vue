<template>
  <div class="flashPurchase-warpper">
    <div class="box-hd">
      <h2 class="title ">闪购</h2>
      <div class="more ">
        <div class="control-group">
          <a class="control prev disabled " href="javascript: void(0); ">
            <span class="glyphicon  glyphicon-chevron-left"></span>
          </a>
          <a class="control next " href="javascript: void(0); ">
            <span class="glyphicon glyphicon glyphicon-chevron-right"></span>
          </a>
        </div>
      </div>
    </div>

    <div class="container ">
      <ul class="flashPurchase-countdown ">
        <li class="rainbow-item flashPurchaseInfo ">
          <div class="time-title alshRound ">18:00 场</div>
          <img src="//i1.mifile.cn/f/i/2018/mihome/flashpurchase.png ">
          <div class="sub ">距离结束还有</div>
          <div class="countdown ">
            <div class="box ">00</div>
            <div class="dosh ">:</div>
            <div class="box ">15</div>
            <div class="dosh ">:</div>
            <div class="box ">34</div>
          </div>
        </li>
      </ul>

      <div class="carousel-wrapper ">
        <ul class="flashPurchase-list ">
          <li class="item rainbow-item-1 " v-for="(flashPurchase, index) in flashPurchaseList " :key="index ">
            <div class="content ">
              <div class="bg "></div>
              <a class="thumb exposure "> <img :src="flashPurchase.imgSrc " alt=" "> </a>
              <h3 class="title ">
                <a href="javascript:void(0) ">{{flashPurchase.title}}</a>
              </h3>
              <p class="desc ">{{flashPurchase.desc}}</p>
              <p class="price ">
                <span class="value ">{{flashPurchase.price}}</span>&nbsp;
                <span class="unit ">元</span>&nbsp;
                <span class="del ">{{flashPurchase.del}}</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'flashPurchase',
  data () {
    return {
      flashPurchaseList: [
        {
          imgSrc:
            'https://i8.mifile.cn/b2c-mimall-media/888410217eac616bea0ad249e6435139.jpg',
          title: '米家蓝牙温湿度计 白色',
          desc: '冷暖干湿，一目了然',
          price: '1',
          del: '69元'
        },
        {
          imgSrc:
            'https://i8.mifile.cn/b2c-mimall-media/f9215dc9023295de56cfc12179672a26.jpg',
          title: '时怡什锦果仁(罐装1020g)',
          desc: '5种果仁，用心甄选',
          price: 109,
          del: '148元'
        },
        {
          imgSrc:
            'https://i8.mifile.cn/v1/a1/4544f541-f2e1-f423-5cbf-88fe33c5e110.jpg',
          title: '空气净化器滤芯 除甲醛增强版',
          desc: '阻挡细菌，有效去除甲醛',
          price: 139,
          del: '169元'
        },
        {
          imgSrc:
            'https://i8.mifile.cn/v1/a1/db79032f-f017-5da6-8068-23118a0cf491.jpg',
          title: '米家空气净化器滤芯 抗菌版 紫色',
          desc: '净化室内空气看不见的细菌',
          price: 155,
          del: '159元'
        },
        {
          imgSrc:
            'https://i8.mifile.cn/b2c-mimall-media/be87a8db5206f7504720327bba1a24fa.jpg',
          title: '最生活毛巾816感恩套装',
          desc: '816感恩套装（浴巾+毛巾+方巾） 限量秒杀',
          price: 81,
          del: '133元'
        },
        {
          imgSrc:
            'https://i8.mifile.cn/v1/a1/0c22de9a-46c2-2c7d-9888-6058ce73d378.jpg',
          title: '米家多功能网关 白色',
          desc: '米家智能配件控制中心',
          price: 119,
          del: '149元'
        },
        {
          imgSrc: 'https://i8.mifile.cn/a1/pms_1512725431.07341927.jpg',
          title: '小米降噪耳机 黑色',
          desc: '双动圈+动铁声学架构',
          price: 259,
          del: '299元'
        },
        {
          imgSrc:
            'https://i8.mifile.cn/v1/a1/26f35fd6-ad98-8c3b-8d38-84c797ac7dd2.jpg',
          title: '8H护颈乳胶枕',
          desc: '多重新科技 升级好睡眠',
          price: 229,
          del: '239元'
        },
        {
          imgSrc:
            'https://i8.mifile.cn/v1/a1/b45d9673-32fa-251a-68b5-791f3cb7e65e.jpg',
          title: '米兔积木机器人',
          desc: '978个零件，手机智能遥控',
          price: 399,
          del: '499元'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import "../base";
@import "../../../assets/bootstrap/variables";
.flashPurchase-warpper {
  margin: 5rem auto;
  .box-hd {
    outline: 0.1rem solid rebeccapurple;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      margin: 0 2rem;
      font-size: 1.5rem;
      font-weight: 200;
      line-height: 4rem;
      color: #333;
    }
    .more {
      margin: 0 2rem;

      .control-group {
        a {
          border: 0.1rem solid #f0f0ff;
          color: #212121;
          text-decoration: none;

          &:first-child {
            border-radius: 0.3rem 0 0 0.3rem;
          }
          &:last-child {
            border-radius: 0 0.3rem 0.3rem 0;
          }
        }
      }
    }
  }
  .container {
    @include width();
    height: 20rem;
    display: flex;
    flex-flow: row nowrap;
    @include box-shadow();

    ul.flashPurchase-countdown {
      // outline: 1rem solid rebeccapurple;
      width: 15rem;
      height: 100%;
      background-color: rgb(241, 237, 237);

      .rainbow-item {
        // outline: 1px solid rebeccapurple;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: center;

        .time-title {
          font-size: 1.5rem;
          color: $main-color;
          margin-top: 3rem;
        }
        img {
          margin-top: 2rem;
        }
        .sub {
          margin-top: 2rem;
          color: rgba(0, 0, 0, 0.54);
          font-size: 1rem;
        }
        .countdown {
          display: flex;
          justify-content: center;
          text-align: center;
          margin-top: 2rem;

          .box {
            width: 3rem;
            height: 3rem;
            background: #605751;
            color: #fff;
            font-size: 1.5rem;
            line-height: 3rem;
          }
          .dosh {
            width: 1rem;
            height: 3rem;
            line-height: 3rem;
            color: #605751;
            font-size: 28px;
          }
        }
      }
    }

    div.carousel-wrapper {
      // outline: 1rem solid red;
      height: 20rem;
      overflow: hidden;
      flex: 1;

      ul.flashPurchase-list {
        width: 150rem;
        height: 100%;
        margin-left: -706px;
        transition: margin-left 0.5s ease 0s;
        display: flex;
        flex-flow: row nowrap;

        li.item {
          position: relative;
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          align-items: center;
          width: 13rem;
          height: 100%;
          padding: 0.1rem 0 0 1.5rem;
          background-clip: content-box;
          transition: all 1s;

          &:hover {
            position: relative;
            z-index: 2;
            transform: translate3d(0.25rem, 0.25rem, 0) scale(0.94, 0.94);

            @include box-shadow();
          }
          a {
            color: #212121;
            text-decoration: none;
          }

          .content {
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: center;

            .bg {
              // outline: 1px solid rebeccapurple;
              background: rgba(0, 0, 0, 0.01);
              padding: 0.1rem 0 0 1.5rem;
              position: absolute;
              top: 0.1rem;
              right: 0;
              bottom: 1.5rem;
              left: 0;
              z-index: 2;
              cursor: pointer;
            }

            .thumb {
              color: #757575;
              text-decoration: none;

              img {
                width: 10rem;
                height: 10rem;
              }
            }
            .title {
              margin: 1.5rem 0 0.25rem;
              width: 60%;
              font-size: 1rem;
              font-weight: 400;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
            .desc {
              width: 60%;
              height: 18px;
              margin: 0 20px 12px;
              font-size: 12px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              _zoom: 1;
              color: #b0b0b0;
            }
            .price {
              .value,
              .unit {
                color: #ff6709;
              }
              .del {
                color: #757575;
                text-decoration: line-through;
              }
            }
          }
        }
      }
    }
  }
}
</style>