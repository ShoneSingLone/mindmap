function getEndTiem () {
  let endDate = new Date()
  let endMs = endDate.getMilliseconds()
  let endS = endDate.getSeconds()
  let endM = endDate.getMinutes()
  return endDate.getTime() + (1 * 60 * 60 * 1000) - (endMs + endS * 1000 + endM * 60 * 1000)
}
// 设置截止时间
let end = getEndTiem()

let countTime = () => {
  let date = new Date()
  let now = date.getTime()
  let diffTime = end - now // 时间差
  // let leftTime = now; //时间差
  let d, h, m, s, ms
  if (diffTime >= 0) {
    d = Math.floor(diffTime / 1000 / 60 / 60 / 24)
    h = Math.floor(diffTime / 1000 / 60 / 60 % 24)
    m = Math.floor(diffTime / 1000 / 60 % 60)
    s = Math.floor(diffTime / 1000 % 60)
    ms = Math.floor(diffTime % 1000)
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
  // 将倒计时赋值到div中
  console.log(d + '天')
  console.log(h + '时')
  console.log(m + '分')
  console.log(s + '秒')
  console.log(ms + '毫秒')
  setTimeout(countTime, 1000)
}

countTime()
