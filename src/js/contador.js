const seconds = 1000,
      minutes = seconds * 60,
      Hours = minutes * 60

const getRemainTime = deadline => {
  let now = new Date(),
      remainTime = deadline - now

  remainTime = (remainTime + 1000) / 1000

  let remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
      remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
      remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2)

  return {
    time: remainTime,
    seconds: remainSeconds,
    minutes: remainMinutes,
    hours: remainHours
  }
}

const Chrono = (time, app) => {
  let miliTime = time *  minutes,
      now = new Date(),
      deadline = new Date(now.valueOf() + miliTime),

  timer = setInterval(function () {
    remainTime = getRemainTime(deadline)

    if (remainTime.time < 1) {
      clearInterval(app.interval)
      console.log('borrar intervalo')
    }

    app.timer = {
      minues: remainTime.minutes,
      seconds: remainTime.seconds
    }
  }, 1000)

  return timer
}

module.exports = Chrono