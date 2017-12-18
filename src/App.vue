<template>
  <div id="app">
    <p id="HM">Quedan {{ timer.minutes }}m {{ timer.seconds }}s</p>
    <button @click="iniciar">Iniciar</button>
    <button @click="detener">Detener</button>
  </div>
</template>

<script>
import {Chrono} from './js/contador.js'

export default {
  name: 'app',
  data: function () {
    return {
      timer: {
        minutes: "40",
        seconds: "00"
      },

      ciclos: {
        JackClycle: {
          Trabajo: {
            nombre: "Trabajo",
            time: {
              minutes: 40,
              seconds: 0
            }
          },
          descansoCorto: {
            nombre: "Short Break",
            time: {
              minutes: 5,
              seconds: 0
            }
          },
          descansoLargo: {
            nombre: "Long Break",
            time: {
              minutes: 30,
              seconds: 0
            }
          }
        },

        PomodoroCycle: {
          Trabajo: {
            nombre: "Trabajo",
            time: 25,
          },
          descansoCorto: {
            nombre: "Short Break",
            time: 5
          },
          descansoLargo: {
            nombre: "Long Break",
            time: 15
          }
        }
      },
    }
  },
  methods: {
    iniciar: function () {
      this.interval = Chrono(this)
    },

    detener: function() {
      clearInterval(this.interval);
    }
  }
}
</script>

<style>
</style>

