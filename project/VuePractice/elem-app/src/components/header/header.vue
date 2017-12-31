<template>
  <div class="header" v-if="seller">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" heifht="64" :src="seller.avatar" alt="">
      </div>

      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}} </span>
        </div>

        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>

        <div class="support" v-if="sellerDescription">
          <span class="icon" :class="supportIconClass"></span>
          <span class="text">{{sellerDescription}}</span>
        </div>
      </div>

      <div class="support-count" v-if="sellerDescription">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>

    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>

    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>


  </div>
</template>

<script>
//放在Created里如何？
const SUPPORTS_TYPE = {
  0: "decrease",
  1: "discount",
  2: "special",
  3: "invoice",
  4: "guarantee"
};

export default {
  name: "v-header",
  created: function() {
    console.log(this.seller);
  },
  props: {
    seller: {
      type: Object
    }
  },
  computed: {
    sellerDescription: function() {
      return this.seller && this.seller.supports
        ? this.seller.supports[0].description
        : "";
    },
    supportIconClass: function() {
      return this.seller && this.seller.supports
        ? SUPPORTS_TYPE[this.seller.supports[0].type]
        : "";
    }
  },
  data() {
    return {
      // seller2: undefined
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../common/scss/mixin/mixin";

.header {
  position: relative;
  color: #fff;
  background: rgba(7, 17, 27, 0.5);
  font-size: 0;

  .content-wrapper {
    position: relative;
    padding: 24px 12px 18px 24px;

    .avatar {
      display: inline-block;
      vertical-align: top;
    }

    .content {
      display: inline-block;
      margin-left: 16px;
      font-size: 14px;

      .title {
        margin: 2px 0 8px 0;

        .brand {
          display: inline-block;
          vertical-align: top;
          width: 30px;
          height: 18px;
          @include bg-image("brand");
          background-size: 30px 18px;
          background-repeat: no-repeat;
        }

        .name {
          margin-left: 6px;
          font-size: 16px;
          line-height: 18px;
          font-weight: bold;
        }
      }

      .description {
        margin-bottom: 10px;
        line-height: 12px;
        font-size: 12px;
      }

      .support {
        .icon {
          display: inline-block;
          vertical-align: top;
          width: 12px;
          height: 12px;
          margin-right: 4px;
          background-size: 12px 12px;
          background-repeat: no-repeat;

          &.decrease {
            @include bg-image("decrease_1");
          }

          &.discount {
            @include bg-image("discount_1");
          }

          &.guarantee {
            @include bg-image("guarantee_1");
          }

          &.invoice {
            @include bg-image("invoice_1");
          }

          &.special {
            @include bg-image("special_1");
          }
        }

        .text {
          line-height: 12px;
          font-size: 10px;
          vertical-align: top;
        }
      }
    }

    .support-count {
      // display: none;
      position: absolute;
      right: 12px;
      bottom: 18px;
      padding: 0 8px;
      height: 24px;
      line-height: 24px;
      border-radius: 14px;
      background: rgba(0, 0, 0, 0.2);

      .count {
        font-size: 10px;
        line-height: 24px;
      }

      .icon-keyboard_arrow_right {
        font-size: 10px;
        line-height: 24px;
        margin-left: 2px;
      }
    }
  }
  .bulletin-wrapper {
    position: relative;
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: rgba(7, 17, 27, 0.2);

    .bulletin-title {
      display: inline-block;
      vertical-align: top;
      margin-top: 8px;
      width: 22px;
      height: 12px;
      @include bg-image("bulletin");
      background-size: 22px 12px;
      background-repeat: no-repeat;
    }

    .bulletin-text {
      vertical-align: top;
      margin: 0 4px;
      font-size: 10px;
    }

    .icon-keyboard_arrow_right {
      position: absolute;
      font-size: 10px;
      right: 12px;
      top: 8px;
    }
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(10px);
  }
}
</style>
