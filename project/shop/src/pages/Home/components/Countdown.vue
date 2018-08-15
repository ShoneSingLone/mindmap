<template>
  <ul class="flashPurchase-countdown ">
    <li class="rainbow-item flashPurchaseInfo ">
      <div class="time-title alshRound ">18:00 场</div>
      <img src="//i1.mifile.cn/f/i/2018/mihome/flashpurchase.png ">
      <div class="sub ">距离结束还有</div>
      <div class="countdown ">
        <div class="box">00</div>
        <div class="dosh">:</div>
        <div class="box">15</div>
        <div class="dosh">:</div>
        <div class="box">34</div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'countdown',
  mounted () {
    let end

    function getEndTiem () {
      // 往后延一个小时，取整
      let endDate = new Date()
      let endMs = endDate.getMilliseconds()
      let endS = endDate.getSeconds()
      let endM = endDate.getMinutes()
      return (
        endDate.getTime() +
        1 * 60 * 60 * 1000 -
        (endMs + endS * 1000 + endM * 60 * 1000)
      )
    }

    /**
     * 计时器，修改时间状态
     */
    function countTime () {
      let date = new Date()
      let now = date.getTime()
      let diffTime = end - now // 时间差
      // let leftTime = now; //时间差
      let d, h, m, s, ms
      if (diffTime >= 0) {
        // d = Math.floor(diffTime / 1000 / 60 / 60 / 24)
        h = Math.floor((diffTime / 1000 / 60 / 60) % 24)
        m = Math.floor((diffTime / 1000 / 60) % 60)
        s = Math.floor((diffTime / 1000) % 60)
        // ms = Math.floor(diffTime % 1000)
        if (ms < 100) {
          ms = '0' + ms
        }
        if (s < 10) {
          s = '0' + s
        }
        if (m < 10) {
          m = '0' + m
        }
        if (h < 10) {
          h = '0' + h
        }
      } else {
        end = getEndTiem()
      }
      this.countdown.h = h
      this.countdown.m = m
      this.countdown.s = s
      setTimeout(countTime, 1000)
    }
    function initCountdown () {
      end = getEndTiem()
      countTime()
    }
    // 设置截止时间
    initCountdown()
  },
  data () {
    return {
      countdown: {
        endH: '00',
        endM: '00',
        h: '00',
        m: '00',
        s: '00'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import "../../../assets/bootstrap/variables";

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
</style>