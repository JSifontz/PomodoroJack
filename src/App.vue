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
  data() {
    return {
      timer: {
        minutes: 1,
        seconds: 0
      }
    }
  },
  methods: {
		iniciar: function () {
      this.interval = Chrono(1, this)
		},

		detener: function() {
      clearInterval(this.interval);
		}
	}
}
</script>

<style>
</style>

