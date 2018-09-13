<template>
  <ul class="flashPurchase-countdown ">
    <li class="rainbow-item flashPurchaseInfo ">
      <div class="time-title alshRound ">{{timeInfoEndH}}:{{timeInfoEndM}} 场</div>
      <img src="//i1.mifile.cn/f/i/2018/mihome/flashpurchase.png">
      <div class="sub ">距离结束还有</div>
      <div class="countdown ">
        <div class="box">{{timeInfoH}}</div>
        <div class="dosh">:</div>
        <div class="box">{{timeInfoM}}</div>
        <div class="dosh">:</div>
        <div class="box">{{timeInfoS}}</div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'countdown',
  created () {
  },
  mounted () {
    let vm = this
    let end
    initCountdown()

    function initCountdown () {
      // 获取截止时间
      end = getEndTiem()
      setTimeTitle(end)
      // 触发倒计时
      countTime()
    }

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

    function setTimeTitle (end) {
      let endDate = new Date(end)
      if (end >= 0) {
        let h = endDate.getHours()
        let m = endDate.getMinutes()
        if (m < 10) { m = '0' + m }
        if (h < 10) { h = '0' + h }
        vm.timeInfoEndM = m
        vm.timeInfoEndH = h
      }
    }
    /**
     * 计时器，修改时间状态
     */
    function countTime () {
      let date = new Date()
      let now = date.getTime()
      let diffTime = end - now
      if (diffTime >= 0) {
        let h = Math.floor((diffTime / 1000 / 60 / 60) % 24)
        let m = Math.floor((diffTime / 1000 / 60) % 60)
        let s = Math.floor((diffTime / 1000) % 60)
        if (h < 10) { h = '0' + h }
        if (m < 10) { m = '0' + m }
        if (s < 10) { s = '0' + s }
        vm.timeInfoH = h
        vm.timeInfoM = m
        vm.timeInfoS = s
      } else {
        end = getEndTiem()
      }
      setTimeout(countTime, 1000)
    }
  },
  data () {
    return {
      timeInfoEndH: '00',
      timeInfoEndM: '00',
      timeInfoH: '00',
      timeInfoM: '00',
      timeInfoS: '00'
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