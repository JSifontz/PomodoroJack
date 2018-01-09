const seconds = 1000,
      minutes = seconds * 60,
      Hours = minutes * 60
  
const Ciclos = {
  JackCycle: {
    work: {
      name: "Trabajo",
      time: {
        minutes: 40,
        seconds: "00"
      }
    },
    breakLong: {
      name: "Descanso Largo",
      time: {
        minutes: 30,
        seconds: "00"
      }
    },
    breakShort: {
      name: "Descanso Corto",
      time: {
        minutes: 5,
        seconds: "00"
      }
    }
  },
  pomodoroCycle: {
    work: {
      name: "Trabajo",
      time: {
        minutes: 25,
        seconds: "00"
      }
    },
    breakLong: {
      name: "Descanso Largo",
      time: {
        minutes: 15,
        seconds: "00"
      }
    },
    breakShort: {
      name: "Descanso Corto",
      time: {
        minutes: 5,
        seconds: "00"
      }
    }
  }
}

let actualCycle = Ciclos.JackCycle,
    cycleIter = 0,
    cycleOrden = [
      actualCycle.work,
      actualCycle.breakShort,
      actualCycle.work,
      actualCycle.breakShort,
      actualCycle.work,
      actualCycle.breakShort,
      actualCycle.work,
      actualCycle.breakLong
    ]



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

const Chrono = (app) => {
  time = cycleOrden[cycleIter].time.minutes

  let miliTime = time *  minutes,
      now = new Date(),
      deadline = new Date(now.valueOf() + miliTime),

  timer = setInterval(function () {
    remainTime = getRemainTime(deadline)

    if (remainTime.time < 1) {
      clearInterval(app.interval)
      
      cycleIter != 7 ? cycleIter++ : cycleIter = 0
    }

    app.timer = {
      minutes: remainTime.minutes,
      seconds: remainTime.seconds
    }
  }, 1000)

  return timer
}

module.exports = {
  Chrono
}
